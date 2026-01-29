import React, { useState } from 'react';
import { CreditCard, Loader } from 'lucide-react';
import { PaymentService } from '../services/paymentService';

interface PaymentButtonProps {
  idPedido: string;
  titulo: string;
  valor: number;
  className?: string;
  children?: React.ReactNode;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  idPedido,
  titulo,
  valor,
  className = '',
  children
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await PaymentService.createPayment({
        idPedido,
        titulo,
        valor
      });

      // Redirecionar para o Mercado Pago
      window.open(response.init_point, '_blank');
    } catch (err) {
      console.error('Erro ao criar pagamento:', err);
      setError(err instanceof Error ? err.message : 'Erro ao processar pagamento');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className={`magic-btn flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {isLoading ? (
          <>
            <Loader size={18} className="animate-spin" />
            PROCESSANDO...
          </>
        ) : (
          <>
            <CreditCard size={18} />
            {children || 'PAGAR COM MERCADO PAGO'}
          </>
        )}
      </button>
      
      {error && (
        <div className="mt-2 p-2 bg-error/20 border border-error/40 rounded text-error text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default PaymentButton;