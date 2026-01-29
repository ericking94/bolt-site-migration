// Mercado Pago integration service
import { CreatePaymentRequest, CreatePaymentResponse, createPayment } from '../api/criar-pagamento';

export interface MercadoPagoPreference {
  title: string;
  quantity: number;
  unit_price: number;
  currency_id: string;
}

export interface MercadoPagoResponse {
  id: string;
  init_point: string;
  sandbox_init_point: string;
}

export class MercadoPagoService {
  private static readonly ACCESS_TOKEN = import.meta.env.VITE_MERCADOPAGO_ACCESS_TOKEN || 'APP_USR-1210959015320647-060716-fd47dae2a7d2e29c972d3906da233fb5-12645143';
  private static readonly BASE_URL = 'https://api.mercadopago.com';

  static async createPreference(
    title: string,
    price: number,
    quantity: number = 1,
    externalReference?: string
  ): Promise<MercadoPagoResponse | null> {
    try {
      const preference = {
        items: [
          {
            title,
            quantity,
            unit_price: price,
            currency_id: 'BRL'
          }
        ],
        external_reference: externalReference,
        back_urls: {
          success: `${window.location.origin}/pagamento?status=success`,
          failure: `${window.location.origin}/pagamento?status=failure`,
          pending: `${window.location.origin}/pagamento?status=pending`
        },
        auto_return: 'approved',
        payment_methods: {
          excluded_payment_types: [],
          installments: 12
        },
        notification_url: `${window.location.origin}/api/mercadopago/webhook`
      };

      const response = await fetch(`${this.BASE_URL}/checkout/preferences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.ACCESS_TOKEN}`
        },
        body: JSON.stringify(preference)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating Mercado Pago preference:', error);
      return null;
    }
  }

  static getPaymentUrl(preference: MercadoPagoResponse): string {
    // Use sandbox for development, production for live
    const isProduction = import.meta.env.PROD;
    return isProduction ? preference.init_point : preference.sandbox_init_point;
  }

  // Nova função usando a API criada
  static async createPaymentPreference(data: CreatePaymentRequest): Promise<CreatePaymentResponse> {
    return await createPayment(data);
  }
}