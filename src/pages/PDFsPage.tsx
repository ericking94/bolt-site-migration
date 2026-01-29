import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Sword, Shield, Target, Users, Heart, Zap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import MetaPanel from '../components/MetaPanel';
import { getProductPrice } from '../data/pricing';
import { currentMeta } from '../data/metaHeroes';

interface PDFProduct {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  backgroundImage?: string;
  showBackground?: boolean;
  category: string;
}

const pdfFuncoes: PDFProduct[] = [
  {
    id: 'pdf-hard-carry',
    title: 'Hard Carry',
    description: 'Guia completo para dominar a posição 1 e maximizar seu farm',
    icon: <Sword size={32} />,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/rZqEyre.jpeg',
    category: 'Hard Carry',
    features: [
      'Padrões de farm otimizados',
      'Timing de itens essenciais',
      'Posicionamento em teamfights',
      'Análise de power spikes',
      'Estratégias de late game'
    ]
  },
  {
    id: 'pdf-mid',
    title: 'Mid',
    description: 'Domine o centro do mapa e controle o ritmo da partida',
    icon: <Target size={32} />,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/OzY2vI1.jpeg',
    category: 'Mid',
    features: [
      'Controle de runas e ganks',
      'Matchups e counter picks',
      'Rotações eficientes',
      'Pressão no mapa',
      'Transição para mid/late game'
    ]
  },
  {
    id: 'pdf-offlane',
    title: 'Offlaner',
    description: 'Sobreviva na lane difícil e crie espaço para sua equipe',
    icon: <Shield size={32} />,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/1GwnqNj.jpeg',
    category: 'Offlaner',
    features: [
      'Sobrevivência em lane hostil',
      'Criação de espaço',
      'Timing de iniciação',
      'Builds defensivas e ofensivas',
      'Coordenação com equipe'
    ]
  },
  {
    id: 'pdf-support-4',
    title: 'Suporte 4',
    description: 'Maximize seu impacto como suporte roaming e ganker',
    icon: <Users size={32} />,
    showBackground: true, 
    backgroundImage: 'https://i.imgur.com/mzyNome.jpeg',
    category: 'Suporte',
    features: [
      'Rotações e ganks eficazes',
      'Ward placement estratégico',
      'Economia de itens',
      'Timing de smoke ganks',
      'Transição para late game'
    ]
  },
  {
    id: 'pdf-support-5',
    title: 'Suporte 5',
    description: 'Proteja seu carry e controle a visão do mapa',
    icon: <Heart size={32} />,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/AAEHNGo.jpeg',
    category: 'Suporte',
    features: [
      'Proteção do carry',
      'Sistema de wards e dewarding',
      'Stacking e pulling',
      'Posicionamento em teamfights',
      'Economia extrema de recursos'
    ]
  }
];

const pdfHerois: PDFProduct[] = [
  {
    id: 'pdf-anti-mage',
    title: 'Anti-Mage',
    description: 'Domine o herói mais icônico do hard carry com técnicas avançadas de farm, split push e timing perfeito para dominar o late game!',
    icon: <Zap size={32} />,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/HnEcsXz.jpeg',
    category: 'Hard Carry',
    features: [
      'Padrões de farm otimizados e eficiência máxima',
      'Timing perfeito de itens e power spikes',
      'Estratégias de split push e map control',
      'Posicionamento em teamfights e escape',
      'Builds situacionais para diferentes matchups',
      'Técnicas avançadas de Blink e Mana Break'
    ]
  },
  {
    id: 'pdf-storm-spirit',
    title: 'Storm Spirit',
    description: 'Domine o herói mais eletrizante do Dota 2 com técnicas avançadas de posicionamento, combos devastadores e gerenciamento de mana que vão elevar seu jogo a outro nível!',
    icon: <Zap size={32} />,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/ZSpARC4.jpeg',
    category: 'Mid',
    features: [
      'Combos avançados e sequências de habilidades',
      'Gerenciamento eficiente de mana e positioning',
      'Timing perfeito de Ball Lightning',
      'Builds situacionais para diferentes matchups',
      'Estratégias de teamfight e pick-offs',
      'Dicas de farming e rotação no mid game'
    ]
  }
];

const PDFsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'funcoes' | 'herois' | 'meta'>('funcoes');
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowScrollArrow(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const element = document.querySelector('.pdfs-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Group heroes by category
  const groupedHeroes = pdfHerois.reduce((acc, hero) => {
    if (!acc[hero.category]) {
      acc[hero.category] = [];
    }
    acc[hero.category].push(hero);
    return acc;
  }, {} as Record<string, PDFProduct[]>);

  const categoryOrder = ['Hard Carry', 'Mid', 'Offlaner', 'Suporte'];

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 pdfs-content">
          <SectionTitle 
            title="GUIAS EM PDF"
            subtitle="Guias detalhados para funções e heróis específicos, com estratégias e dicas avançadas."
            center
          />
          
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <AnimatedElement animation="fadeInUp">
              <div className="flex justify-center mb-8">
                <div className="bg-background-light/90 backdrop-blur-sm p-1 rounded-lg border border-primary/30">
                  <button
                    onClick={() => setActiveTab('funcoes')}
                    className={`px-6 py-3 rounded-md font-title transition-all ${
                      activeTab === 'funcoes'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    FUNÇÕES
                  </button>
                  <button
                    onClick={() => setActiveTab('herois')}
                    className={`px-6 py-3 rounded-md font-title transition-all ${
                      activeTab === 'herois'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    HERÓIS
                  </button>
                </div>
              </div>
            </AnimatedElement>

            {/* Funções Tab */}
            {activeTab === 'funcoes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pdfFuncoes.map((product, index) => (
                  <AnimatedElement 
                    key={product.id} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                    className="flex flex-col"
                  >
                    <div 
                      className="card flex-1 flex flex-col relative overflow-hidden group hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                      style={{
                        backgroundImage: product.showBackground && product.backgroundImage 
                          ? `linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.85)), url(${product.backgroundImage})`
                          : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>
                      <h3 className="font-title text-xl text-text-bright mb-2">{product.title}</h3>
                      <p className="text-text-dim mb-4">{product.description}</p>
                      
                      <div className="bg-background/80 p-3 rounded-lg mb-4 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-2">
                          <FileText size={16} className="text-primary" />
                          <span className="text-text-bright font-title">Guia Completo</span>
                        </div>
                      </div>
                      
                      <div className="mb-6 flex-1">
                        <h4 className="font-title text-text-bright mb-3 text-sm">Conteúdo incluído:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-text text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="text-2xl font-title text-text-bright mb-4">
                          R$ {getProductPrice(product.id)?.price?.toFixed(2) || '0.00'}
                        </div>
                        <Link 
                          to={`/checkout/${product.id}`}
                          className="magic-btn w-full text-center block group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
                        >
                          COMPRAR PDF
                        </Link>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            )}

            {/* Heróis Tab */}
            {activeTab === 'herois' && (
              <div className="space-y-12">
                {categoryOrder.map((category, categoryIndex) => {
                  const heroesInCategory = groupedHeroes[category] || [];
                  
                  if (heroesInCategory.length === 0) {
                    return (
                      <AnimatedElement 
                        key={category} 
                        animation="fadeInUp" 
                        delay={categoryIndex * 0.1}
                      >
                        <div className="text-center">
                          <h3 className="font-title text-2xl text-text-bright mb-4">{category}</h3>
                          <div className="bg-background-light/90 backdrop-blur-sm p-8 rounded-lg border border-primary/30">
                            <p className="text-text-dim">Em breve novos heróis desta função!</p>
                          </div>
                        </div>
                      </AnimatedElement>
                    );
                  }

                  return (
                    <AnimatedElement 
                      key={category} 
                      animation="fadeInUp" 
                      delay={categoryIndex * 0.1}
                    >
                      <div>
                        <h3 className="font-title text-2xl text-text-bright mb-6 text-center">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {heroesInCategory.map((product, index) => (
                            <div 
                              key={product.id}
                              className="card flex-1 flex flex-col relative overflow-hidden group hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                              style={{
                                backgroundImage: product.showBackground && product.backgroundImage 
                                  ? `linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.85)), url(${product.backgroundImage})`
                                  : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                              }}
                            >
                              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {product.icon}
                              </div>
                              <h4 className="font-title text-xl text-text-bright mb-2">{product.title}</h4>
                              <p className="text-text-dim mb-4 text-sm leading-relaxed">{product.description}</p>
                              
                              <div className="bg-background/80 p-3 rounded-lg mb-4 backdrop-blur-sm">
                                <div className="flex items-center justify-center gap-2">
                                  <FileText size={16} className="text-primary" />
                                  <span className="text-text-bright font-title">Guia Especializado</span>
                                </div>
                              </div>
                              
                              <div className="mb-6 flex-1">
                                <h5 className="font-title text-text-bright mb-3 text-sm">Conteúdo incluído:</h5>
                                <ul className="space-y-2">
                                  {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-text text-sm">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-2 flex-shrink-0"></div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="mt-auto">
                                <div className="text-2xl font-title text-text-bright mb-4">
                                  R$ {getProductPrice(product.id)?.price?.toFixed(2) || '0.00'}
                                </div>
                                <Link 
                                  to={`/checkout/${product.id}`}
                                  className="magic-btn w-full text-center block group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
                                >
                                  COMPRAR PDF
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimatedElement>
                  );
                })}
              </div>
            )}

            
            {/* Informações sobre os PDFs */}
            <AnimatedElement animation="fadeInUp" delay={0.6} className="mt-12">
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30 max-w-4xl mx-auto">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Sobre os Guias</h4>
                
                {/* Centered content layout */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Conteúdo */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Conteúdo:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Estratégias detalhadas por posição/herói</li>
                        <li>• Builds de itens situacionais</li>
                        <li>• Dicas de posicionamento</li>
                        <li>• Análise de matchups</li>
                        <li>• Exemplos práticos com imagens</li>
                      </ul>
                    </div>
                    
                    {/* Right Column - Formato */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Formato:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Arquivo PDF de alta qualidade</li>
                        <li>• Linguagem clara e didática</li>
                        <li>• Organizado por tópicos</li>
                        <li>• Acesso permanente</li>
                        <li>• Atualizações gratuitas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Importante:</strong> Todos os guias são baseados na experiência de mais de 10 anos jogando Dota 2 
                    em alto nível e são atualizados conforme mudanças no meta.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Scroll Arrow */}
      {showScrollArrow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="fixed bottom-10 left-0 right-0 text-center z-40"
        >
          <button 
            onClick={scrollToContent}
            className="text-text-dim hover:text-text-bright transition-colors scroll-arrow"
            aria-label="Scroll down"
          >
            <ChevronDown size={36} className="animate-bounce" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default PDFsPage;