import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';
import { getProductPrice } from '../data/pricing';

interface ContaData {
  id: string;
  rank: string;
  title: string;
  description: string;
  backgroundImage?: string;
  icon?: React.ReactNode;
  features?: string[];
}

// Rank images mapping
const rankImages = {
  herald: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-herald-1.png',
  guardian: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-guardian-1.png',
  crusader: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-crusader-1.png',
  archon: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-archon-1.png',
  legend: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-legend-1.png',
  ancient: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-ancient-1.png',
  divine: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-divine-1.png',
  immortal: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-immortal.png',
};


// Function to get rank tier from rank name
const getRankTier = (rank: string): keyof typeof rankImages => {
  const lowerRank = rank.toLowerCase();
  if (lowerRank.includes('arauto') || lowerRank.includes('herald')) return 'herald';
  if (lowerRank.includes('guardião') || lowerRank.includes('guardian')) return 'guardian';
  if (lowerRank.includes('cruzado') || lowerRank.includes('crusader')) return 'crusader';
  if (lowerRank.includes('arconte') || lowerRank.includes('archon')) return 'archon';
  if (lowerRank.includes('lenda') || lowerRank.includes('legend')) return 'legend';
  if (lowerRank.includes('ancient')) return 'ancient';
  if (lowerRank.includes('divine')) return 'divine';
  if (lowerRank.includes('imortal') || lowerRank.includes('immortal') || lowerRank.includes('k+') || lowerRank.includes('5620+')) return 'immortal';
  return 'herald'; // default
};

// Medal Icon Component
const MedalIcon: React.FC<{ rank: string; size?: number }> = ({ rank, size = 24 }) => {
  const tier = getRankTier(rank);
  const imageUrl = rankImages[tier];
  
  return (
    <img 
      src={imageUrl} 
      alt={rank}
      className={`object-contain`}
      style={{ width: size, height: size }}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );
};

const contasSmurfPool: ContaData[] = [
  { 
    id: 'smurf-6k', 
    rank: '6k+', 
    title: 'Conta Imortal 6k+',
    description: 'Conta imortal com smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 6000+ MMR', 'Com smurf pool', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'smurf-7k', 
    rank: '7k+', 
    title: 'Conta Imortal 7k+',
    description: 'Conta imortal com smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 7000+ MMR', 'Com smurf pool', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'smurf-8k', 
    rank: '8k+', 
    title: 'Conta Imortal 8k+',
    description: 'Conta imortal com smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 8000+ MMR', 'Com smurf pool', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'smurf-9k', 
    rank: '9k+', 
    title: 'Conta Imortal 9k+',
    description: 'Conta imortal com smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 9000+ MMR', 'Com smurf pool', 'Sob encomenda', 'Suporte incluído']
  },
  { 
    id: 'smurf-10k', 
    rank: '10k+', 
    title: 'Conta Imortal 10k+',
    description: 'Conta imortal com smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 10000+ MMR', 'Com smurf pool', 'Sob encomenda', 'Suporte incluído']
  },
  { 
    id: 'smurf-11k', 
    rank: '11k+', 
    title: 'Conta Imortal 11k+',
    description: 'Conta imortal com smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 11000+ MMR', 'Com smurf pool', 'Sob encomenda', 'Suporte incluído']
  },
  { 
    id: 'smurf-12k', 
    rank: '12k+', 
    title: 'Conta Imortal 12k+',
    description: 'Conta imortal com smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 12000+ MMR', 'Com smurf pool', 'Sob encomenda', 'Suporte incluído']
  }
];

const contasSemSmurfPool: ContaData[] = [
  { 
    id: 'clean-5620', 
    rank: '5620+', 
    title: 'Conta Imortal 5620+',
    description: 'Conta imortal sem smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 5620+ MMR', 'Sem smurf pool', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'clean-6k', 
    rank: '6k+', 
    title: 'Conta Imortal 6k+',
    description: 'Conta imortal sem smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 6000+ MMR', 'Sem smurf pool', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'clean-7k', 
    rank: '7k+', 
    title: 'Conta Imortal 7k+',
    description: 'Conta imortal sem smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 7000+ MMR', 'Sem smurf pool', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'clean-8k', 
    rank: '8k+', 
    title: 'Conta Imortal 8k+',
    description: 'Conta imortal sem smurf pool',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 8000+ MMR', 'Sem smurf pool', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'clean-9k', 
    rank: '9k+', 
    title: 'Conta Imortal 9k+',
    description: 'Conta imortal sem smurf pool (sob encomenda)',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 9000+ MMR', 'Sem smurf pool', 'Sob encomenda', 'Suporte incluído']
  },
  { 
    id: 'clean-10k', 
    rank: '10k+', 
    title: 'Conta Imortal 10k+',
    description: 'Conta imortal sem smurf pool (sob encomenda)',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 10000+ MMR', 'Sem smurf pool', 'Sob encomenda', 'Suporte incluído']
  },
  { 
    id: 'clean-11k', 
    rank: '11k+', 
    title: 'Conta Imortal 11k+',
    description: 'Conta imortal sem smurf pool (sob encomenda)',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 11000+ MMR', 'Sem smurf pool', 'Sob encomenda', 'Suporte incluído']
  },
  { 
    id: 'clean-12k', 
    rank: '12k+', 
    title: 'Conta Imortal 12k+',
    description: 'Conta imortal sem smurf pool (sob encomenda)',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 12000+ MMR', 'Sem smurf pool', 'Sob encomenda', 'Suporte incluído']
  },
  { 
    id: 'clean-14k', 
    rank: '14k+', 
    title: 'Conta Imortal 14k+',
    description: 'Conta imortal sem smurf pool (sob encomenda)',
    backgroundImage: 'https://i.imgur.com/rcQrYfz.png',
    features: ['Rank Imortal 14000+ MMR', 'Sem smurf pool', 'Sob encomenda', 'Suporte incluído'] 
  }
];

const contasProntasCalibrar: ContaData[] = [
  { 
    id: 'calibrar-ranked', 
    rank: 'Ranked liberada (pronta para calibrar + Dota Plus)', 
    title: 'Conta Ranked Liberada',
    description: 'Conta pronta para calibrar com Dota Plus incluído',
    backgroundImage: 'https://chaosboost.com/wp-content/uploads/webpcache/2025/03/dota-2-calibration-boost.webp',
icon: <img 
        src="https://i.imgur.com/xPfpkp7.png"                   alt="icon" 
        className="w-[30px] h-[35px] text-primary" />,  
    features: ['Ranked liberado', 'Dota Plus incluído', 'Pronta para calibrar', 'Suporte incluído']
  },
  { 
    id: 'calibrar-arauto', 
    rank: 'Rank Arauto', 
    title: 'Conta Rank Arauto',
    description: 'Conta calibrada no rank Arauto',
    backgroundImage: 'https://preview.redd.it/herald-badge-4k-ultra-hd-rtx-on-v0-fovcj5zus9ka1.jpg?auto=webp&s=bbff7017df980f3de89eac1012f4258f2f031705',
    features: ['Rank Arauto calibrado', 'Conta verificada', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'calibrar-guardiao', 
    rank: 'Rank Guardião', 
    title: 'Conta Rank Guardião',
    description: 'Conta calibrada no rank Guardião',
    backgroundImage: 'https://preview.redd.it/guardian-badge-4k-ultra-hd-rtx-on-v0-afwbaki14kka1.jpg?width=1080&crop=smart&auto=webp&s=1e65c809397782167893eb7caa59d79a30810340',
    features: ['Rank Guardião calibrado', 'Conta verificada', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'calibrar-cruzado', 
    rank: 'Rank Cruzado', 
    title: 'Conta Rank Cruzado',
    description: 'Conta calibrada no rank Cruzado',
    backgroundImage: 'https://preview.redd.it/crusader-medal-4k-ultra-hd-remaster-v0-ga2f8itdlqka1.jpg?width=1080&crop=smart&auto=webp&s=613a34ee229841d2092b624100ecd4c2648217cc',
    features: ['Rank Cruzado calibrado', 'Conta verificada', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'calibrar-arconte', 
    rank: 'Rank Arconte', 
    title: 'Conta Rank Arconte',
    description: 'Conta calibrada no rank Arconte',
    backgroundImage: 'https://preview.redd.it/archon-medal-4k-ultra-hd-rtx-on-v0-jd2q5k3sewla1.jpg?auto=webp&s=a01d1667c7c5a3dd410ffc457ee803a9e7ff8aad',
    features: ['Rank Arconte calibrado', 'Conta verificada', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'calibrar-lenda', 
    rank: 'Rank Lenda', 
    title: 'Conta Rank Lenda',
    description: 'Conta calibrada no rank Lenda',
    backgroundImage: 'https://preview.redd.it/legend-badge-4k-ultra-hd-rtx-on-v0-s5kjcvad0dga1.jpg?auto=webp&s=7f2a1dd3db549faaa49e26d81ad640a1f4e74cc5',
    features: ['Rank Lenda calibrado', 'Conta verificada', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'calibrar-ancient', 
    rank: 'Rank Ancient', 
    title: 'Conta Rank Ancient',
    description: 'Conta calibrada no rank Ancient',
    backgroundImage: 'https://external-preview.redd.it/i-animated-the-ancient-medal-v0-amR4cXEybnowOXRiMROyZWcVcy5ebrXOyuBGWQ6rNxOc0ZvBFGMN3CIX5L23.png?width=640&crop=smart&format=pjpg&auto=webp&s=266d8c0e217bc07e3d3a82ac72875ee2716e1a33',
    features: ['Rank Ancient calibrado', 'Conta verificada', 'Acesso imediato', 'Suporte incluído']
  },
  { 
    id: 'calibrar-divine', 
    rank: 'Rank Divine', 
    title: 'Conta Rank Divine',
    description: 'Conta calibrada no rank Divine',
    backgroundImage: 'https://preview.redd.it/the-problem-with-divine-rank-v0-r1vus3acx2vc1.png?width=256&format=png&auto=webp&s=6c95964baf7530396e6a03902a6afd113110add2', 
    features: ['Rank Divine calibrado', 'Conta verificada', 'Acesso imediato', 'Suporte incluído']
  }
];

const ContasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'imortal' | 'smurf-pool' | 'calibrar'>('calibrar');
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
    const element = document.querySelector('.contas-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContaPanels = (contas: ContaData[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contas.map((conta, index) => (
        <AnimatedElement 
          key={conta.id} 
          animation="fadeInUp" 
          delay={index * 0.1}
          className="flex flex-col"
        >
          <div 
            className="card flex-1 flex flex-col relative overflow-hidden group hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            style={{
              backgroundImage: conta.backgroundImage 
                ? `linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.85)), url(${conta.backgroundImage})`
                : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              {conta.icon ? (
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {conta.icon}
                </div>
              ) : (
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <MedalIcon rank={conta.rank} size={50} />
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-title text-lg text-text-bright leading-tight">{conta.title}</h3>
              </div>
            </div>
            
            <p className="text-text-dim mb-4 text-sm">{conta.description}</p>
            
            {conta.features && (
              <div className="mb-6 flex-1">
                <ul className="space-y-2">
                  {conta.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-text text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-auto">
              <div className="text-xl font-title text-text-bright mb-4">
                {getProductPrice(conta.id)?.price === 0 ? (
                  <span className="text-warning font-title">SOB ENCOMENDA</span>
                ) : (
                  `R$ ${getProductPrice(conta.id)?.price.toFixed(2) || '0.00'}`
                )}
              </div>
              {getProductPrice(conta.id)?.price === 0 ? (
                <a 
                  href="https://wa.me/554799301168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magic-btn w-full text-center block group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
                >
                  CONSULTAR
                </a>
              ) : (
                <Link 
                  to={`/checkout/${conta.id}`}
                  className="magic-btn w-full text-center block group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
                >
                  COMPRAR
                </Link>
              )}
            </div>
          </div>
        </AnimatedElement>
      ))}
    </div>
  );

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 contas-content">
          <SectionTitle 
            title="COMPRA DE CONTAS DOTA 2"
            subtitle="Compra de contas Dota 2 calibradas em alto MMR. Contas prontas para jogar com diferentes ranks disponíveis."
            center
          />
          
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <AnimatedElement animation="fadeInUp">
              <div className="flex justify-center mb-8">
                <div className="bg-background-light/90 backdrop-blur-sm p-1 rounded-lg border border-primary/30">
                  <button
                    onClick={() => setActiveTab('calibrar')}
                    className={`px-4 py-3 rounded-md font-title transition-all text-sm whitespace-nowrap ${
                      activeTab === 'calibrar'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    CONTAS CALIBRADAS
                  </button>
                  <button
                    onClick={() => setActiveTab('imortal')}
                    className={`px-4 py-3 rounded-md font-title transition-all text-sm whitespace-nowrap ${
                      activeTab === 'imortal'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    RANK IMORTAL
                  </button>
                  <button
                    onClick={() => setActiveTab('smurf-pool')}
                    className={`px-4 py-3 rounded-md font-title transition-all text-sm whitespace-nowrap ${
                      activeTab === 'smurf-pool'
                        ? 'bg-primary text-text-bright shadow-lg'
                        : 'text-text-dim hover:text-text-bright'
                    }`}
                  >
                    RANK IMORTAL (SMURF POOL)
                  </button>
                </div>
              </div>
            </AnimatedElement>

            {/* Tab Content */}
            {/* Pronta Para Calibrar Tab */}
            {activeTab === 'calibrar' && (
              <AnimatedElement animation="fadeInUp">
                {/* Aviso sobre saldo - Movido para cima */}
                <div className="bg-error/20 border border-error/40 rounded-lg p-4 max-w-4xl mx-auto mb-6">
                  <h4 className="font-title text-error text-center mb-3">⚠️ AVISO IMPORTANTE</h4>
                  <p className="text-error text-center text-sm font-medium">
                    <strong>NÃO ADICIONE SALDO À CONTA ANTES DE 30 DIAS!</strong><br/>
                    Caso seja feito, a conta será banida automaticamente pela Valve e não poderemos trocar a conta.
                  </p>
                </div>
                
                {/* Valve ToS Warning */}
                <div className="bg-error/20 border border-error/40 rounded-lg p-4 max-w-4xl mx-auto mb-8">
                  <p className="text-error text-center text-sm font-medium">
                    Ao comprar uma conta, você está ciente de que a venda de contas vai contra os Termos de Serviço da Valve e, portanto, assume total responsabilidade por possíveis punições, incluindo banimento permanente da conta.
                  </p>
                </div>
                
                {renderContaPanels(contasProntasCalibrar)}
              </AnimatedElement>
            )}

            {/* Rank Imortal Tab */}
            {activeTab === 'imortal' && (
              <AnimatedElement animation="fadeInUp">
                {/* Aviso sobre saldo - Movido para cima */}
                <div className="bg-error/20 border border-error/40 rounded-lg p-4 max-w-4xl mx-auto mb-6">
                  <h4 className="font-title text-error text-center mb-3">⚠️ AVISO IMPORTANTE</h4>
                  <p className="text-error text-center text-sm font-medium">
                    <strong>NÃO ADICIONE SALDO À CONTA ANTES DE 30 DIAS!</strong><br/>
                    Caso seja feito, a conta será banida automaticamente pela Valve e não poderemos trocar a conta.
                  </p>
                </div>
                
                {/* Valve ToS Warning */}
                <div className="bg-error/20 border border-error/40 rounded-lg p-4 max-w-4xl mx-auto mb-6">
                  <p className="text-error text-center text-sm font-medium">
                     Ao comprar uma conta, você está ciente de que a venda de contas vai contra os Termos de Serviço da Valve e, portanto, assume total responsabilidade por possíveis punições, incluindo banimento permanente da conta.
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="bg-success/20 border border-success/40 rounded-lg p-4 max-w-4xl mx-auto">
                    <p className="text-success font-title text-center">
                      ✅ As contas abaixo NÃO possuem Smurf Pool
                    </p>
                  </div>
                </div>
                {renderContaPanels(contasSemSmurfPool)}
              </AnimatedElement>
            )}

            {/* Rank Imortal (Smurf Pool) Tab */}
            {activeTab === 'smurf-pool' && (
              <AnimatedElement animation="fadeInUp">
                {/* Aviso sobre saldo - Movido para cima */}
                <div className="bg-error/20 border border-error/40 rounded-lg p-4 max-w-4xl mx-auto mb-6">
                  <h4 className="font-title text-error text-center mb-3">⚠️ AVISO IMPORTANTE</h4>
                  <p className="text-error text-center text-sm font-medium">
                    <strong>NÃO ADICIONE SALDO À CONTA ANTES DE 30 DIAS!</strong><br/>
                    Caso seja feito, a conta será banida automaticamente pela Valve e não poderemos trocar a conta.
                  </p>
                </div>
                
                {/* Valve ToS Warning */}
                <div className="bg-error/20 border border-error/40 rounded-lg p-4 max-w-4xl mx-auto mb-6">
                  <p className="text-error text-center text-sm font-medium">
                     Ao comprar uma conta, você está ciente de que a venda de contas vai contra os Termos de Serviço da Valve e, portanto, assume total responsabilidade por possíveis punições, incluindo banimento permanente da conta.
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="bg-warning/20 border border-warning/40 rounded-lg p-4 max-w-4xl mx-auto">
                    <p className="text-warning font-title text-center mb-3">
                      ⚠️ As contas abaixo possuem Smurf Pool
                    </p>
                    <div className="bg-background/60 p-3 rounded-lg">
                      <p className="text-text text-sm text-center">
                        <strong>O que é Smurf Pool?</strong> É quando uma conta não tem muitos jogos e o sistema 
                        a coloca para jogar contra outras contas similares (smurfs), resultando em filas mais 
                        longas para encontrar partidas.
                      </p>
                    </div>
                  </div>
                </div>
                {renderContaPanels(contasSmurfPool)}
              </AnimatedElement>
            )}

            {/* Informações Importantes - Centralized */}
            <AnimatedElement animation="fadeInUp" delay={0.2} className="mt-12">
              <div className="bg-background-light/90 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
                <h4 className="font-title text-lg text-text-bright mb-6 text-center">Informações Importantes</h4>
                
                {/* Centered content layout */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Sobre as Contas */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Sobre as Contas:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Todas as contas são legítimas</li>
                        <li>• Calibradas através de gameplay normal</li>
                        <li>• Sem uso de cheats ou exploits</li>
                        <li>• Histórico limpo de comportamento</li>
                        <li>• Acesso completo e permanente</li>
                      </ul>
                    </div>
                    
                    {/* Right Column - Garantias */}
                    <div className="text-center">
                      <h5 className="font-title text-text-bright mb-3">Garantias:</h5>
                      <ul className="space-y-2 text-sm text-text-dim">
                        <li>• Suporte técnico completo</li>
                        <li>• Garantia contra problemas técnicos</li>
                        <li>• Reposição em caso de problemas</li>
                        <li>• Orientações para manutenção do MMR</li>
                        <li>• Atendimento via WhatsApp</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/20 rounded-lg">
                  <p className="text-text text-center text-sm">
                    <strong>Importante:</strong> Todas as contas seguem os termos de serviço da Valve. 
                    Recomendamos sempre jogar de forma fair play para manter o status da conta.
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

export default ContasPage;