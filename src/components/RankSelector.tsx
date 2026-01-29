import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface RankOption {
  id: string;
  name: string;
  image: string;
}

interface RankSelectorProps {
  onRankChange: (rank: string) => void;
}

const rankOptions: RankOption[] = [
  { id: 'herald', name: 'Herald', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-herald-1.png' },
  { id: 'guardian', name: 'Guardian', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-guardian-1.png' },
  { id: 'crusader', name: 'Crusader', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-crusader-1.png' },
  { id: 'archon', name: 'Archon', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-archon-1.png' },
  { id: 'legend', name: 'Legend', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-legend-1.png' },
  { id: 'ancient', name: 'Ancient', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-ancient-1.png' },
  { id: 'divine', name: 'Divine', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-divine-1.png' },
  { id: 'immortal', name: 'Immortal', image: 'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-immortal.png' },
];

const RankSelector: React.FC<RankSelectorProps> = ({ onRankChange }) => {
  const [selectedRank, setSelectedRank] = useState<RankOption>(rankOptions[3]); // Default to Archon
  const [isOpen, setIsOpen] = useState(false);

  const handleRankSelect = (rank: RankOption) => {
    setSelectedRank(rank);
    setIsOpen(false);
    onRankChange(rank.id);
  };

  return (
    <div>
      <label className="block font-title text-text-bright mb-2">
        Seu Rank Atual
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-background/80 p-3 rounded-md border border-primary/30 
            focus:border-primary focus:outline-none transition-colors flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <img 
              src={selectedRank.image} 
              alt={selectedRank.name}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <span className="text-text">{selectedRank.name}</span>
          </div>
          <ChevronDown 
            size={18} 
            className={`text-text-dim transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-background-light/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg shadow-primary/20 py-2 z-10 max-h-60 overflow-y-auto">
            {rankOptions.map((rank) => (
              <button
                key={rank.id}
                type="button"
                onClick={() => handleRankSelect(rank)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-primary/10 transition-colors text-left"
              >
                <img 
                  src={rank.image} 
                  alt={rank.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-text">{rank.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RankSelector;