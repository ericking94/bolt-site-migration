import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Sword, Shield, Zap, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

interface HeroAbility {
  name: string;
  description: string;
  icon: string;
  type: 'basic' | 'ultimate' | 'talent' | 'facet';
  cooldown?: string;
  manaCost?: string;
  damage?: string;
}

interface HeroData {
  name: string;
  title: string;
  image: string;
  portrait: string;
  primaryAttribute: 'strength' | 'agility' | 'intelligence' | 'universal';
  attackType: 'melee' | 'ranged';
  roles: string[];
  complexity: number;
  abilities: HeroAbility[];
  talents: { level: number; left: string; right: string }[];
  facets: { name: string; description: string; icon: string }[];
  lore: string;
  baseStats: {
    health: number;
    mana: number;
    damage: string;
    armor: number;
    movementSpeed: number;
    attackRange: number;
  };
}

// Mock data - Em um projeto real, isso viria de uma API
const getHeroData = (heroSlug: string): HeroData | null => {
  const heroDatabase: Record<string, HeroData> = {
    'anti-mage': {
      name: 'Anti-Mage',
      title: 'The Mage Slayer',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
      portrait: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/antimage.png',
      primaryAttribute: 'agility',
      attackType: 'melee',
      roles: ['Carry', 'Escape', 'Nuker'],
      complexity: 1,
      lore: 'The monks of Turstarkuri watched the ruined lands that had once been their home. The Mage Wars had twisted the very nature of the world, leaving behind a wasteland of arcane power that made their former paradise uninhabitable.',
      baseStats: {
        health: 580,
        mana: 219,
        damage: '53-57',
        armor: 2.08,
        movementSpeed: 310,
        attackRange: 150
      },
      abilities: [
        {
          name: 'Mana Break',
          description: 'Burns an opponent\'s mana on each attack and deals damage equal to the mana burned.',
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png',
          type: 'basic',
          manaCost: 'Passive',
          damage: '28/40/52/64'
        },
        {
          name: 'Blink',
          description: 'Short distance teleportation that allows Anti-Mage to move in and out of combat.',
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png',
          type: 'basic',
          cooldown: '15/12/9/6',
          manaCost: '60'
        },
        {
          name: 'Counterspell',
          description: 'Grants magic resistance and reflects targeted spells back to their caster.',
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png',
          type: 'basic',
          cooldown: '13/11/9/7',
          manaCost: '45'
        },
        {
          name: 'Mana Void',
          description: 'Targets an enemy unit and deals damage based on how much mana the target is missing.',
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png',
          type: 'ultimate',
          cooldown: '70',
          manaCost: '125/200/275',
          damage: '0.6/0.85/1.1 per missing mana'
        }
      ],
      talents: [
        { level: 10, left: '+20 Attack Speed', right: '+200 Health' },
        { level: 15, left: '+15 Agility', right: '-1.5s Blink Cooldown' },
        { level: 20, left: '+50 Attack Speed', right: '-50s Mana Void Cooldown' },
        { level: 25, left: '+400 Blink Cast Range', right: '-2.5s Blink Cooldown' }
      ],
      facets: [
        {
          name: 'Mana Break',
          description: 'Anti-Mage\'s attacks burn enemy mana and deal bonus damage.',
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png'
        },
        {
          name: 'Counterspell',
          description: 'Provides magic resistance and spell reflection.',
          icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png'
        }
      ]
    },
    // Adicione mais heróis conforme necessário
  };

  return heroDatabase[heroSlug] || null;
};

const HeroDetailPage: React.FC = () => {
  const { heroSlug } = useParams<{ heroSlug: string }>();
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (heroSlug) {
      const data = getHeroData(heroSlug);
      setHeroData(data);
      setLoading(false);
    }
  }, [heroSlug]);

  const getAttributeIcon = (attribute: string) => {
    switch (attribute) {
      case 'strength': return <Shield className="text-red-500" size={20} />;
      case 'agility': return <Zap className="text-green-500" size={20} />;
      case 'intelligence': return <Target className="text-blue-500" size={20} />;
      default: return <Sword className="text-purple-500" size={20} />;
    }
  };

  const getComplexityStars = (complexity: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <span key={i} className={i < complexity ? 'text-primary' : 'text-text-dim'}>★</span>
    ));
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-dim">Carregando informações do herói...</p>
        </div>
      </div>
    );
  }

  if (!heroData) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-title text-2xl text-text-bright mb-4">Herói não encontrado</h2>
          <p className="text-text-dim mb-6">O herói que você está procurando não foi encontrado.</p>
          <button 
            onClick={() => navigate('/meta')}
            className="magic-btn flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Voltar ao Meta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroData.image})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement animation="fadeInUp">
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => navigate('/meta')}
                className="text-text-dim hover:text-text-bright transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="flex items-center gap-4">
                {getAttributeIcon(heroData.primaryAttribute)}
                <span className="text-text-dim">|</span>
                <span className="text-text-dim capitalize">{heroData.attackType}</span>
                <span className="text-text-dim">|</span>
                <div className="flex items-center gap-1">
                  <span className="text-text-dim text-sm">Complexidade:</span>
                  {getComplexityStars(heroData.complexity)}
                </div>
              </div>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedElement animation="fadeInLeft">
              <div className="text-center lg:text-left">
                <h1 className="font-title text-4xl md:text-6xl text-text-bright mb-2">
                  {heroData.name}
                </h1>
                <p className="text-primary text-xl mb-4">{heroData.title}</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {heroData.roles.map((role, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-title"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <p className="text-text-dim leading-relaxed">{heroData.lore}</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeInRight" delay={0.2}>
              <div className="text-center">
                <img 
                  src={heroData.portrait} 
                  alt={heroData.name}
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl shadow-primary/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = heroData.image;
                  }}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Base Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="ESTATÍSTICAS BASE" center />
          
          <AnimatedElement animation="fadeInUp">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              <div className="card text-center">
                <div className="text-2xl font-title text-primary mb-1">{heroData.baseStats.health}</div>
                <div className="text-text-dim text-sm">Vida</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-title text-primary mb-1">{heroData.baseStats.mana}</div>
                <div className="text-text-dim text-sm">Mana</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-title text-primary mb-1">{heroData.baseStats.damage}</div>
                <div className="text-text-dim text-sm">Dano</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-title text-primary mb-1">{heroData.baseStats.armor}</div>
                <div className="text-text-dim text-sm">Armadura</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-title text-primary mb-1">{heroData.baseStats.movementSpeed}</div>
                <div className="text-text-dim text-sm">Velocidade</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-title text-primary mb-1">{heroData.baseStats.attackRange}</div>
                <div className="text-text-dim text-sm">Alcance</div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Abilities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="HABILIDADES" center />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {heroData.abilities.map((ability, index) => (
              <AnimatedElement key={index} animation="fadeInUp" delay={index * 0.1}>
                <div className="card">
                  <div className="flex items-start gap-4">
                    <img 
                      src={ability.icon} 
                      alt={ability.name}
                      className="w-16 h-16 rounded-lg border border-primary/30"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-title text-lg text-text-bright mb-2 flex items-center gap-2">
                        {ability.name}
                        {ability.type === 'ultimate' && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">ULT</span>
                        )}
                      </h4>
                      <p className="text-text-dim text-sm mb-3">{ability.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        {ability.cooldown && (
                          <div>
                            <span className="text-text-dim">Cooldown:</span>
                            <span className="text-text-bright ml-1">{ability.cooldown}s</span>
                          </div>
                        )}
                        {ability.manaCost && (
                          <div>
                            <span className="text-text-dim">Mana:</span>
                            <span className="text-text-bright ml-1">{ability.manaCost}</span>
                          </div>
                        )}
                        {ability.damage && (
                          <div className="col-span-2">
                            <span className="text-text-dim">Dano:</span>
                            <span className="text-text-bright ml-1">{ability.damage}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Talents */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="TALENTOS" center />
          
          <AnimatedElement animation="fadeInUp">
            <div className="max-w-2xl mx-auto space-y-4">
              {heroData.talents.map((talent, index) => (
                <div key={index} className="card">
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="text-right">
                      <span className="text-text bg-background/80 px-3 py-1 rounded text-sm">
                        {talent.left}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-title text-primary text-lg">
                        Nível {talent.level}
                      </span>
                    </div>
                    <div className="text-left">
                      <span className="text-text bg-background/80 px-3 py-1 rounded text-sm">
                        {talent.right}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Facets */}
      {heroData.facets.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <SectionTitle title="FACETAS" center />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {heroData.facets.map((facet, index) => (
                <AnimatedElement key={index} animation="fadeInUp" delay={index * 0.1}>
                  <div className="card">
                    <div className="flex items-start gap-4">
                      <img 
                        src={facet.icon} 
                        alt={facet.name}
                        className="w-12 h-12 rounded-lg border border-primary/30"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div>
                        <h4 className="font-title text-lg text-text-bright mb-2">{facet.name}</h4>
                        <p className="text-text-dim text-sm">{facet.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HeroDetailPage;