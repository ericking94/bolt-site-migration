import React, { useState } from 'react';

interface Hero {
  name: string;
  image: string;
  imagePosition?: string;
  customStyles?: string;
  horizontalAdjust?: string; // Nova propriedade para ajustes horizontais
  items?: string[]; // Array de URLs dos itens (máximo 6)
}

interface MetaPanelProps {
  title: string;
  heroes: Hero[];
  className?: string;
  panelId?: string;
}

const MetaPanel: React.FC<MetaPanelProps> = ({ title, heroes, className = '', panelId }) => {
  const [hoveredHero, setHoveredHero] = useState<number | null>(null);

  // Gerar ID único para o painel baseado no título se não fornecido
  const uniquePanelId = panelId || title.toLowerCase().replace(/\s+/g, '-');

  // Converter nome do herói para ID único
  const heroToId = (heroName: string, index: number) => {
    return `hero-${heroName.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-')}-${index}`;
  };

  return (
    <div className={`relative ${className}`} id={`meta-panel-${uniquePanelId}`}>
      <h3 className="font-title text-lg text-text-bright mb-4 text-center">{title}</h3>
      <div className="relative bg-background-light/90 backdrop-blur-sm border border-primary/30 rounded-lg p-4 overflow-visible">
        {/* Grid responsivo para os heróis */}
        <div className="grid grid-cols-5 gap-2 h-40">
          {heroes.map((hero, index) => {
            const heroId = heroToId(hero.name, index);
            const isHovered = hoveredHero === index;
            
            return (
              <div
                key={index}
                id={heroId}
                className={`relative overflow-visible group transform transition-all duration-300 hover:scale-110 hover:z-50 rounded-md shadow-lg hover:shadow-2xl hover:shadow-primary/50 ${hero.customStyles || ''} ${hero.horizontalAdjust || ''}`}
                onMouseEnter={() => setHoveredHero(index)}
                onMouseLeave={() => setHoveredHero(null)}
                style={{
                  zIndex: isHovered ? 100 : 10,
                }}
              >
                {/* Container da imagem com overflow hidden */}
                <div className={`relative w-full h-full overflow-hidden rounded-md ${
                  // Aplicar aspect ratio específico para Suporte 5
                  panelId === 'suporte-5' ? 'aspect-[134/160]' : ''
                }`}>
                  {/* Hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 rounded-md ${
                      // Ajuste específico para Suporte 5
                      panelId === 'suporte-5' ? 'object-center' : ''
                    }`}
                    style={{
                      objectPosition: hero.imagePosition || 'center 30%'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png';
                    }}
                  />
                  
                  {/* Overlay gradient para melhor visibilidade do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md"></div>
                </div>
                
                {/* Nome do herói - Mais sutil e transparente */}
                <div 
                  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-out ${
                    isHovered 
                      ? 'opacity-90 scale-110 translate-y-[-80%] z-50' 
                      : 'opacity-0 scale-90 translate-y-[-50%] z-10'
                  }`}
                  style={{
                    zIndex: isHovered ? 200 : 10,
                  }}
                >
                  <div className="bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/40 shadow-xl shadow-primary/30 transform transition-all duration-300 min-w-max">
                    <span className="text-white text-sm font-title text-center whitespace-nowrap block leading-tight">
                      {hero.name}
                    </span>
                    
                    {/* Item Slots */}
                    <div className="grid grid-cols-3 gap-1 mt-2">
                      {Array.from({ length: 6 }, (_, itemIndex) => {
                        const itemUrl = hero.items?.[itemIndex] || 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tpscroll.png';
                        return (
                          <div
                            key={itemIndex}
                            className="w-6 h-6 bg-black/60 border border-primary/30 rounded overflow-hidden"
                            title={`Item ${itemIndex + 1}`}
                          >
                            <img
                              src={itemUrl}
                              alt={`Item ${itemIndex + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tpscroll.png';
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Seta apontando para o herói */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 z-10">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/40"></div>
                  </div>
                </div>
                
                {/* Borda animada */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/80 transition-all duration-300 rounded-md"></div>
                
                {/* Efeito de brilho */}
                <div className="absolute inset-0 shadow-lg shadow-primary/0 group-hover:shadow-primary/60 transition-all duration-300 rounded-md"></div>
                
                {/* Efeito de destaque */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-md"></div>
              </div>
            );
          })}
        </div>
        
        {/* Efeito de brilho do painel */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
        
        {/* Partículas animadas */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MetaPanel;