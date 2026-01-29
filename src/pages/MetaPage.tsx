import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import MetaPanel from '../components/MetaPanel';
import { currentMeta } from '../data/metaHeroes';

const MetaPage: React.FC = () => {
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
    const element = document.querySelector('.meta-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 relative">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="META ATUAL DOTA 2"
            subtitle="Heróis em destaque no meta atual para cada posição. Baseado nas tendências dos jogos de alto MMR e torneios profissionais."
            center
          />
          
          <div className="space-y-8 meta-content">
            {/* First row - 2 panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <AnimatedElement animation="fadeInLeft" delay={0.1}>
                <MetaPanel 
                  title="Hard Carry" 
                  heroes={currentMeta.hardCarry}
                  panelId="hard-carry"
                />
              </AnimatedElement>
              <AnimatedElement animation="fadeInRight" delay={0.2}>
                <MetaPanel 
                  title="Mid" 
                  heroes={currentMeta.mid}
                  panelId="mid"
                />
              </AnimatedElement>
            </div>

            {/* Second row - 2 panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <AnimatedElement animation="fadeInLeft" delay={0.3}>
                <MetaPanel 
                  title="Offlaner" 
                  heroes={currentMeta.offlaner}
                  panelId="offlaner"
                />
              </AnimatedElement>
              <AnimatedElement animation="fadeInRight" delay={0.4}>
                <MetaPanel 
                  title="Suporte 4" 
                  heroes={currentMeta.support4}
                  panelId="suporte-4"
                />
              </AnimatedElement>
            </div>

            {/* Third row - 1 centered panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <AnimatedElement animation="fadeInLeft" delay={0.5}>
                <MetaPanel 
                  title="Suporte 5" 
                  heroes={currentMeta.support5}
                  panelId="suporte-5"
                />
              </AnimatedElement>
              {/* Empty space to maintain grid layout */}
              <div className="hidden md:block"></div>
            </div>

            {/* Alternative layout - uncomment to center the support 5 panel */}
            {/* 
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div className="max-w-md mx-auto">
                <AnimatedElement animation="fadeInUp" delay={0.5}>
                  <MetaPanel 
                    title="Suporte 5" 
                    heroes={currentMeta.support5}
                  />
                </AnimatedElement>
              </div>
            </div>
            */}

            {/* Meta Information */}
            <AnimatedElement animation="fadeInUp" delay={0.6} className="mt-12">
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30 max-w-4xl mx-auto">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Sobre o Meta</h4>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Critérios de Seleção:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Taxa de vitória em jogos de alto MMR</li>
                        <li>• Popularidade em torneios profissionais</li>
                        <li>• Versatilidade no patch atual</li>
                        <li>• Sinergia com outros heróis meta</li>
                        <li>• Impacto no jogo atual</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Atualização:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Meta atualizado semanalmente</li>
                        <li>• Baseado em dados do Stratz e Dotabuff</li>
                        <li>• Análise de jogos profissionais</li>
                        <li>• Feedback da comunidade</li>
                        <li>• Mudanças de patch consideradas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Dica:</strong> O meta está sempre mudando! Use essas informações como base, 
                    mas sempre adapte sua estratégia ao jogo atual e à composição da sua equipe.
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

export default MetaPage;