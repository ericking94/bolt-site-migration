import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

const BoostBehaviorPage: React.FC = () => {
  const [gameCount, setGameCount] = useState(10);
  const [gameCountInput, setGameCountInput] = useState('10');
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
    const element = document.querySelector('.boost-behavior-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculatePrice = (games: number) => {
    return games * 5; // R$ 5 por jogo
  };

  const calculateBehaviorGain = (games: number) => {
    return games * 25; // Pelo menos 25 de behavior por jogo
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGameCount = parseInt(e.target.value);
    setGameCount(newGameCount);
    setGameCountInput(newGameCount.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGameCountInput(value);
  };

  const handleInputBlur = () => {
    let numValue = parseInt(gameCountInput);
    
    if (isNaN(numValue) || gameCountInput === '') {
      setGameCountInput(gameCount.toString());
      return;
    }
    
    numValue = Math.max(1, Math.min(50, numValue));
    setGameCount(numValue);
    setGameCountInput(numValue.toString());
  };

  const price = calculatePrice(gameCount);
  const behaviorGain = calculateBehaviorGain(gameCount);

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 boost-behavior-content">
          <SectionTitle 
            title="BOOST BEHAVIOR SCORE"
            subtitle="Melhore seu behavior score com jogos turbo profissionais. Recupere sua reputação no Dota 2."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Slider de Jogos */}
            <AnimatedElement animation="fadeInUp">
              <div className="card mb-8">
                <h3 className="font-title text-xl text-text-bright mb-6 text-center">Boost Behavior</h3>
                
                <div className="text-center mb-6">
                  <div className="text-success mb-4">
                    <TrendingUp size={64} className="mx-auto" />
                  </div>
                  <div className="text-center mb-2">
                    <span className="text-success font-title text-lg">Jogos Turbo</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-title text-text-bright mb-2">Quantidade de Jogos</label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={gameCount}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-text-dim text-sm mt-2">
                    <span>1 jogo</span>
                    <span>50 jogos</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    step="1"
                    value={gameCountInput}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="text-3xl font-title text-success mb-2 bg-transparent border-b border-success/30 focus:border-success outline-none text-center w-20"
                  />
                  <div className="text-text-dim">jogos turbo</div>
                </div>

                {/* Informações do Boost */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-background/80 p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-success mb-1">{gameCount}</div>
                    <div className="text-text-dim text-sm">Jogos Turbo</div>
                  </div>
                  <div className="bg-background/80 p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-success mb-1">+{behaviorGain}</div>
                    <div className="text-text-dim text-sm">Behavior Score</div>
                  </div>
                  <div className="bg-background/80 p-4 rounded-lg text-center">
                    <div className="text-2xl font-title text-primary mb-1">R$ {price.toFixed(2)}</div>
                    <div className="text-text-dim text-sm">Preço Total</div>
                  </div>
                </div>

                <Link 
                  to={`/checkout/boost-behavior-custom?games=${gameCount}&price=${price}`}
                  className="magic-btn w-full text-center block bg-success hover:bg-success/80"
                >
                  SOLICITAR BOOST - R$ {price.toFixed(2)}
                </Link>
              </div>
            </AnimatedElement>

            {/* Aviso Importante */}
            <AnimatedElement animation="fadeInUp" delay={0.2}>
              <div className="bg-warning/20 border border-warning/40 rounded-lg p-6 mb-8">
                <h4 className="font-title text-warning text-center mb-3">⚠️ INFORMAÇÃO IMPORTANTE</h4>
                <p className="text-warning text-center text-sm font-medium">
                  <strong>A cada jogo turbo, a média de ganho de behavior score é de pelo menos 25 pontos.</strong><br/>
                  Com {gameCount} {gameCount === 1 ? 'jogo' : 'jogos'}, você ganhará aproximadamente +{behaviorGain} de behavior score.
                </p>
              </div>
            </AnimatedElement>
            
            {/* Informações Importantes */}
            <AnimatedElement animation="fadeInUp" delay={0.4}>
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Sobre o Boost Behavior</h4>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Como Funciona:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Jogos turbo com comportamento exemplar</li>
                        <li>• Comunicação sempre positiva</li>
                        <li>• Sem abandono de partidas</li>
                        <li>• Foco em teamwork e cooperação</li>
                        <li>• Relatórios de progresso regulares</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Garantias:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Melhoria garantida no behavior score</li>
                        <li>• Jogos realizados por profissional</li>
                        <li>• Suporte durante todo o processo</li>
                        <li>• Relatórios detalhados de progresso</li>
                        <li>• Satisfação garantida</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-success/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Importante:</strong> O behavior score é fundamental para uma experiência positiva no Dota 2. 
                    Nosso serviço foca em melhorar sua reputação de forma natural e sustentável.
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

export default BoostBehaviorPage;