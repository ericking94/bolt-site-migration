import React, { useState } from 'react';

interface SingleMMRSliderProps {
  onMMRChange: (mmr: number) => void;
}

// Rank images for each rank
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

const getRankInfo = (mmr: number) => {
  if (mmr <= 769) return { name: 'Herald', tier: 'herald' };
  if (mmr <= 1539) return { name: 'Guardian', tier: 'guardian' };
  if (mmr <= 2309) return { name: 'Crusader', tier: 'crusader' };
  if (mmr <= 3079) return { name: 'Archon', tier: 'archon' };
  if (mmr <= 3849) return { name: 'Legend', tier: 'legend' };
  if (mmr <= 4619) return { name: 'Ancient', tier: 'ancient' };
  if (mmr <= 5619) return { name: 'Divine', tier: 'divine' };
  return { name: 'Immortal', tier: 'immortal' };
};

const SingleMMRSlider: React.FC<SingleMMRSliderProps> = ({ onMMRChange }) => {
  const [mmr, setMMR] = useState(3000);
  const [mmrInput, setMMRInput] = useState('3000');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMMR = parseInt(e.target.value);
    setMMR(newMMR);
    setMMRInput(newMMR.toString());
    onMMRChange(newMMR);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMMRInput(value);
  };

  const handleInputBlur = () => {
    let numValue = parseInt(mmrInput);
    
    // If empty or invalid, reset to current value
    if (isNaN(numValue) || mmrInput === '') {
      setMMRInput(mmr.toString());
      return;
    }
    
    // Clamp between 1 and 7000
    numValue = Math.max(1, Math.min(7000, numValue));
    setMMR(numValue);
    setMMRInput(numValue.toString());
    onMMRChange(numValue);
  };

  const rankInfo = getRankInfo(mmr);

  return (
    <div className="card">
      <h3 className="font-title text-lg text-text-bright mb-4 text-center">Seu MMR</h3>
      
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
          <img 
            src={rankImages[rankInfo.tier as keyof typeof rankImages]} 
            alt={rankInfo.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-primary text-xs text-center">${rankInfo.name}</div>`;
              }
            }}
          />
        </div>
        <div className="text-primary font-title text-sm">{rankInfo.name}</div>
        <div className="text-text-dim text-xs">Rank aproximado</div>
      </div>

      <div className="mb-4">
        <label className="block font-title text-text-bright mb-2 text-sm">MMR</label>
        <input
          type="range"
          min="1"
          max="7000"
          step="1"
          value={mmr}
          onChange={handleSliderChange}
          className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-text-dim text-xs mt-1">
          <span>1</span>
          <span>7000</span>
        </div>
      </div>

      <div className="text-center">
        <input
          type="number"
          min="1"
          max="7000"
          step="1"
          value={mmrInput}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="text-lg font-title text-primary bg-transparent border-b border-primary/30 focus:border-primary outline-none text-center w-20"
        />
        <div className="text-text-dim text-xs mt-1">MMR</div>
      </div>
    </div>
  );
};

export default SingleMMRSlider;