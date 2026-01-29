import { CreatePaymentRequest, CreatePaymentResponse } from '../api/criar-pagamento';

export class PaymentService {
  private static readonly API_BASE_URL = '/api';

  static async createPayment(data: CreatePaymentRequest): Promise<CreatePaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/criar-pagamento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Erro ao criar pagamento:', error);
      throw error;
    }
  }
}