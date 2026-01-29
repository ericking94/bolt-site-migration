import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configurar o cliente do Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: import.meta.env.VITE_MERCADOPAGO_ACCESS_TOKEN || 'APP_USR-1210959015320647-060716-fd47dae2a7d2e29c972d3906da233fb5-12645143',
});

const preference = new Preference(client);

export interface CreatePaymentRequest {
  idPedido: string;
  titulo: string;
  valor: number;
}

export interface CreatePaymentResponse {
  init_point: string;
}

export const createPayment = async (req: CreatePaymentRequest): Promise<CreatePaymentResponse> => {
  try {
    const { idPedido, titulo, valor } = req;

    // Validar dados de entrada
    if (!idPedido || !titulo || !valor || valor <= 0) {
      throw new Error('Dados inválidos: idPedido, titulo e valor são obrigatórios');
    }

    // Criar preferência de pagamento
    const preferenceData = {
      items: [
        {
          title: titulo,
          quantity: 1,
          unit_price: valor,
          currency_id: 'BRL'
        }
      ],
      external_reference: idPedido,
      notification_url: 'https://www.ericking.com.br/webhook',
      back_urls: {
        success: `${window.location.origin}/pagamento?status=success`,
        failure: `${window.location.origin}/pagamento?status=failure`,
        pending: `${window.location.origin}/pagamento?status=pending`
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_types: [],
        installments: 12
      }
    };

    const response = await preference.create({ body: preferenceData });

    if (!response.init_point) {
      throw new Error('Erro ao criar preferência: init_point não retornado');
    }

    return {
      init_point: response.init_point
    };

  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    throw new Error(`Falha ao criar pagamento: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
  }
};

// Função para ser usada em um endpoint Express/Node.js
export const handleCreatePayment = async (req: any, res: any) => {
  try {
    const result = await createPayment(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Erro no endpoint de pagamento:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Erro interno do servidor'
    });
  }
};