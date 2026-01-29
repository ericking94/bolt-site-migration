import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, User, Mail, MessageSquare, CreditCard } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import RankSelector from '../components/RankSelector';
import GameQuantitySelector from '../components/GameQuantitySelector';
import RoleSelector from '../components/RoleSelector';
import BehaviorSelector from '../components/BehaviorSelector';
import { getProductPrice } from '../data/pricing';
import { MercadoPagoService } from '../services/mercadoPago';

interface ProductInfo {
  id: string;
  title: string;
  description: string;
  category: string;
  type?: string;
}

const productDatabase: Record<string, ProductInfo> = {
  // Contas Calibradas
  'calibrar-ranked': { id: 'calibrar-ranked', title: 'Conta Ranked Liberada', description: 'Conta pronta para calibrar + Dota Plus', category: 'contas' },
  'calibrar-arauto': { id: 'calibrar-arauto', title: 'Conta Rank Arauto', description: 'Conta calibrada no rank Arauto', category: 'contas' },
  'calibrar-guardiao': { id: 'calibrar-guardiao', title: 'Conta Rank Guardião', description: 'Conta calibrada no rank Guardião', category: 'contas' },
  'calibrar-cruzado': { id: 'calibrar-cruzado', title: 'Conta Rank Cruzado', description: 'Conta calibrada no rank Cruzado', category: 'contas' },
  'calibrar-arconte': { id: 'calibrar-arconte', title: 'Conta Rank Arconte', description: 'Conta calibrada no rank Arconte', category: 'contas' },
  'calibrar-lenda': { id: 'calibrar-lenda', title: 'Conta Rank Lenda', description: 'Conta calibrada no rank Lenda', category: 'contas' },
  'calibrar-ancient': { id: 'calibrar-ancient', title: 'Conta Rank Ancient', description: 'Conta calibrada no rank Ancient', category: 'contas' },
  'calibrar-divine': { id: 'calibrar-divine', title: 'Conta Rank Divine', description: 'Conta calibrada no rank Divine', category: 'contas' },

  // Contas Imortais (sem smurf pool)
  'clean-5620': { id: 'clean-5620', title: 'Conta Imortal 5620+', description: 'Conta imortal sem smurf pool', category: 'contas' },
  'clean-6k': { id: 'clean-6k', title: 'Conta Imortal 6k+', description: 'Conta imortal sem smurf pool', category: 'contas' },
  'clean-7k': { id: 'clean-7k', title: 'Conta Imortal 7k+', description: 'Conta imortal sem smurf pool', category: 'contas' },
  'clean-8k': { id: 'clean-8k', title: 'Conta Imortal 8k+', description: 'Conta imortal sem smurf pool', category: 'contas' },
  'clean-9k': { id: 'clean-9k', title: 'Conta Imortal 9k+', description: 'Conta imortal sem smurf pool (sob encomenda)', category: 'contas' },
  'clean-10k': { id: 'clean-10k', title: 'Conta Imortal 10k+', description: 'Conta imortal sem smurf pool (sob encomenda)', category: 'contas' },
  'clean-11k': { id: 'clean-11k', title: 'Conta Imortal 11k+', description: 'Conta imortal sem smurf pool (sob encomenda)', category: 'contas' },
  'clean-12k': { id: 'clean-12k', title: 'Conta Imortal 12k+', description: 'Conta imortal sem smurf pool (sob encomenda)', category: 'contas' },
  'clean-14k': { id: 'clean-14k', title: 'Conta Imortal 14k+', description: 'Conta imortal sem smurf pool (sob encomenda)', category: 'contas' },

  // Contas Imortais (com smurf pool)
  'smurf-6k': { id: 'smurf-6k', title: 'Conta Imortal 6k+ (Smurf Pool)', description: 'Conta imortal com smurf pool', category: 'contas' },
  'smurf-7k': { id: 'smurf-7k', title: 'Conta Imortal 7k+ (Smurf Pool)', description: 'Conta imortal com smurf pool', category: 'contas' },
  'smurf-8k': { id: 'smurf-8k', title: 'Conta Imortal 8k+ (Smurf Pool)', description: 'Conta imortal com smurf pool', category: 'contas' },
  'smurf-9k': { id: 'smurf-9k', title: 'Conta Imortal 9k+ (Smurf Pool)', description: 'Conta imortal com smurf pool', category: 'contas' },
  'smurf-10k': { id: 'smurf-10k', title: 'Conta Imortal 10k+ (Smurf Pool)', description: 'Conta imortal com smurf pool', category: 'contas' },
  'smurf-11k': { id: 'smurf-11k', title: 'Conta Imortal 11k+ (Smurf Pool)', description: 'Conta imortal com smurf pool', category: 'contas' },
  'smurf-12k': { id: 'smurf-12k', title: 'Conta Imortal 12k+ (Smurf Pool)', description: 'Conta imortal com smurf pool', category: 'contas' },

  // Mentoria - Análise de Replays
  'analise-sessao-individual': { id: 'analise-sessao-individual', title: 'Análise de Replay - Sessão Individual', description: 'Análise detalhada de 1 replay', category: 'mentoria', type: 'analise' },
  'analise-first-blood': { id: 'analise-first-blood', title: 'Análise de Replay - First Blood', description: '3 análises de replays', category: 'mentoria', type: 'analise' },
  'analise-divine': { id: 'analise-divine', title: 'Análise de Replay - Divine', description: '5 análises de replays', category: 'mentoria', type: 'analise' },
  'analise-rampage': { id: 'analise-rampage', title: 'Análise de Replay - Rampage', description: '7 análises de replays', category: 'mentoria', type: 'analise' },
  'analise-immortal': { id: 'analise-immortal', title: 'Análise de Replay - Immortal', description: '10 análises de replays', category: 'mentoria', type: 'analise' },

  // Mentoria - Ao Vivo
  'aovivo-sessao-individual': { id: 'aovivo-sessao-individual', title: 'Mentoria Ao Vivo - Sessão Individual', description: 'Mentoria ao vivo durante partida', category: 'mentoria', type: 'aovivo' },
  'aovivo-first-blood': { id: 'aovivo-first-blood', title: 'Mentoria Ao Vivo - First Blood', description: '3 mentorias ao vivo', category: 'mentoria', type: 'aovivo' },
  'aovivo-divine': { id: 'aovivo-divine', title: 'Mentoria Ao Vivo - Divine', description: '5 mentorias ao vivo', category: 'mentoria', type: 'aovivo' },
  'aovivo-rampage': { id: 'aovivo-rampage', title: 'Mentoria Ao Vivo - Rampage', description: '7 mentorias ao vivo', category: 'mentoria', type: 'aovivo' },
  'aovivo-immortal': { id: 'aovivo-immortal', title: 'Mentoria Ao Vivo - Immortal', description: '10 mentorias ao vivo', category: 'mentoria', type: 'aovivo' },

  // Mentoria - Duo Ao Vivo
  'duo-sessao-individual': { id: 'duo-sessao-individual', title: 'Mentoria Duo - Sessão Individual', description: 'Duo ao vivo com mentoria', category: 'mentoria', type: 'duo' },
  'duo-first-blood': { id: 'duo-first-blood', title: 'Mentoria Duo - First Blood', description: '3 duos com mentoria', category: 'mentoria', type: 'duo' },
  'duo-divine': { id: 'duo-divine', title: 'Mentoria Duo - Divine', description: '5 duos com mentoria', category: 'mentoria', type: 'duo' },
  'duo-rampage': { id: 'duo-rampage', title: 'Mentoria Duo - Rampage', description: '7 duos com mentoria', category: 'mentoria', type: 'duo' },
  'duo-immortal': { id: 'duo-immortal', title: 'Mentoria Duo - Immortal', description: '10 duos com mentoria', category: 'mentoria', type: 'duo' },

  // Jogue Comigo
  'partida-avulsa': { id: 'partida-avulsa', title: 'Partida Avulsa', description: 'Jogue uma partida comigo', category: 'play' },
  'pacote-10-jogos': { id: 'pacote-10-jogos', title: 'Pacote 10 Jogos', description: 'Pacote com 10 partidas', category: 'play' },
  'duo-didatico-avulso': { id: 'duo-didatico-avulso', title: 'Duo Didático Avulso', description: 'Sessão de duo didático', category: 'play' },
  'duo-didatico-pacote': { id: 'duo-didatico-pacote', title: 'Duo Didático - Pacote 5', description: 'Pacote com 5 sessões de duo didático', category: 'play' },

  // Boost
  'boost-mmr': { id: 'boost-mmr', title: 'Boost de MMR', description: 'Boost personalizado de MMR', category: 'boost' },
  'calibrar-conta': { id: 'calibrar-conta', title: 'Calibração de Conta', description: 'Calibração profissional', category: 'boost' },

  // Low Priority
  'low-priority-1': { id: 'low-priority-1', title: 'Remoção 1 Jogo Low Priority', description: 'Remoção de 1 jogo de low priority', category: 'low-priority' },
  'low-priority-2': { id: 'low-priority-2', title: 'Remoção 2 Jogos Low Priority', description: 'Remoção de 2 jogos de low priority', category: 'low-priority' },
  'low-priority-3': { id: 'low-priority-3', title: 'Remoção 3 Jogos Low Priority', description: 'Remoção de 3 jogos de low priority', category: 'low-priority' },
  'low-priority-4': { id: 'low-priority-4', title: 'Remoção 4 Jogos Low Priority', description: 'Remoção de 4 jogos de low priority', category: 'low-priority' },
  'low-priority-5': { id: 'low-priority-5', title: 'Remoção 5 Jogos Low Priority', description: 'Remoção de 5 jogos de low priority', category: 'low-priority' },

  // Boost Behavior
  'boost-behavior-10': { id: 'boost-behavior-10', title: 'Boost Behavior 10 Jogos', description: '10 jogos turbo para melhorar behavior score', category: 'boost-behavior' },
  'boost-behavior-20': { id: 'boost-behavior-20', title: 'Boost Behavior 20 Jogos', description: '20 jogos turbo para melhorar behavior score', category: 'boost-behavior' },
  'boost-behavior-30': { id: 'boost-behavior-30', title: 'Boost Behavior 30 Jogos', description: '30 jogos turbo para melhorar behavior score', category: 'boost-behavior' },
  'boost-behavior-40': { id: 'boost-behavior-40', title: 'Boost Behavior 40 Jogos', description: '40 jogos turbo para melhorar behavior score', category: 'boost-behavior' },
  'boost-behavior-50': { id: 'boost-behavior-50', title: 'Boost Behavior 50 Jogos', description: '50 jogos turbo para melhorar behavior score', category: 'boost-behavior' },

  // PDFs - Funções
  'pdf-hard-carry': { id: 'pdf-hard-carry', title: 'PDF Hard Carry', description: 'Guia completo para hard carry', category: 'pdf' },
  'pdf-mid': { id: 'pdf-mid', title: 'PDF Mid', description: 'Guia completo para mid', category: 'pdf' },
  'pdf-offlane': { id: 'pdf-offlane', title: 'PDF Offlane', description: 'Guia completo para offlane', category: 'pdf' },
  'pdf-support-4': { id: 'pdf-support-4', title: 'PDF Suporte 4', description: 'Guia completo para suporte 4', category: 'pdf' },
  'pdf-support-5': { id: 'pdf-support-5', title: 'PDF Suporte 5', description: 'Guia completo para suporte 5', category: 'pdf' },

  // PDFs - Heróis
  'pdf-anti-mage': { id: 'pdf-anti-mage', title: 'PDF Anti-Mage', description: 'Guia especializado do Anti-Mage', category: 'pdf' },
  'pdf-storm-spirit': { id: 'pdf-storm-spirit', title: 'PDF Storm Spirit', description: 'Guia especializado do Storm Spirit', category: 'pdf' },

  // Custom products for sliders
  'boost-behavior-custom': { id: 'boost-behavior-custom', title: 'Boost Behavior Score Personalizado', description: 'Boost behavior score com quantidade personalizada', category: 'boost-behavior' },
  'low-priority-custom': { id: 'low-priority-custom', title: 'Remoção Low Priority Personalizada', description: 'Remoção de low priority com quantidade personalizada', category: 'low-priority' },
};

const CheckoutPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nickname: '',
    steamId: '',
    message: '',
    rank: 'archon',
    gameQuantity: 1,
    role: 'hard-carry'
  });

  const [behaviorScore, setBehaviorScore] = useState('low');

  const [finalPrice, setFinalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'mercadopago'>('whatsapp');
  const [isCreatingPayment, setIsCreatingPayment] = useState(false);

  // Get product info
  const product = productId ? productDatabase[productId] : null;
  const productPrice = productId ? getProductPrice(productId) : null;

  // Handle boost MMR special case
  const currentMMR = searchParams.get('currentMMR');
  const targetMMR = searchParams.get('targetMMR');
  const boostPrice = searchParams.get('price');
  
  // Handle custom products from sliders
  const customGames = searchParams.get('games');
  const customPrice = searchParams.get('price');

  useEffect(() => {
    if (!product || !productPrice) {
      navigate('/');
      return;
    }

    // Set initial price
    if (productId === 'boost-mmr' && boostPrice) {
      setFinalPrice(parseFloat(boostPrice));
    } else if ((productId === 'boost-behavior-custom' || productId === 'low-priority-custom') && customPrice) {
      setFinalPrice(parseFloat(customPrice));
    } else if (productId === 'partida-avulsa' || productId === 'duo-didatico-avulso') {
      setFinalPrice(productPrice.price * formData.gameQuantity);
    } else {
      setFinalPrice(productPrice.price);
    }
  }, [product, productPrice, productId, boostPrice, customPrice, formData.gameQuantity, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRankChange = (rank: string) => {
    setFormData(prev => ({ ...prev, rank }));
  };

  const handleGameQuantityChange = (quantity: number, price: number) => {
    setFormData(prev => ({ ...prev, gameQuantity: quantity }));
    setFinalPrice(price);
  };

  const handleRoleChange = (role: string) => {
    setFormData(prev => ({ ...prev, role }));
  };

  const handleBehaviorChange = (behavior: string) => {
    setBehaviorScore(behavior);
  };

  const generateWhatsAppMessage = () => {
    let message = `🎮 *PEDIDO - ${product?.title}*\n\n`;
    
    message += `📋 *Dados do Cliente:*\n`;
    // Only include name for non-play products
    if (!['partida-avulsa', 'pacote-10-jogos', 'duo-didatico-avulso', 'duo-didatico-pacote'].includes(productId || '')) {
      message += `• Nome: ${formData.name}\n`;
    }
    
    // Include email only for contas
    if (product?.category === 'contas') {
      message += `• E-mail: ${formData.email}\n`;
    }
    
    // Include Steam ID for Jogue Comigo products
    if (['partida-avulsa', 'pacote-10-jogos', 'duo-didatico-avulso', 'duo-didatico-pacote'].includes(productId || '')) {
      message += `• Nickname: ${formData.nickname}\n`;
      message += `• ID Steam: ${formData.steamId}\n`;
    }
    
    message += `\n`;

    message += `🛒 *Produto:*\n`;
    message += `• ${product?.title}\n`;
    message += `• Valor: R$ ${finalPrice.toFixed(2)}\n\n`;

    // Add specific details based on product type
    if (productId === 'boost-mmr' && currentMMR && targetMMR) {
      message += `📊 *Detalhes do Boost:*\n`;
      message += `• MMR Atual: ${currentMMR}\n`;
      message += `• MMR Desejado: ${targetMMR}\n`;
      message += `• Diferença: ${parseInt(targetMMR) - parseInt(currentMMR)} MMR\n\n`;
    }

    if ((productId === 'boost-behavior-custom' || productId === 'low-priority-custom') && customGames) {
      message += `🎯 *Detalhes:*\n`;
      if (productId === 'boost-behavior-custom') {
        message += `• Quantidade: ${customGames} jogos turbo\n`;
        message += `• Behavior Score estimado: +${parseInt(customGames) * 25}\n\n`;
      } else {
        message += `• Quantidade: ${customGames} ${parseInt(customGames) === 1 ? 'jogo' : 'jogos'} low priority\n\n`;
      }
    }

    if (productId === 'partida-avulsa' || productId === 'duo-didatico-avulso') {
      message += `🎯 *Detalhes:*\n`;
      message += `• Quantidade: ${formData.gameQuantity} ${formData.gameQuantity === 1 ? 'jogo' : 'jogos'}\n`;
      message += `• Rank: ${formData.rank}\n\n`;
    }

    if (productId === 'pacote-10-jogos' || productId === 'duo-didatico-pacote') {
      message += `🏆 *Rank Atual:*\n`;
      message += `${formData.rank}\n\n`;
      message += `⚔️ *Função Preferida:*\n`;
      message += `${formData.role}\n\n`;
    }

    if (product?.category === 'mentoria') {
      message += `🏆 *Rank Atual:*\n`;
      message += `${formData.rank}\n\n`;
      message += `⚔️ *Função Preferida:*\n`;
      message += `${formData.role}\n\n`;
    }

    if (productId?.includes('boost-behavior') || productId?.includes('low-priority')) {
      message += `📊 *Behavior Score Atual:*\n`;
      message += `${behaviorScore}\n\n`;
    }

    if (formData.message && productId === 'boost-mmr') {
      message += `💬 *Observações:*\n`;
      message += `${formData.message}\n\n`;
    }

    message += `✅ Aguardo confirmação para prosseguir com o pagamento!`;
    
    return message;
  };

  const handleMercadoPagoPayment = async () => {
    if (!product) return;
    
    setIsCreatingPayment(true);
    
    try {
      const preference = await MercadoPagoService.createPreference(
        product.title,
        finalPrice,
        1,
        `${productId}-${Date.now()}`
      );
      
      if (preference) {
        const paymentUrl = MercadoPagoService.getPaymentUrl(preference);
        
        // Navigate to payment page with Mercado Pago URL
        navigate('/pagamento', {
          state: {
            product: {
              id: productId,
              title: product.title,
              price: finalPrice
            },
            formData,
            whatsappMessage: generateWhatsAppMessage(),
            mercadoPagoUrl: paymentUrl
          }
        });
      } else {
        alert('Erro ao criar pagamento. Tente novamente ou use o WhatsApp.');
      }
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Erro ao criar pagamento. Tente novamente ou use o WhatsApp.');
    } finally {
      setIsCreatingPayment(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (paymentMethod === 'mercadopago') {
        await handleMercadoPagoPayment();
      } else {
        const whatsappMessage = generateWhatsAppMessage();
        
        // Determine WhatsApp number based on product category
        let whatsappNumber = '5522999001994'; // Default number
        if (product?.category === 'contas') {
          whatsappNumber = '554799301168'; // Special number for contas
        }
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Navigate to a success page or back to home
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 1000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product || !productPrice) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-title text-2xl text-text-bright mb-4">Produto não encontrado</h2>
          <button 
            onClick={() => navigate('/')}
            className="magic-btn"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <AnimatedElement animation="fadeInUp">
              <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => navigate(-1)}
                  className="text-text-dim hover:text-text-bright transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <SectionTitle 
                  title="FINALIZAR PEDIDO"
                  subtitle="Preencha os dados abaixo para finalizar seu pedido."
                />
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <AnimatedElement animation="fadeInLeft">
                <form onSubmit={handleSubmit} className="card">
                  <h3 className="font-title text-xl text-text-bright mb-6">Dados do Pedido</h3>
                  
                  {/* Basic Info */}
                  <div className="space-y-4 mb-6">
                    {/* Only show Name field for non-play products */}
                    {!['partida-avulsa', 'pacote-10-jogos', 'duo-didatico-avulso', 'duo-didatico-pacote'].includes(productId || '') && (
                      <div>
                        <label htmlFor="name" className="block font-title text-text-bright mb-2">
                          Nome Completo *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-text-dim" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-background/80 pl-10 pr-4 py-3 rounded-md border border-primary/30 
                              focus:border-primary focus:outline-none transition-colors"
                            placeholder="Seu nome completo"
                          />
                        </div>
                      </div>
                    )}

                    {/* Show E-mail field only for contas products */}
                    {product?.category === 'contas' && (
                      <div>
                        <label htmlFor="email" className="block font-title text-text-bright mb-2">
                          E-mail *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-text-dim" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-background/80 pl-10 pr-4 py-3 rounded-md border border-primary/30 
                              focus:border-primary focus:outline-none transition-colors"
                            placeholder="seu.email@exemplo.com"
                          />
                        </div>
                      </div>
                    )}

                    {/* Show ID field for Jogue Comigo products */}
                    {['partida-avulsa', 'pacote-10-jogos', 'duo-didatico-avulso', 'duo-didatico-pacote'].includes(productId || '') && (
                      <>
                        <div>
                          <label htmlFor="nickname" className="block font-title text-text-bright mb-2">
                            Nickname *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User size={18} className="text-text-dim" />
                            </div>
                            <input
                              type="text"
                              id="nickname"
                              name="nickname"
                              required
                              value={formData.nickname}
                              onChange={handleInputChange}
                              className="w-full bg-background/80 pl-10 pr-4 py-3 rounded-md border border-primary/30 
                                focus:border-primary focus:outline-none transition-colors"
                              placeholder="Seu nickname no jogo"
                            />
                          </div>
                        </div>
                      <div>
                        <label htmlFor="steamId" className="block font-title text-text-bright mb-2">
                          ID Steam/Dota *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-text-dim" />
                          </div>
                          <input
                            type="text"
                            id="steamId"
                            name="steamId"
                            required
                            value={formData.steamId}
                            onChange={handleInputChange}
                            className="w-full bg-background/80 pl-10 pr-4 py-3 rounded-md border border-primary/30 
                              focus:border-primary focus:outline-none transition-colors"
                            placeholder="Seu ID Steam ou Friend ID"
                          />
                        </div>
                      </div>
                      </>
                    )}
                  </div>

                  {/* Conditional Fields */}
                  {(productId === 'partida-avulsa' || productId === 'duo-didatico-avulso') && (
                    <div className="space-y-4 mb-6">
                      <GameQuantitySelector 
                        onQuantityChange={handleGameQuantityChange} 
                        productType={productId as 'partida-avulsa' | 'duo-didatico-avulso'}
                      />
                      <RankSelector onRankChange={handleRankChange} />
                      <RoleSelector onRoleChange={handleRoleChange} />
                    </div>
                  )}

                  {/* Rank Selector for pacotes */}
                  {(productId === 'pacote-10-jogos' || productId === 'duo-didatico-pacote') && (
                    <div className="mb-6">
                      <RankSelector onRankChange={handleRankChange} />
                    </div>
                  )}

                  {/* Role Selector for pacotes */}
                  {(productId === 'pacote-10-jogos' || productId === 'duo-didatico-pacote') && (
                    <div className="mb-6">
                      <RoleSelector onRoleChange={handleRoleChange} />
                    </div>
                  )}

                  {/* Rank Selector for Mentoria */}
                  {product.category === 'mentoria' && (
                    <div className="mb-6">
                      <RankSelector onRankChange={handleRankChange} />
                    </div>
                  )}

                  {/* Role Selector for Mentoria */}
                  {product.category === 'mentoria' && (
                    <div className="mb-6">
                      <RoleSelector onRoleChange={handleRoleChange} />
                    </div>
                  )}

                  {/* Behavior Selector for Boost Behavior and Low Priority */}
                  {(product.category === 'boost-behavior' || product.category === 'low-priority') && (
                    <div className="mb-6">
                      <BehaviorSelector onBehaviorChange={handleBehaviorChange} />
                    </div>
                  )}

                  {/* Observações apenas para MMR Boost */}
                  {productId === 'boost-mmr' && (
                    <div className="mb-6">
                      <label htmlFor="message" className="block font-title text-text-bright mb-2">
                        Observações
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare size={18} className="text-text-dim" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-background/80 pl-10 pr-4 py-3 rounded-md border border-primary/30 
                            focus:border-primary focus:outline-none transition-colors resize-none"
                          placeholder="Alguma observação ou pedido especial..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Payment Method Selection - Only show for non-contas products */}
                  {product.category !== 'contas' && (
                    <div className="mb-6">
                      <label className="block font-title text-text-bright mb-3">Método de Pagamento</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('whatsapp')}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            paymentMethod === 'whatsapp'
                              ? 'border-success bg-success/20 text-success'
                              : 'border-primary/30 bg-background/80 text-text-dim hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <MessageSquare size={20} />
                            <span className="font-title">WhatsApp</span>
                          </div>
                          <p className="text-xs">Contato direto via WhatsApp</p>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('mercadopago')}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            paymentMethod === 'mercadopago'
                              ? 'border-primary bg-primary/20 text-primary'
                              : 'border-primary/30 bg-background/80 text-text-dim hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <CreditCard size={20} />
                            <span className="font-title">Mercado Pago</span>
                          </div>
                          <p className="text-xs">PIX, Cartão e outros</p>
                        </button>
                      </div>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting || isCreatingPayment}
                    className="magic-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || isCreatingPayment 
                      ? 'PROCESSANDO...' 
                      : paymentMethod === 'mercadopago' && product?.category !== 'contas'
                        ? 'PAGAR VIA MERCADO PAGO'
                        : 'FINALIZAR VIA WHATSAPP'
                    }
                  </button>
                </form>
              </AnimatedElement>

              {/* Order Summary */}
              <AnimatedElement animation="fadeInRight" delay={0.2}>
                <div className="card">
                  <h3 className="font-title text-xl text-text-bright mb-6">Resumo do Pedido</h3>
                  
                  <div className="bg-background/80 p-4 rounded-lg mb-6">
                    <h4 className="font-title text-text-bright mb-2">{product.title}</h4>
                    <p className="text-text-dim text-sm mb-4">{product.description}</p>
                    
                    {/* Special details for boost */}
                    {productId === 'boost-mmr' && currentMMR && targetMMR && (
                      <div className="border-t border-primary/20 pt-4 mt-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-text-dim">MMR Atual:</span>
                            <div className="text-text-bright font-title">{currentMMR}</div>
                          </div>
                          <div>
                            <span className="text-text-dim">MMR Desejado:</span>
                            <div className="text-text-bright font-title">{targetMMR}</div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-text-dim text-sm">Diferença: </span>
                          <span className="text-primary font-title">{parseInt(targetMMR) - parseInt(currentMMR)} MMR</span>
                        </div>
                      </div>
                    )}

                    {/* Special details for custom products */}
                    {(productId === 'boost-behavior-custom' || productId === 'low-priority-custom') && customGames && (
                      <div className="border-t border-primary/20 pt-4 mt-4">
                        <div className="text-sm">
                          <span className="text-text-dim">Quantidade: </span>
                          <span className="text-text-bright font-title">
                            {customGames} {productId === 'boost-behavior-custom' ? 'jogos turbo' : (parseInt(customGames) === 1 ? 'jogo' : 'jogos') + ' low priority'}
                          </span>
                        </div>
                        {productId === 'boost-behavior-custom' && (
                          <div className="text-sm mt-1">
                            <span className="text-text-dim">Behavior Score estimado: </span>
                            <span className="text-success font-title">+{parseInt(customGames) * 25}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Special details for partida avulsa e duo didático avulso */}
                    {(productId === 'partida-avulsa' || productId === 'duo-didatico-avulso') && (
                      <div className="border-t border-primary/20 pt-4 mt-4">
                        <div className="text-sm">
                          <span className="text-text-dim">Quantidade: </span>
                          <span className="text-text-bright font-title">{formData.gameQuantity} {formData.gameQuantity === 1 ? 'jogo' : 'jogos'}</span>
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-text-dim">Rank: </span>
                          <span className="text-text-bright font-title">{formData.rank}</span>
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-text-dim">Função: </span>
                          <span className="text-text-bright font-title">{formData.role}</span>
                        </div>
                      </div>
                    )}

                    {/* Rank info for pacotes */}
                    {(productId === 'pacote-10-jogos' || productId === 'duo-didatico-pacote') && (
                      <div className="border-t border-primary/20 pt-4 mt-4">
                        <div className="text-sm">
                          <span className="text-text-dim">Seu Rank: </span>
                          <span className="text-text-bright font-title">{formData.rank}</span>
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-text-dim">Função: </span>
                          <span className="text-text-bright font-title">{formData.role}</span>
                        </div>
                      </div>
                    )}

                    {/* Rank info for mentoria */}
                    {product.category === 'mentoria' && (
                      <div className="border-t border-primary/20 pt-4 mt-4">
                        <div className="text-sm">
                          <span className="text-text-dim">Seu Rank: </span>
                          <span className="text-text-bright font-title">{formData.rank}</span>
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-text-dim">Função: </span>
                          <span className="text-text-bright font-title">{formData.role}</span>
                        </div>
                      </div>
                    )}

                    {/* Behavior info for boost behavior and low priority */}
                    {(product.category === 'boost-behavior' || product.category === 'low-priority') && (
                      <div className="border-t border-primary/20 pt-4 mt-4">
                        <div className="text-sm">
                          <span className="text-text-dim">Behavior Score: </span>
                          <span className="text-text-bright font-title">{behaviorScore}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-primary/20 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-text-dim">Subtotal:</span>
                      <span className="text-text-bright">R$ {finalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-title text-text-bright">Total:</span>
                      <span className="font-title text-primary text-2xl">R$ {finalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Payment Options in Summary - Only show for non-contas products */}
                  {product.category !== 'contas' && (
                    <div className="mt-6 border-t border-primary/20 pt-4">
                      <h4 className="font-title text-text-bright mb-3 text-sm">Opções de Pagamento:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg border border-primary/30">
                          <div className="flex items-center gap-2">
                            <CreditCard size={16} className="text-primary" />
                            <span className="text-text text-sm font-title">Mercado Pago</span>
                          </div>
                          <span className="text-text-dim text-xs">PIX, Cartão, Boleto</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg border border-success/30">
                          <div className="flex items-center gap-2">
                            <MessageSquare size={16} className="text-success" />
                            <span className="text-text text-sm font-title">WhatsApp</span>
                          </div>
                          <span className="text-text-dim text-xs">Contato direto</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-primary/20 rounded-lg">
                    <h4 className="font-title text-text-bright mb-2 text-sm">Como funciona:</h4>
                    <ul className="space-y-1 text-xs text-text-dim">
                      {product?.category === 'contas' ? (
                        <>
                          <li>• Clique em "Finalizar via WhatsApp"</li>
                          <li>• Será aberto o WhatsApp com sua mensagem</li>
                          <li>• Confirme os detalhes comigo</li>
                          <li>• Receba as instruções de pagamento</li>
                          <li>• Após confirmação, iniciamos o serviço</li>
                        </>
                      ) : (
                        <>
                          <li>• Escolha WhatsApp ou Mercado Pago</li>
                          <li>• WhatsApp: contato direto comigo</li>
                          <li>• Mercado Pago: pagamento online seguro</li>
                          <li>• Após confirmação, iniciamos o serviço</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;