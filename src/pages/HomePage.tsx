import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Sword, Shield, Target, TrendingUp, Clock, Award, Users, BookOpen, Zap, ShoppingCart } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import { playerStats } from '../assets/stats';
import AnimatedElement from '../components/AnimatedElement';

const HomePage: React.FC = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowScrollArrow(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80"></div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-title text-5xl md:text-7xl lg:text-8xl text-text-bright mb-6 glow-text">
              ERICKING
            </h1>
            <div className="inline-block bg-primary/20 border-2 border-primary px-6 py-3 rounded-lg mb-4">
              <span className="font-title text-xl md:text-3xl text-text-bright">
                RANK <span className="text-primary">IMMORTAL</span> • <span className="text-primary">TOP 100 SA</span>
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-text-dim text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Jogador Imortal de Dota 2 oferecendo compra de contas calibradas, boost de MMR, 
              elo job e coach profissional. Especialista em hard carry desde 2012.
            </p>
            
            <div className="mb-8">
              {/* Streaming Buttons - Golden Background */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="https://www.youtube.com/@ericKING94" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magic-btn group inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" />
                  ASSISTA NO YOUTUBE
                </a>
                
                <a 
                  href="https://twitch.tv/ericking" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magic-btn group inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
                >
                  <img src="https://img.icons8.com/color/512/twitch--v2.png" alt="Twitch" className="w-6 h-6" />
                  ASSISTA NA TWITCH
                </a>
              </div>

              {/* Service Buttons - Golden Border */}
              <div className="max-w-5xl mx-auto">
                {/* Primeira linha - 3 serviços */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <Link 
                    to="/play"
                    className="magic-btn-outline group inline-flex items-center justify-center gap-2 py-4"
                  >
                    <Users size={20} className="text-white group-hover:text-white transition-colors" />
                    <span className="hidden sm:inline">JOGUE COMIGO</span>
                    <span className="sm:hidden">JOGUE</span>
                  </Link>
                  
                  <Link 
                    to="/mentoria"
                    className="magic-btn-outline group inline-flex items-center justify-center gap-2 py-4"
                  >
                    <BookOpen size={20} className="text-white group-hover:text-white transition-colors" />
                    <span className="hidden sm:inline">MENTORIA</span>
                    <span className="sm:hidden">MENTOR</span>
                  </Link>
                  
                  <Link 
                    to="/boost"
                    className="magic-btn-outline group inline-flex items-center justify-center gap-2 py-4"
                  >
                    <Zap size={20} className="text-white group-hover:text-white transition-colors" />
                    <span className="hidden sm:inline">BOOST MMR</span>
                    <span className="sm:hidden">BOOST</span>
                  </Link>
                </div>
                
                {/* Segunda linha - 4 serviços */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <Link 
                    to="/contas"
                    className="magic-btn-outline group inline-flex items-center justify-center gap-2 py-4"
                  >
                    <ShoppingCart size={20} className="text-white group-hover:text-white transition-colors" />
                    <span className="hidden sm:inline">CONTAS</span>
                    <span className="sm:hidden">CONTAS</span>
                  </Link>
                  
                  <Link 
                    to="/pdfs"
                    className="magic-btn-outline group inline-flex items-center justify-center gap-2 py-4"
                  >
                    <FileText size={20} className="text-white group-hover:text-white transition-colors" />
                    <span className="hidden sm:inline">GUIAS PDF</span>
                    <span className="sm:hidden">PDFs</span>
                  </Link>
                  
                  <Link 
                    to="/boost-behavior"
                    className="magic-btn-outline group inline-flex items-center justify-center gap-2 py-4"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-white transition-colors">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span className="hidden sm:inline">BEHAVIOR</span>
                    <span className="sm:hidden">BEHAVIOR</span>
                  </Link>
                  
                  <Link 
                    to="/low-priority"
                    className="magic-btn-outline group inline-flex items-center justify-center gap-2 py-4"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-white transition-colors">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <span className="hidden sm:inline">LOW PRIORITY</span>
                    <span className="sm:hidden">LOW PRIORITY</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {showScrollArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-10 left-0 right-0 text-center"
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
      </section>
    </>
  );
};

export default HomePage;