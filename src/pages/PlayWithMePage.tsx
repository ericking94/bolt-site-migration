import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import { getProductPrice } from '../data/pricing';

const PlayWithMePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jogo-party' | 'duo-didatico'>('jogo-party');
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
    const element = document.querySelector('.play-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 play-content">
          <SectionTitle 
            title="JOGO EM PARTY"
            subtitle="Partidas em grupo comigo ou sessões de duo didático com aprendizado personalizado."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <AnimatedElement animation="fadeInUp">
              <div className="flex justify-center mb-8">
                <div className="bg-background-light/90 backdrop-blur-sm p-1 rounded-lg border border-primary/30">
                  <button
                    onClick={() => setActiveTab('jogo-party')}
                    className={`px-6 py-3 rounded-md font-title transition-all ${
                      activeTab === 'jogo-party'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    JOGO EM PARTY
                  </button>
                  <button
                    onClick={() => setActiveTab('duo-didatico')}
                    className={`px-6 py-3 rounded-md font-title transition-all ${
                      activeTab === 'duo-didatico'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    DUO DIDÁTICO
                  </button>
                </div>
              </div>
            </AnimatedElement>

            {/* Jogo em Party Tab */}
            {activeTab === 'jogo-party' && (
              <AnimatedElement animation="fadeInUp" delay={0.2}>
                <div className="card text-center">
                  <div className="text-primary mb-6">
                    <Users size={64} className="mx-auto" />
                  </div>
                  <h3 className="font-title text-3xl text-text-bright mb-4">Jogo em Party (PT)</h3>
                  <p className="text-text-dim mb-8 text-lg">
                    Partidas em grupo comigo, com comunicação via Discord e dicas durante o jogo.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Link 
                      to="/checkout/partida-avulsa"
                      className="bg-background/80 p-6 rounded-lg hover:bg-background transition-colors border border-primary/30 hover:border-primary/50"
                    >
                      <h4 className="font-title text-xl text-text-bright mb-2">Partida Avulsa</h4>
                      <div className="text-3xl font-title text-primary mb-2">R$ {getProductPrice('partida-avulsa')?.price.toFixed(2) || '0.00'}</div>
                      <p className="text-text-dim">Por partida</p>
                    </Link>
                    <Link 
                      to="/checkout/pacote-10-jogos"
                      className="bg-background/80 p-6 rounded-lg hover:bg-background transition-colors border-2 border-primary/50 hover:border-primary"
                    >
                      <h4 className="font-title text-xl text-text-bright mb-2">Pacote 10 Jogos</h4>
                      <div className="text-3xl font-title text-primary mb-2">R$ {getProductPrice('pacote-10-jogos')?.price.toFixed(2) || '0.00'}</div>
                      <p className="text-text-dim">Economia de R$ {((getProductPrice('pacote-10-jogos')?.originalPrice || 0) - (getProductPrice('pacote-10-jogos')?.price || 0)).toFixed(2)}</p>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col items-center mb-8">
                    <h4 className="font-title text-lg text-text-bright mb-4">O que está incluso:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-text"> 
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Comunicação via Discord durante a partida
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Dicas e orientações em tempo real
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Prioridade na fila de agendamento
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            )}

            {/* Duo Didático Tab */}
            {activeTab === 'duo-didatico' && (
              <AnimatedElement animation="fadeInUp">
                <div className="card text-center">
                  <div className="text-primary mb-6">
                    <GraduationCap size={64} className="mx-auto" />
                  </div>
                  <h3 className="font-title text-3xl text-text-bright mb-4">Duo Didático</h3>
                  <p className="text-text-dim mb-8 text-lg">
                    Sessões de duo personalizadas com foco no aprendizado, análise em tempo real e feedback detalhado.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Link 
                      to="/checkout/duo-didatico-avulso"
                      className="bg-background/80 p-6 rounded-lg hover:bg-background transition-colors border border-primary/30 hover:border-primary/50"
                    >
                      <h4 className="font-title text-xl text-text-bright mb-2">Sessão Avulsa</h4>
                      <div className="text-3xl font-title text-primary mb-2">R$ {getProductPrice('duo-didatico-avulso')?.price.toFixed(2) || '0.00'}</div>
                      <p className="text-text-dim">Por sessão</p>
                    </Link>
                    <Link 
                      to="/checkout/duo-didatico-pacote"
                      className="bg-background/80 p-6 rounded-lg hover:bg-background transition-colors border-2 border-primary/50 hover:border-primary"
                    >
                      <h4 className="font-title text-xl text-text-bright mb-2">Pacote 5 Sessões</h4>
                      <div className="text-3xl font-title text-primary mb-2">R$ {getProductPrice('duo-didatico-pacote')?.price.toFixed(2) || '0.00'}</div>
                      <p className="text-text-dim">Economia de R$ {((getProductPrice('duo-didatico-pacote')?.originalPrice || 0) - (getProductPrice('duo-didatico-pacote')?.price || 0)).toFixed(2)}</p>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col items-center mb-8">
                    <h4 className="font-title text-lg text-text-bright mb-4">Diferenciais do Duo Didático:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-text"> 
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Análise detalhada de cada jogada em tempo real
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Feedback personalizado sobre posicionamento e decisões
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Foco no desenvolvimento de habilidades específicas
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Relatório pós-sessão com pontos de melhoria
                      </li>
                      <li className="flex items-center text-text">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        Comunicação exclusiva via Discord
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            )}
            
            {/* Informações Importantes - Centralized */}
            <AnimatedElement animation="fadeInUp" delay={0.4} className="mt-12">
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Informações Importantes</h4>
                
                {/* Centered content layout */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Requisitos */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Requisitos:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Discord instalado e funcionando</li>
                        <li>• Microfone de qualidade</li>
                        <li>• Comportamento respeitoso</li>
                        <li>• Disponibilidade no horário agendado</li>
                        <li>• Conta Steam ativa</li>
                      </ul>
                    </div>
                    
                    {/* Right Column - Benefícios */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Benefícios:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Aprendizado prático em partidas reais</li>
                        <li>• Feedback instantâneo</li>
                        <li>• Experiência de jogo em equipe</li>
                        <li>• Networking com outros jogadores</li>
                        <li>• Diversão garantida</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Importante:</strong> As partidas são agendadas via WhatsApp e realizadas em horários 
                    que funcionem para todos os participantes. Priorizo sempre um ambiente positivo e educativo.
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

export default PlayWithMePage;