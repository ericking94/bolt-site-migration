import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, CheckCircle, Clock, AlertTriangle, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

interface PaymentPageState {
  product: {
    id: string;
    title: string;
    price: number;
  };
  formData: any;
  whatsappMessage: string;
  mercadoPagoUrl?: string;
}

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'success' | 'error'>('pending');

  const state = location.state as PaymentPageState;
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get('status');

  useEffect(() => {
    if (!state?.product) {
      navigate('/');
    }

    // Handle Mercado Pago return status
    if (status) {
      switch (status) {
        case 'success':
          setPaymentStatus('success');
          break;
        case 'failure':
          setPaymentStatus('error');
          break;
        case 'pending':
          setPaymentStatus('processing');
          break;
      }
    }
  }, [state, navigate, status]);

  if (!state?.product) {
    return null;
  }

  const { product } = state;

  const handleBackToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/5522999001994?text=${encodeURIComponent(
      `Olá! Acabei de finalizar o pedido de ${product.title} no valor de R$ ${product.price.toFixed(2)}. Aguardo confirmação do pagamento.`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOpenMercadoPago = () => {
    if (state.mercadoPagoUrl) {
      window.open(state.mercadoPagoUrl, '_blank');
    }
  };

  if (paymentStatus === 'success') {
    return (
      <div className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <AnimatedElement animation="scale">
                <div className="card">
                  <div className="text-success mb-6">
                    <CheckCircle size={64} className="mx-auto" />
                  </div>
                  <h2 className="font-title text-3xl text-text-bright mb-4">Pagamento Aprovado!</h2>
                  <p className="text-text-dim mb-6">
                    Seu pagamento foi processado com sucesso. Você receberá uma confirmação em breve.
                  </p>
                  
                  <div className="bg-background/80 p-4 rounded-lg mb-6">
                    <h3 className="font-title text-text-bright mb-2">{product.title}</h3>
                    <p className="text-primary font-title text-xl">R$ {product.price.toFixed(2)}</p>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={handleBackToWhatsApp}
                      className="magic-btn w-full"
                    >
                      FALAR NO WHATSAPP
                    </button>
                    <button 
                      onClick={() => navigate('/')}
                      className="magic-btn-outline w-full"
                    >
                      VOLTAR AO INÍCIO
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <AnimatedElement animation="scale">
                <div className="card">
                  <div className="text-error mb-6">
                    <AlertTriangle size={64} className="mx-auto" />
                  </div>
                  <h2 className="font-title text-3xl text-text-bright mb-4">Pagamento Não Aprovado</h2>
                  <p className="text-text-dim mb-6">
                    Houve um problema com seu pagamento. Entre em contato conosco para resolver.
                  </p>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleBackToWhatsApp}
                      className="magic-btn w-full"
                    >
                      FALAR NO WHATSAPP
                    </button>
                    <button 
                      onClick={() => navigate(`/checkout/${product.id}`)}
                      className="magic-btn-outline w-full"
                    >
                      TENTAR NOVAMENTE
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (paymentStatus === 'processing') {
    return (
      <div className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <AnimatedElement animation="scale">
                <div className="card">
                  <div className="text-warning mb-6">
                    <Clock size={64} className="mx-auto animate-spin" />
                  </div>
                  <h2 className="font-title text-3xl text-text-bright mb-4">Pagamento Pendente</h2>
                  <p className="text-text-dim mb-6">
                    Seu pagamento está sendo processado. Aguarde a confirmação.
                  </p>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleBackToWhatsApp}
                      className="magic-btn w-full"
                    >
                      FALAR NO WHATSAPP
                    </button>
                    <button 
                      onClick={() => navigate('/')}
                      className="magic-btn-outline w-full"
                    >
                      VOLTAR AO INÍCIO
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="PAGAMENTO"
            subtitle="Finalize seu pagamento através do Mercado Pago ou entre em contato via WhatsApp."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mercado Pago Payment */}
              <AnimatedElement animation="fadeInLeft">
                <div className="card">
                  <h3 className="font-title text-xl text-text-bright mb-6">Pagamento Online</h3>
                  
                  <div className="bg-primary/20 border border-primary/40 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard size={20} className="text-primary" />
                      <span className="font-title text-primary">Mercado Pago</span>
                    </div>
                    <p className="text-text text-sm">
                      PIX, Cartão de Crédito/Débito e outras formas de pagamento.
                    </p>
                  </div>

                  {state.mercadoPagoUrl ? (
                    <button 
                      onClick={handleOpenMercadoPago}
                      className="magic-btn w-full flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      PAGAR VIA MERCADO PAGO
                    </button>
                  ) : (
                    <div className="bg-warning/20 border border-warning/40 rounded-lg p-4">
                      <p className="text-warning text-sm text-center">
                        Link de pagamento não disponível. Use o WhatsApp para finalizar.
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedElement>

              {/* WhatsApp Contact */}
              <AnimatedElement animation="fadeInRight" delay={0.2}>
                <div className="card">
                  <h3 className="font-title text-xl text-text-bright mb-6">Contato Direto</h3>
                  
                  <div className="bg-success/20 border border-success/40 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone size={20} className="text-success" />
                      <span className="font-title text-success">WhatsApp</span>
                    </div>
                    <p className="text-text text-sm">
                      Fale diretamente conosco para tirar dúvidas ou finalizar o pagamento.
                    </p>
                  </div>

                  <button 
                    onClick={handleBackToWhatsApp}
                    className="magic-btn w-full bg-success hover:bg-success/80"
                  >
                    FALAR NO WHATSAPP
                  </button>
                </div>
              </AnimatedElement>
            </div>

            {/* Order Summary */}
            <AnimatedElement animation="fadeInUp" delay={0.4} className="mt-8">
              <div className="card text-center">
                <h3 className="font-title text-xl text-text-bright mb-6">Resumo do Pedido</h3>
                
                <div className="bg-background/80 p-6 rounded-lg mb-6">
                  <h4 className="font-title text-text-bright mb-2">{product.title}</h4>
                  <div className="text-3xl font-title text-primary mb-2">R$ {product.price.toFixed(2)}</div>
                  <p className="text-text-dim text-sm">Produto digital</p>
                </div>

                <div className="bg-background-light/90 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-title text-text-bright mb-3 text-sm">Informações Importantes:</h4>
                  <ul className="space-y-2 text-xs text-text-dim">
                    <li>• Pagamento 100% seguro via Mercado Pago</li>
                    <li>• Confirmação automática via WhatsApp</li>
                    <li>• Suporte técnico incluído</li>
                    <li>• Acesso imediato após confirmação</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;