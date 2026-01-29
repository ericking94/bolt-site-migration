import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { playerStats } from '../assets/stats';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import AnimatedBg from '../components/AnimatedBg';

const AboutPage: React.FC = () => {
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
    const element = document.querySelector('.about-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden"> 
        <AnimatedBg />
        <div className="container mx-auto px-4 about-content">
          <SectionTitle 
            title="SOBRE MIM"
            center
          />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
            {/* Foto posicionada um pouco à esquerda do centro - AMPLIADA */}
            <AnimatedElement animation="fadeInLeft" className="lg:w-2/5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-lg"></div>
                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                  <img 
                    src="https://i.imgur.com/9kr75vO.jpeg"  
                    alt="Ericking - Streamer e Criador de Conteúdo de Dota 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedElement>
            
            {/* Texto "Quem é Ericking" ao lado direito */}
            <AnimatedElement animation="fadeInRight" delay={0.2} className="lg:w-3/5">
              <h3 className="font-title text-2xl text-text-bright mb-6">Quem é Ericking?</h3>
              <p className="text-text mb-4 leading-relaxed">
                Sou jogador profissional de Dota 2 desde 2012 e streamer desde 2015. Especializado em 
                compra de contas Dota 2, boost MMR, elo job e coach personalizado. Comecei como hard carry 
                e hoje domino todas as posições em alto nível. Ofereço contas calibradas, boost de rank 
                e mentoria profissional para jogadores que querem evoluir no Dota 2.
              </p>
              <p className="text-text mb-8 leading-relaxed">
                Além de oferecer compra de contas Dota 2 e boost MMR, desenvolvi um método de coach 
                eficiente para ensinar Dota 2. Minha experiência como jogador Imortal me permite 
                oferecer elo job de qualidade e mentoria personalizada. Transformo conhecimento 
                avançado em ensino prático — sem enrolação, direto ao ponto, focado em resultados reais.
              </p>
            </AnimatedElement>
          </div>
          
          {/* Painéis centralizados abaixo da foto */}
          <AnimatedElement animation="fadeInUp" delay={0.4} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="card">
                <h4 className="font-title text-text-bright mb-2">Função Principal</h4>
                <p className="text-text-dim">{playerStats.favRole}</p>
              </div>
              <div className="card">
                <h4 className="font-title text-text-bright mb-2">Maior MMR</h4>
                <p className="text-text-dim">{playerStats.mmr}</p>
              </div>
              <div className="card">
                <h4 className="font-title text-text-bright mb-2">Player de dota 2</h4>
                <p className="text-text-dim">desde 2012</p>
              </div>
              <div className="card">
                <h4 className="font-title text-text-bright mb-2">Streamer</h4>
                <p className="text-text-dim">desde 2015</p> 
              </div>
              <div className="card">
                <h4 className="font-title text-text-bright mb-2">Herói Assinatura</h4>
                <p className="text-text-dim">{playerStats.heroSignature}</p>
              </div>
              <div className="card">
                <h4 className="font-title text-text-bright mb-2">Top 3 Heróis</h4>
                <p className="text-text-dim">Anti-Mage, Morphling, Jugernaut</p>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Heróis de Destaque */}
          <AnimatedElement animation="fadeInUp" delay={0.6} className="mt-16">
            <div className="max-w-4x1 mx-auto">  
              <h3 className="font-title text-2xl text-text-bright mb-6 text-center">Heróis de Destaque</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {playerStats.mostPlayedHeroes.slice(0, 3).map((hero, index) => {
                  
                  // Vídeos dos heróis - URLs diretas dos vídeos
                  const heroVideos = [
                    'https://i.imgur.com/RyodY5V.mp4', // Anti-Mage - substitua pela URL real
                    'https://i.imgur.com/aOJA5Db.mp4', // Morphling - substitua pela URL real  
                    'https://i.imgur.com/aIeEfnj.mp4'  // Juggernaut - substitua pela URL real
                  ];
                  
                  return (
                    <div
                      key={index}
                      className="w-[340px] h-[542px] relative overflow-hidden rounded-lg border-4 border-primary shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-primary/50"
                    >
                      {/* Vídeo do herói */}
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>
                        <video
                          src={heroVideos[index]}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          onError={(e) => {
                            const target = e.target as HTMLVideoElement;
                            target.style.display = 'none';
                            if (target.parentElement) {
                              target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-background/80 text-primary font-title text-lg">${hero.name}</div>`;
                            }
                          }}
                        >
                          Seu navegador não suporta vídeos HTML5.
                        </video>
                      </div>
                      
                      {/* Nome do herói fixo na parte inferior */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                        <h4 className="text-white text-xl font-title text-center">
                          {hero.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="CURIOSIDADES"
            subtitle="Alguns fatos interessantes sobre minha carreira e estilo de jogo."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedElement animation="fadeInUp" delay={0.1}>
              <div className="card">
                <div className="text-primary text-4xl font-title mb-4">01</div>
                <h3 className="font-title text-lg mb-2">Primeira Calibração</h3>
                <p className="text-text-dim">
                  Minha primeira calibração foi 5.2K de MMR, o que na época era bem relevante. 
                  Foi um marco importante na minha jornada no Dota 2.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInUp" delay={0.2}>
              <div className="card">
                <div className="text-primary text-4xl font-title mb-4">02</div>
                <h3 className="font-title text-lg mb-2">Setup de Jogo</h3>
                <p className="text-text-dim">
                  Ryzen 9 5900X + RTX 3070TI + 32GB 3600mhz. Um setup poderoso que garante 
                  performance máxima durante as partidas mais intensas.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInUp" delay={0.3}>
              <div className="card">
                <div className="text-primary text-4xl font-title mb-4">03</div>
                <h3 className="font-title text-lg mb-2">Filosofia de Ensino</h3>
                <p className="text-text-dim">
                  Acredito que o Dota deve ser ensinado de forma clara e divertida. Minha didática 
                  foca em conceitos práticos que realmente fazem diferença no jogo.
                </p>
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

export default AboutPage;