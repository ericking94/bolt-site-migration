import React from 'react';

interface BuildPanelProps {
  heroName: string;
  heroGif: string;
  position: string;
}

const BuildPanel: React.FC<BuildPanelProps> = ({ heroName, heroGif, position }) => {
  // Placeholder URLs para fácil edição
  const skillIcons = [
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png'
  ];

  const itemIcons = [
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/battle_fury.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png',
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png'
  ];

  const facetIcon = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png';

  return (
    <div className="bg-background-light/90 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-title text-xl text-text-bright">{heroName}</h3>
        <span className="text-primary text-sm font-title">{position}</span>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Hero GIF - Vertical Frame */}
        <div className="col-span-3">
          <div className="aspect-[3/4] bg-background/80 rounded-lg overflow-hidden border border-primary/20">
            <img 
              src={heroGif}
              alt={heroName}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://media.giphy.com/media/3o7TKwmnDgQb5jemjK/giphy.gif';
              }}
            />
          </div>
        </div>

        {/* Skills and Content */}
        <div className="col-span-9">
          <div className="grid grid-cols-12 gap-3">
            {/* Skills - 4 icons in a row */}
            <div className="col-span-8">
              <div className="grid grid-cols-4 gap-2 mb-3">
                {skillIcons.map((icon, index) => (
                  <div key={index} className="aspect-square bg-background/80 rounded border border-primary/20 p-1">
                    <img 
                      src={icon}
                      alt={`Skill ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Talentos */}
            <div className="col-span-4">
              <div className="bg-background/80 rounded border border-primary/20 p-2 mb-3" style={{ width: '68px', height: '72px' }}>
                <div className="text-center">
                  <div className="text-xs text-primary font-title mb-1">Talentos</div>
                  <div className="text-xs text-text-dim">25: +400</div>
                  <div className="text-xs text-text-dim">20: +50</div>
                  <div className="text-xs text-text-dim">15: +15</div>
                  <div className="text-xs text-text-dim">10: +20</div>
                </div>
              </div>
            </div>

            {/* Faceta - Retângulo ao lado direito das skills */}
            <div className="col-span-8">
              <div className="bg-background/80 rounded border border-primary/20 p-2 flex items-center gap-2">
                <img 
                  src={facetIcon}
                  alt="Faceta"
                  className="w-8 h-8 rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div>
                  <div className="text-xs text-primary font-title">Mana Break</div>
                  <div className="text-xs text-text-dim">Faceta Principal</div>
                </div>
              </div>
            </div>

            {/* Items - 6 quadrados (3x2) */}
            <div className="col-span-12 mt-2">
              <div className="grid grid-cols-6 gap-2">
                {itemIcons.map((icon, index) => (
                  <div key={index} className="aspect-square bg-background/80 rounded border border-primary/20 p-1">
                    <img 
                      src={icon}
                      alt={`Item ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Build Notes */}
      <div className="mt-4 p-3 bg-background/60 rounded-lg">
        <h4 className="text-sm font-title text-text-bright mb-2">Notas da Build:</h4>
        <p className="text-xs text-text-dim">
          Build focada em farm rápido e transição para late game. Priorize Battle Fury para acelerar o farm, 
          seguido de Manta Style para survivability e push.
        </p>
      </div>
    </div>
  );
};

export default BuildPanel;