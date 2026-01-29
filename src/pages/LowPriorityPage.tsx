import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

const LowPriorityPage: React.FC = () => {
  const [lowPriorityCount, setLowPriorityCount] = useState(1);
  const [lowPriorityInput, setLowPriorityInput] = useState('1');
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
    const element = document.querySelector('.low-priority-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculatePrice = (games: number) => {
    return games * 25; // R$ 25 por jogo de low priority
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value);
    setLowPriorityCount(newCount);
    setLowPriorityInput(newCount.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLowPriorityInput(value);
  };

  const handleInputBlur = () => {
    let numValue = parseInt(lowPriorityInput);
    
    if (isNaN(numValue) || lowPriorityInput === '') {
      setLowPriorityInput(lowPriorityCount.toString());
      return;
    }
    
    numValue = Math.max(1, Math.min(5, numValue));
    setLowPriorityCount(numValue);
    setLowPriorityInput(numValue.toString());
  };

  const price = calculatePrice(lowPriorityCount);

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 low-priority-content">
          <SectionTitle 
            title="REMOÇÃO LOW PRIORITY"
            subtitle="Remova jogos de low priority rapidamente. Volte a jogar ranked sem penalidades."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Slider de Low Priority */}
            <AnimatedElement animation="fadeInUp">
              <div className="card mb-8">
                <h3 className="font-title text-xl text-text-bright mb-6 text-center">Configurar Remoção Low Priority</h3>
                
                <div className="text-center mb-6">
                  <div className="text-warning mb-4">
                    <Zap size={64} className="mx-auto" />
                  </div>
                  <div className="text-center mb-2">
                    <span className="text-warning font-title text-lg">Jogos Low Priority</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-title text-text-bright mb-2">Quantidade de Low Priority</label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={lowPriorityCount}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-text-dim text-sm mt-2">
                    <span>1 jogo</span>
                    <span>5 jogos</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="1"
                    value={lowPriorityInput}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="text-3xl font-title text-warning mb-2 bg-transparent border-b border-warning/30 focus:border-warning outline-none text-center w-20"
                  />
                  <div className="text-text-dim">{lowPriorityCount === 1 ? 'jogo' : 'jogos'} low priority</div>
                </div>

                {/* Informações da Remoção */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/80 p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-warning mb-1">{lowPriorityCount}</div>
                    <div className="text-text-dim text-sm">{lowPriorityCount === 1 ? 'Jogo' : 'Jogos'} Low Priority</div>
                  </div>
                  <div className="bg-background/80 p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-primary mb-1">R$ {price.toFixed(2)}</div>
                    <div className="text-text-dim text-sm">Preço Total</div>
                  </div>
                </div>

                <Link 
                  to={`/checkout/low-priority-custom?games=${lowPriorityCount}&price=${price}`}
                  className="magic-btn w-full text-center block bg-warning hover:bg-warning/80 text-background"
                >
                  REMOVER AGORA - R$ {price.toFixed(2)}
                </Link>
              </div>
            </AnimatedElement>
            
            {/* Informações Importantes */}
            <AnimatedElement animation="fadeInUp" delay={0.2}>
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Sobre a Remoção Low Priority</h4>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Como Funciona:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Jogos executados profissionalmente</li>
                        <li>• Foco em vitórias rápidas</li>
                        <li>• Sem abandono de partidas</li>
                        <li>• Execução sequencial otimizada</li>
                        <li>• Confirmação de conclusão</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Garantias:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Remoção garantida dos jogos</li>
                        <li>• Execução rápida e eficiente</li>
                        <li>• Suporte durante todo o processo</li>
                        <li>• Sem riscos para sua conta</li>
                        <li>• Satisfação garantida</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-warning/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Importante:</strong> O low priority impede você de jogar ranked. Nosso serviço 
                    remove essas penalidades rapidamente para que você possa voltar a jogar normalmente.
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

export default LowPriorityPage;