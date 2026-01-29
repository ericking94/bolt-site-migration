// Endpoint para Vercel/Netlify Functions
const { MercadoPagoConfig, Preference } = require('mercadopago');

// Configurar o cliente do Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.VITE_MERCADOPAGO_ACCESS_TOKEN || 'APP_USR-1210959015320647-060716-fd47dae2a7d2e29c972d3906da233fb5-12645143',
});

const preference = new Preference(client);

module.exports = async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { idPedido, titulo, valor } = req.body;

    // Validar dados de entrada
    if (!idPedido || !titulo || !valor || valor <= 0) {
      return res.status(400).json({ 
        error: 'Dados inválidos: idPedido, titulo e valor são obrigatórios' 
      });
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
        success: `${req.headers.origin || 'https://ericking.com'}/pagamento?status=success`,
        failure: `${req.headers.origin || 'https://ericking.com'}/pagamento?status=failure`,
        pending: `${req.headers.origin || 'https://ericking.com'}/pagamento?status=pending`
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

    return res.status(200).json({
      init_point: response.init_point
    });

  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    return res.status(500).json({
      error: `Falha ao criar pagamento: ${error.message || 'Erro desconhecido'}`
    });
  }
};