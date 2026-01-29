import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import DualMMRSlider from '../components/DualMMRSlider';
import { getProductPrice } from '../data/pricing';

const BoostPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'boost' | 'calibracao'>('boost');
  const [currentMMR, setCurrentMMR] = useState(1000);
  const [targetMMR, setTargetMMR] = useState(1500);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowScrollArrow(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMMRChange = (current: number, target: number, price: number) => {
    setCurrentMMR(current);
    setTargetMMR(target);
    setCalculatedPrice(price);
  };

  const scrollToContent = () => {
    const element = document.querySelector('.boost-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="pt-20 relative">
      <section className="relative min-h-screen py-24">
        {/* Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80"></div>
        
        <div className="container mx-auto px-4 boost-content">
          <SectionTitle 
            title="BOOST DOTA 2 & ELO JOB"
            subtitle="Boost MMR Dota 2 e elo job profissional. Aumente seu rank com jogador Imortal."
            center
          />
          
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <AnimatedElement animation="fadeInUp">
              <div className="flex justify-center mb-8">
                <div className="bg-background-light/90 backdrop-blur-sm p-1 rounded-lg border border-primary/30">
                  <button
                    onClick={() => setActiveTab('boost')}
                    className={`px-6 py-3 rounded-md font-title transition-all ${
                      activeTab === 'boost'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    MMR BOOST
                  </button>
                  <button
                    onClick={() => setActiveTab('calibracao')}
                    className={`px-6 py-3 rounded-md font-title transition-all ${
                      activeTab === 'calibracao'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    CALIBRAÇÃO
                  </button>
                </div>
              </div>
            </AnimatedElement>

            {/* MMR Boost Tab */}
            {activeTab === 'boost' && (
              <>
                <AnimatedElement animation="fadeInUp" delay={0.2}>
                  <DualMMRSlider onMMRChange={handleMMRChange} />
                </AnimatedElement>

                <AnimatedElement animation="fadeInUp" delay={0.4} className="mt-8">
                  <div className="card">
                    <h3 className="font-title text-xl text-text-bright mb-6 text-center">Informações do Boost</h3>
                    
                    {/* Centralized Values */}
                    <div className="text-center mb-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        <div className="bg-background/80 p-4 rounded-lg">
                          <div className="text-text-dim text-sm mb-1">MMR Atual</div>
                          <div className="text-text-bright font-title text-lg">{currentMMR}</div>
                        </div>
                        <div className="bg-background/80 p-4 rounded-lg">
                          <div className="text-text-dim text-sm mb-1">MMR Desejado</div>
                          <div className="text-text-bright font-title text-lg">{targetMMR}</div>
                        </div>
                        <div className="bg-background/80 p-4 rounded-lg">
                          <div className="text-text-dim text-sm mb-1">Diferença</div>
                          <div className="text-text-bright font-title text-lg">{targetMMR - currentMMR} MMR</div>
                        </div>
                        <div className="bg-background/80 p-4 rounded-lg">
                          <div className="text-text-dim text-sm mb-1">Preço Total</div>
                          <div className="text-primary font-title text-lg">R$ {calculatedPrice.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <h4 className="font-title text-text-bright mb-3">Incluso no serviço:</h4>
                      <ul className="space-y-2 text-sm mb-6 max-w-md mx-auto">
                        <li className="flex items-center justify-center text-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span>Jogadas pelo Ericking</span>
                        </li>
                        <li className="flex items-center justify-center text-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span>Relatório de progresso</span>
                        </li>
                        <li className="flex items-center justify-center text-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span>Dicas para manter o MMR</span>
                        </li>
                        <li className="flex items-center justify-center text-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span>Garantia de resultado</span>
                        </li>
                        <li className="flex items-center justify-center text-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span>Suporte durante todo o processo</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Link 
                      to={`/checkout/boost-mmr?currentMMR=${currentMMR}&targetMMR=${targetMMR}&price=${calculatedPrice}`}
                      className="magic-btn w-full text-center block"
                    >
                      SOLICITAR BOOST - R$ {calculatedPrice.toFixed(2)}
                    </Link>
                  </div>
                </AnimatedElement>
              </>
            )}

            {/* Calibração Tab */}
            {activeTab === 'calibracao' && (
              <AnimatedElement animation="fadeInUp">
                <div className="max-w-2xl mx-auto">
                  <div className="card text-center">
                    <div className="text-primary mb-6">
                      <img 
                        src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4363.png" 
                        alt="Calibração" 
                        className="w-16 h-16 mx-auto"
                      />
                    </div>
                    <h3 className="font-title text-3xl text-text-bright mb-4">Calibração de Conta</h3>
                    <p className="text-text-dim mb-8 text-lg">
                      Serviço de calibração profissional para maximizar o MMR inicial da sua conta.
                    </p>
                    
                    <div className="bg-background/80 p-6 rounded-lg mb-8">
                      <div className="text-3xl font-title text-primary mb-2">R$ {getProductPrice('calibrar-conta')?.price.toFixed(2) || '0.00'}</div>
                      <div className="text-text-dim">Calibração completa</div>
                    </div>
                    
                    <Link 
                      to="/checkout/calibrar-conta"
                      className="magic-btn w-full text-center block"
                    >
                      SOLICITAR CALIBRAÇÃO - R$ {getProductPrice('calibrar-conta')?.price.toFixed(2) || '0.00'}
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            )}
          </div>
        </div>
        
        {/* Scroll Arrow */}
        {showScrollArrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
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
      </section>
    </div>
  );
};

export default BoostPage;