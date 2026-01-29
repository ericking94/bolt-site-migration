import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Video, Users, Eye, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import { getProductPrice } from '../data/pricing';

interface MentoriaProduct {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  aulas: number;
  revisoes: number;
  pdfs: number;
  backgroundImage?: string;
  showBackground?: boolean;
}

const mentoriaPersonalizada: MentoriaProduct[] = [
  {
    id: 'sessao-individual',
    title: 'Sessão Individual',
    description: '1 aula personalizada com revisão completa',
    icon: <BookOpen size={32} />,
    aulas: 1,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/8xKzQmE.jpeg',
    features: [
      '1 aula de aproximadamente 1 hora via Discord',
      '1 revisão personalizada',
      'PDF com conceitos básicos e avançados',
      'Análise detalhada de replays',
      'Feedback por escrito pós-sessão'
    ]
  },
  {
    id: 'first-blood',
    title: 'Plano First Blood',
    description: '3 aulas com acompanhamento completo',
    icon: <Trophy size={32} />,
    aulas: 3,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/9vKzLmP.jpeg',
    features: [
      '3 aulas de aproximadamente 1 hora via Discord',
      '1 revisão personalizada',
      'PDF com conceitos básicos e avançados',
      'Contato direto durante 1 mês',
      'Análise detalhada de replays',
      'Feedback por escrito pós-sessão'
    ]
  },
  {
    id: 'divine',
    title: 'Plano Divine',
    description: '5 aulas com revisões extras',
    icon: <Trophy size={32} />,
    aulas: 5,
    revisoes: 2,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/7HqRtNx.jpeg',
    features: [
      '5 aulas de aproximadamente 1 hora via Discord',
      '2 revisões personalizadas',
      'PDF com conceitos básicos e avançados',
      'Contato direto durante 1 mês',
      'Análise detalhada de replays',
      'Feedback por escrito pós-sessão'
    ]
  },
  {
    id: 'rampage',
    title: 'Plano Rampage',
    description: '7 aulas com material extra',
    icon: <Trophy size={32} />,
    aulas: 7,
    revisoes: 3,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/2KvNmQr.jpeg',
    features: [
      '7 aulas de aproximadamente 1 hora via Discord',
      '3 revisões personalizadas',
      '2 PDFs com conceitos básicos e avançados',
      'Contato direto durante 1 mês',
      'Análise detalhada de replays',
      'Feedback por escrito pós-sessão'
    ]
  },
  {
    id: 'immortal',
    title: 'Plano Immortal',
    description: 'Pacote completo com máximo suporte',
    icon: <Trophy size={32} />,
    aulas: 10,
    revisoes: 5,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/4RzXtGk.jpeg',
    features: [
      '10 aulas de aproximadamente 1 hora via Discord',
      '5 revisões personalizadas',
      '2 PDFs com conceitos básicos e avançados',
      'Contato direto durante 1 mês',
      'Análise detalhada de replays',
      'Feedback por escrito pós-sessão'
    ]
  }
];

const analiseReplays: MentoriaProduct[] = [
  {
    id: 'analise-sessao-individual',
    title: 'Sessão Individual',
    description: 'Análise detalhada de 1 replay com feedback completo',
    icon: <Eye size={32} />,
    aulas: 1,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '1 sessão de análise de replay (1 hora)',
      'Análise frame-by-frame de jogadas críticas',
      'Identificação de erros e oportunidades perdidas',
      'Relatório detalhado por escrito',
      'Sugestões específicas de melhoria'
    ]
  },
  {
    id: 'analise-first-blood',
    title: 'Plano First Blood',
    description: '3 análises de replays com acompanhamento',
    icon: <Eye size={32} />,
    aulas: 3,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '3 sessões de análise de replays',
      'Acompanhamento da evolução entre análises',
      'Foco em pontos específicos de melhoria',
      'Relatórios detalhados por escrito',
      'Contato direto durante 1 mês'
    ]
  },
  {
    id: 'analise-divine',
    title: 'Plano Divine',
    description: '5 análises com revisões extras',
    icon: <Eye size={32} />,
    aulas: 5,
    revisoes: 2,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '5 sessões de análise de replays',
      '2 revisões de progresso',
      'Análise comparativa entre partidas',
      'Identificação de padrões de erro',
      'Estratégias personalizadas de correção'
    ]
  },
  {
    id: 'analise-rampage',
    title: 'Plano Rampage',
    description: '7 análises com material extra',
    icon: <Eye size={32} />,
    aulas: 7,
    revisoes: 3,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '7 sessões de análise de replays',
      '3 revisões de progresso',
      '2 PDFs com conceitos avançados',
      'Análise de diferentes funções/heróis',
      'Plano de desenvolvimento personalizado'
    ]
  },
  {
    id: 'analise-immortal',
    title: 'Plano Immortal',
    description: 'Pacote completo de análises',
    icon: <Eye size={32} />,
    aulas: 10,
    revisoes: 5,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '10 sessões de análise de replays',
      '5 revisões de progresso',
      '2 PDFs com estratégias avançadas',
      'Análise completa de diferentes cenários',
      'Mentoria contínua durante todo o processo'
    ]
  }
];

const mentoriaAoVivo: MentoriaProduct[] = [
  {
    id: 'aovivo-sessao-individual',
    title: 'Sessão Individual',
    description: 'Mentoria ao vivo durante partida real',
    icon: <Video size={32} />,
    aulas: 1,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '1 partida com mentoria ao vivo',
      'Orientações em tempo real via Discord',
      'Análise pós-partida detalhada',
      'Feedback imediato sobre decisões',
      'Relatório de pontos de melhoria'
    ]
  },
  {
    id: 'aovivo-first-blood',
    title: 'Plano First Blood',
    description: '3 partidas com mentoria ao vivo',
    icon: <Video size={32} />,
    aulas: 3,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '3 partidas com mentoria ao vivo',
      'Acompanhamento da evolução',
      'Orientações específicas por função',
      'Análise comparativa entre partidas',
      'Contato direto durante 1 mês'
    ]
  },
  {
    id: 'aovivo-divine',
    title: 'Plano Divine',
    description: '5 partidas com revisões extras',
    icon: <Video size={32} />,
    aulas: 5,
    revisoes: 2,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '5 partidas com mentoria ao vivo',
      '2 revisões de progresso',
      'Foco em aspectos específicos',
      'Desenvolvimento de game sense',
      'Estratégias avançadas de posicionamento'
    ]
  },
  {
    id: 'aovivo-rampage',
    title: 'Plano Rampage',
    description: '7 partidas com material extra',
    icon: <Video size={32} />,
    aulas: 7,
    revisoes: 3,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '7 partidas com mentoria ao vivo',
      '3 revisões de progresso',
      '2 PDFs com conceitos avançados',
      'Mentoria em diferentes funções',
      'Desenvolvimento completo de habilidades'
    ]
  },
  {
    id: 'aovivo-immortal',
    title: 'Plano Immortal',
    description: 'Pacote completo ao vivo',
    icon: <Video size={32} />,
    aulas: 10,
    revisoes: 5,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '10 partidas com mentoria ao vivo',
      '5 revisões de progresso',
      '2 PDFs com estratégias avançadas',
      'Mentoria completa e personalizada',
      'Acompanhamento contínuo de evolução'
    ]
  }
];

const mentoriaDuoAoVivo: MentoriaProduct[] = [
  {
    id: 'duo-sessao-individual',
    title: 'Sessão Individual',
    description: 'Duo ao vivo com mentoria personalizada',
    icon: <Users size={32} />,
    aulas: 1,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '1 partida em duo com mentoria',
      'Jogamos juntos na mesma partida',
      'Orientações em tempo real',
      'Análise pós-partida detalhada',
      'Feedback sobre sinergia e comunicação'
    ]
  },
  {
    id: 'duo-first-blood',
    title: 'Plano First Blood',
    description: '3 partidas em duo com acompanhamento',
    icon: <Users size={32} />,
    aulas: 3,
    revisoes: 1,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '3 partidas em duo com mentoria',
      'Desenvolvimento de sinergia',
      'Comunicação efetiva em equipe',
      'Estratégias de lane e teamfight',
      'Contato direto durante 1 mês'
    ]
  },
  {
    id: 'duo-divine',
    title: 'Plano Divine',
    description: '5 partidas em duo com revisões',
    icon: <Users size={32} />,
    aulas: 5,
    revisoes: 2,
    pdfs: 1,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '5 partidas em duo com mentoria',
      '2 revisões de progresso',
      'Aperfeiçoamento de combos',
      'Estratégias avançadas de duo',
      'Desenvolvimento de game sense conjunto'
    ]
  },
  {
    id: 'duo-rampage',
    title: 'Plano Rampage',
    description: '7 partidas em duo com material extra',
    icon: <Users size={32} />,
    aulas: 7,
    revisoes: 3,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '7 partidas em duo com mentoria',
      '3 revisões de progresso',
      '2 PDFs com estratégias de duo',
      'Mentoria em diferentes combinações',
      'Desenvolvimento completo de parceria'
    ]
  },
  {
    id: 'duo-immortal',
    title: 'Plano Immortal',
    description: 'Pacote completo em duo',
    icon: <Users size={32} />,
    aulas: 10,
    revisoes: 5,
    pdfs: 2,
    showBackground: true,
    backgroundImage: 'https://i.imgur.com/apEiuF3.jpeg',
    features: [
      '10 partidas em duo com mentoria',
      '5 revisões de progresso',
      '2 PDFs com estratégias avançadas',
      'Mentoria completa e personalizada',
      'Formação de dupla de alto nível'
    ]
  }
];

const MentoriaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analise' | 'aovivo' | 'duo'>('analise');
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
    const element = document.querySelector('.mentoria-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderProducts = (products: MentoriaProduct[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {products.map((product, index) => (
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
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-primary font-title">{product.aulas}</div>
                  <div className="text-xs text-text-dim">Aulas</div>
                </div>
                <div>
                  <div className="text-primary font-title">{product.revisoes}</div>
                  <div className="text-xs text-text-dim">Revisões</div>
                </div>
                <div>
                  <div className="text-primary font-title">{product.pdfs}</div>
                  <div className="text-xs text-text-dim">PDF{product.pdfs > 1 ? 's' : ''}</div>
                </div>
              </div>
            </div>
            
            <div className="mb-6 flex-1">
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
                R$ {getProductPrice(product.id)?.price.toFixed(2) || '0.00'}
              </div>
              <Link 
                to={`/checkout/${product.id}`}
                className="magic-btn w-full text-center block group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
              >
                COMPRAR AGORA
              </Link>
            </div>
          </div>
        </AnimatedElement>
      ))}
    </div>
  );

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 mentoria-content">
          <SectionTitle 
            title="COACH DOTA 2 - MENTORIA PERSONALIZADA"
            subtitle="Coach Dota 2 profissional com jogador Imortal. Aprenda com diferentes modalidades de ensino personalizadas."
            center
          />
          
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <AnimatedElement animation="fadeInUp">
              <div className="flex justify-center mb-8">
                <div className="bg-background-light/90 backdrop-blur-sm p-1 rounded-lg border border-primary/30 overflow-x-auto">
                  <div className="flex gap-1 min-w-max">
                    <button
                      onClick={() => setActiveTab('analise')}
                      className={`px-4 py-3 rounded-md font-title transition-all text-sm whitespace-nowrap ${
                        activeTab === 'analise'
                          ? 'bg-primary text-text-bright shadow-lg'
                          : 'text-text-dim hover:text-text-bright'
                      }`}
                    >
                      ANÁLISE DE REPLAYS
                    </button>
                    <button
                      onClick={() => setActiveTab('aovivo')}
                      className={`px-4 py-3 rounded-md font-title transition-all text-sm whitespace-nowrap ${
                        activeTab === 'aovivo'
                          ? 'bg-primary text-text-bright shadow-lg'
                          : 'text-text-dim hover:text-text-bright'
                      }`}
                    >
                      MENTORIA AO VIVO
                    </button>
                    <button
                      onClick={() => setActiveTab('duo')}
                      className={`px-4 py-3 rounded-md font-title transition-all text-sm whitespace-nowrap ${
                        activeTab === 'duo'
                          ? 'bg-primary text-text-bright shadow-lg'
                          : 'text-text-dim hover:text-text-bright'
                      }`}
                    >
                      MENTORIA DUO AO VIVO
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Tab Content */}
            {activeTab === 'analise' && renderProducts(analiseReplays)}
            {activeTab === 'aovivo' && renderProducts(mentoriaAoVivo)}
            {activeTab === 'duo' && renderProducts(mentoriaDuoAoVivo)}
            
            {/* Informações Importantes - Centralized */}
            <AnimatedElement animation="fadeInUp" delay={0.6} className="mt-12">
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30 max-w-4xl mx-auto">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Informações Importantes</h4>
                
                {/* Centered content layout */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Como Funciona */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Como Funciona:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Agendamento via WhatsApp</li>
                        <li>• Aulas via Discord com tela compartilhada</li>
                        <li>• Análise de replays em tempo real</li>
                        <li>• Material didático personalizado</li>
                        <li>• Suporte contínuo durante o período</li>
                      </ul>
                    </div>
                    
                    {/* Right Column - Garantias */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Garantias:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Metodologia comprovada</li>
                        <li>• Flexibilidade de horários</li>
                        <li>• Conteúdo atualizado</li>
                        <li>• Suporte pós-mentoria</li>
                        <li>• Satisfação garantida</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Importante:</strong> Todas as mentorias são personalizadas de acordo com seu nível atual 
                    e objetivos específicos no Dota 2. O foco é sempre na evolução prática e aplicável.
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

export default MentoriaPage;