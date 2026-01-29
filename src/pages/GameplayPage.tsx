import React from 'react';
import { Activity, BarChart3, Compass, Crosshair, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { playerStats, matchHistory } from '../assets/stats';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

const GameplayPage: React.FC = () => {
  const [showScrollArrow, setShowScrollArrow] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowScrollArrow(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const element = document.querySelector('.gameplay-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 gameplay-content">
          <SectionTitle 
            title="MEU ESTILO DE JOGO"
            subtitle="Conheça as características que definem minha abordagem nas partidas, baseadas em dados reais do Stratz."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedElement animation="fadeInLeft">
              <h3 className="font-title text-2xl text-text-bright mb-6">Abordagem Estratégica</h3>
              <p className="text-text mb-4 leading-relaxed">
                Como hard carry principal, meu estilo se caracteriza por farming eficiente e posicionamento 
                calculado. Priorizo maximizar meu potencial de farm enquanto mantenho presença em teamfights 
                cruciais. Minha experiência em todas as posições me permite entender melhor as necessidades 
                da equipe e adaptar meu jogo conforme necessário.
              </p>
              <p className="text-text mb-8 leading-relaxed">
                Com {playerStats.averageGPM} de GPM médio e {playerStats.averageXPM} de XPM, demonstro 
                consistência em maximizar recursos. Meu KDA de {playerStats.kda} reflete um estilo 
                equilibrado entre agressividade e cautela, sempre buscando o momento certo para impactar.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-md text-primary">
                    <Crosshair size={24} />
                  </div>
                  <div>
                    <h4 className="font-title text-text-bright mb-1">Farming Eficiente</h4>
                    <p className="text-text-dim">
                      Otimização constante de padrões de farm para maximizar GPM e XPM, mantendo presença no mapa.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-md text-primary">
                    <Compass size={24} />
                  </div>
                  <div>
                    <h4 className="font-title text-text-bright mb-1">Versatilidade Posicional</h4>
                    <p className="text-text-dim">
                      Capacidade de jogar em todas as posições em alto nível, adaptando-me às necessidades da equipe.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-md text-primary">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-title text-text-bright mb-1">Timing de Teamfights</h4>
                    <p className="text-text-dim">
                      Conhecimento profundo de power spikes e timing ideal para engajar em combates decisivos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-md text-primary">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="font-title text-text-bright mb-1">Análise Constante</h4>
                    <p className="text-text-dim">
                      Estudo contínuo de replays e estatísticas para identificar pontos de melhoria e tendências.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInRight" delay={0.2}>
              <div className="card h-full flex flex-col">
                <h3 className="font-title text-2xl text-text-bright mb-6">Estatísticas Atuais (Stratz)</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-primary mb-1">{playerStats.mmr}</div>
                    <div className="text-text-dim text-sm">MMR Máximo</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-primary mb-1">{playerStats.winrate}%</div>
                    <div className="text-text-dim text-sm">Winrate Geral</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-primary mb-1">{playerStats.averageGPM}</div>
                    <div className="text-text-dim text-sm">GPM Médio</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-primary mb-1">{playerStats.averageXPM}</div>
                    <div className="text-text-dim text-sm">XPM Médio</div>
                  </div>
                </div>
                
                <div className="overflow-x-auto mb-6">
                  <h4 className="font-title text-lg text-text-bright mb-4">Últimas Partidas</h4>
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="border-b border-primary/20">
                        <th className="py-3 text-left font-title text-text-bright">Herói</th>
                        <th className="py-3 text-left font-title text-text-bright">Resultado</th>
                        <th className="py-3 text-left font-title text-text-bright">KDA</th>
                        <th className="py-3 text-left font-title text-text-bright">MMR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {matchHistory.slice(0, 5).map((match, index) => (
                        <tr key={match.id} className="border-b border-primary/10 last:border-0">
                          <td className="py-3 text-text-bright">
                            {match.hero}
                          </td>
                          <td className="py-3">
                            <span 
                              className={`px-2 py-0.5 text-xs font-title rounded ${
                                match.result === 'Vitória' 
                                  ? 'bg-success/20 text-success' 
                                  : 'bg-error/20 text-error'
                              }`}
                            >
                              {match.result}
                            </span>
                          </td>
                          <td className="py-3 text-text-dim">{match.kda}</td>
                          <td className="py-3 font-title">
                            <span 
                              className={match.mmrChange.includes('+') ? 'text-success' : 'text-error'}
                            >
                              {match.mmrChange}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-title text-lg text-text-bright mb-4">Estatísticas de Performance</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-dim text-sm">Farming</span>
                        <span className="text-text-dim text-sm">88%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent w-[88%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-dim text-sm">Posicionamento</span>
                        <span className="text-text-dim text-sm">85%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent w-[85%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-dim text-sm">Versatilidade</span>
                        <span className="text-text-dim text-sm">92%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent w-[92%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-dim text-sm">Teamfight</span>
                        <span className="text-text-dim text-sm">80%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent w-[80%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-dim text-sm">Consistência</span>
                        <span className="text-text-dim text-sm">87%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent w-[87%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background-light border-t border-primary/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="ANÁLISE DE JOGO"
            subtitle="Como adapto minha estratégia em diferentes cenários e fases da partida."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedElement animation="fadeInUp" delay={0.1}>
              <div className="card">
                <h3 className="font-title text-xl text-text-bright mb-4">Early Game (0-10 min)</h3>
                <p className="text-text-dim mb-4">
                  Como hard carry, foco em maximizar last hits e farm seguro. Mantenho comunicação 
                  constante com meu suporte para controlar a lane e evitar ganks desnecessários.
                </p>
                <div className="h-40 bg-background rounded-md flex items-center justify-center">
                  <p className="text-text-dim text-sm text-center">
                    [Foco em farm eficiente e posicionamento seguro]
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInUp" delay={0.2}>
              <div className="card">
                <h3 className="font-title text-xl text-text-bright mb-4">Mid Game (10-25 min)</h3>
                <p className="text-text-dim mb-4">
                  Período crucial onde avalio constantemente se devo participar de teamfights ou 
                  continuar farmando. Priorizo itens-chave e busco oportunidades de push seguro.
                </p>
                <div className="h-40 bg-background rounded-md flex items-center justify-center">
                  <p className="text-text-dim text-sm text-center">
                    [Balanceamento entre farm e participação em teamfights]
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInUp" delay={0.3}>
              <div className="card">
                <h3 className="font-title text-xl text-text-bright mb-4">Late Game (25+ min)</h3>
                <p className="text-text-dim mb-4">
                  Momento onde minha experiência como carry faz diferença. Posicionamento perfeito 
                  em teamfights e decisões precisas sobre quando engajar ou recuar.
                </p>
                <div className="h-40 bg-background rounded-md flex items-center justify-center">
                  <p className="text-text-dim text-sm text-center">
                    [Maximização de impacto em teamfights decisivos]
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

export default GameplayPage;