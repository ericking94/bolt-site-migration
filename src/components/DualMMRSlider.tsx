import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DualMMRSliderProps {
  onMMRChange: (currentMMR: number, targetMMR: number, price: number) => void;
}

// Rank images for each rank
const rankImages = {
  herald: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-herald-1.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-herald-2.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-herald-3.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-herald-4.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-herald-5.png',
  ],
  guardian: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-guardian-1.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-guardian-2.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-guardian-3.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-guardian-4.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-guardian-5.png',
  ],
  crusader: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-crusader-1.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-crusader-2.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-crusader-3.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-crusader-4.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-crusader-5.png',
  ],
  archon: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-archon-1.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-archon-2.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-archon-3.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-archon-4.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-archon-5.png',
  ],
  legend: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-legend-1.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-legend-2.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-legend-3.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-legend-4.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-legend-5.png',
  ],
  ancient: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-ancient-1.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-ancient-2.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-ancient-3.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-ancient-4.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-ancient-5.png',
  ],
  divine: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-divine-1.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-divine-2.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-divine-3.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-divine-4.png',
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-divine-5.png',
  ],
  immortal: [
    'https://hawk.live/images/dota-2-seasonal-ranking-medals/seasonal-rank-immortal.png',
  ],
};

// Mapeamento de MMR para ranks com imagens responsivas
const getRankInfo = (mmr: number) => {
  // Herald
  if (mmr <= 153) return { name: 'Herald 1', tier: 'herald', index: 0 };
  if (mmr <= 307) return { name: 'Herald 2', tier: 'herald', index: 1 };
  if (mmr <= 461) return { name: 'Herald 3', tier: 'herald', index: 2 };
  if (mmr <= 615) return { name: 'Herald 4', tier: 'herald', index: 3 };
  if (mmr <= 769) return { name: 'Herald 5', tier: 'herald', index: 4 };
  
  // Guardian
  if (mmr <= 923) return { name: 'Guardian 1', tier: 'guardian', index: 0 };
  if (mmr <= 1077) return { name: 'Guardian 2', tier: 'guardian', index: 1 };
  if (mmr <= 1231) return { name: 'Guardian 3', tier: 'guardian', index: 2 };
  if (mmr <= 1385) return { name: 'Guardian 4', tier: 'guardian', index: 3 };
  if (mmr <= 1539) return { name: 'Guardian 5', tier: 'guardian', index: 4 };
  
  // Crusader
  if (mmr <= 1693) return { name: 'Crusader 1', tier: 'crusader', index: 0 };
  if (mmr <= 1847) return { name: 'Crusader 2', tier: 'crusader', index: 1 };
  if (mmr <= 2001) return { name: 'Crusader 3', tier: 'crusader', index: 2 };
  if (mmr <= 2155) return { name: 'Crusader 4', tier: 'crusader', index: 3 };
  if (mmr <= 2309) return { name: 'Crusader 5', tier: 'crusader', index: 4 };
  
  // Archon
  if (mmr <= 2463) return { name: 'Archon 1', tier: 'archon', index: 0 };
  if (mmr <= 2617) return { name: 'Archon 2', tier: 'archon', index: 1 };
  if (mmr <= 2771) return { name: 'Archon 3', tier: 'archon', index: 2 };
  if (mmr <= 2925) return { name: 'Archon 4', tier: 'archon', index: 3 };
  if (mmr <= 3079) return { name: 'Archon 5', tier: 'archon', index: 4 };
  
  // Legend
  if (mmr <= 3233) return { name: 'Legend 1', tier: 'legend', index: 0 };
  if (mmr <= 3387) return { name: 'Legend 2', tier: 'legend', index: 1 };
  if (mmr <= 3541) return { name: 'Legend 3', tier: 'legend', index: 2 };
  if (mmr <= 3695) return { name: 'Legend 4', tier: 'legend', index: 3 };
  if (mmr <= 3849) return { name: 'Legend 5', tier: 'legend', index: 4 };
  
  // Ancient
  if (mmr <= 4003) return { name: 'Ancient 1', tier: 'ancient', index: 0 };
  if (mmr <= 4157) return { name: 'Ancient 2', tier: 'ancient', index: 1 };
  if (mmr <= 4311) return { name: 'Ancient 3', tier: 'ancient', index: 2 };
  if (mmr <= 4465) return { name: 'Ancient 4', tier: 'ancient', index: 3 };
  if (mmr <= 4619) return { name: 'Ancient 5', tier: 'ancient', index: 4 };
  
  // Divine
  if (mmr <= 4819) return { name: 'Divine 1', tier: 'divine', index: 0 };
  if (mmr <= 5019) return { name: 'Divine 2', tier: 'divine', index: 1 };
  if (mmr <= 5219) return { name: 'Divine 3', tier: 'divine', index: 2 };
  if (mmr <= 5419) return { name: 'Divine 4', tier: 'divine', index: 3 };
  if (mmr <= 5619) return { name: 'Divine 5', tier: 'divine', index: 4 };
  
  // Immortal
  return { name: 'Immortal', tier: 'immortal', index: 0 };
};

// Medal selector options
const medalOptions = [
  { name: 'Herald 1', mmr: 1, tier: 'herald', index: 0 },
  { name: 'Herald 2', mmr: 154, tier: 'herald', index: 1 },
  { name: 'Herald 3', mmr: 308, tier: 'herald', index: 2 },
  { name: 'Herald 4', mmr: 462, tier: 'herald', index: 3 },
  { name: 'Herald 5', mmr: 616, tier: 'herald', index: 4 },
  { name: 'Guardian 1', mmr: 770, tier: 'guardian', index: 0 },
  { name: 'Guardian 2', mmr: 924, tier: 'guardian', index: 1 },
  { name: 'Guardian 3', mmr: 1078, tier: 'guardian', index: 2 },
  { name: 'Guardian 4', mmr: 1232, tier: 'guardian', index: 3 },
  { name: 'Guardian 5', mmr: 1386, tier: 'guardian', index: 4 },
  { name: 'Crusader 1', mmr: 1540, tier: 'crusader', index: 0 },
  { name: 'Crusader 2', mmr: 1694, tier: 'crusader', index: 1 },
  { name: 'Crusader 3', mmr: 1848, tier: 'crusader', index: 2 },
  { name: 'Crusader 4', mmr: 2002, tier: 'crusader', index: 3 },
  { name: 'Crusader 5', mmr: 2156, tier: 'crusader', index: 4 },
  { name: 'Archon 1', mmr: 2310, tier: 'archon', index: 0 },
  { name: 'Archon 2', mmr: 2464, tier: 'archon', index: 1 },
  { name: 'Archon 3', mmr: 2618, tier: 'archon', index: 2 },
  { name: 'Archon 4', mmr: 2772, tier: 'archon', index: 3 },
  { name: 'Archon 5', mmr: 2926, tier: 'archon', index: 4 },
  { name: 'Legend 1', mmr: 3080, tier: 'legend', index: 0 },
  { name: 'Legend 2', mmr: 3234, tier: 'legend', index: 1 },
  { name: 'Legend 3', mmr: 3388, tier: 'legend', index: 2 },
  { name: 'Legend 4', mmr: 3542, tier: 'legend', index: 3 },
  { name: 'Legend 5', mmr: 3696, tier: 'legend', index: 4 },
  { name: 'Ancient 1', mmr: 3850, tier: 'ancient', index: 0 },
  { name: 'Ancient 2', mmr: 4004, tier: 'ancient', index: 1 },
  { name: 'Ancient 3', mmr: 4158, tier: 'ancient', index: 2 },
  { name: 'Ancient 4', mmr: 4312, tier: 'ancient', index: 3 },
  { name: 'Ancient 5', mmr: 4466, tier: 'ancient', index: 4 },
  { name: 'Divine 1', mmr: 4620, tier: 'divine', index: 0 },
  { name: 'Divine 2', mmr: 4820, tier: 'divine', index: 1 },
  { name: 'Divine 3', mmr: 5020, tier: 'divine', index: 2 },
  { name: 'Divine 4', mmr: 5220, tier: 'divine', index: 3 },
  { name: 'Divine 5', mmr: 5420, tier: 'divine', index: 4 },
  { name: 'Immortal', mmr: 5620, tier: 'immortal', index: 0 },
];

interface MedalSelectorProps {
  mmr: number;
  onMedalSelect: (mmr: number) => void;
  label: string;
  isTarget?: boolean;
  minMMR?: number;
}

const MedalSelector: React.FC<MedalSelectorProps> = ({ mmr, onMedalSelect, label, isTarget = false, minMMR = 1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rankInfo = getRankInfo(mmr);
  const currentImage = rankImages[rankInfo.tier as keyof typeof rankImages][rankInfo.index];

  const availableOptions = isTarget 
    ? medalOptions.filter(option => option.mmr > minMMR)
    : medalOptions.filter(option => option.mmr < 7000);

  const handleMedalSelect = (selectedMMR: number) => {
    onMedalSelect(selectedMMR);
    setIsOpen(false);
  };

  return (
    <div className="text-center mb-6">
      <div className="text-center mb-2">
        <span className="text-primary font-title text-lg">{rankInfo.name}</span>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-24 h-24 mx-auto mb-2 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 cursor-pointer border-2 border-primary/30 hover:border-primary/60"
        >
          <img 
            src={currentImage} 
            alt={rankInfo.name}
            className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-110' : 'opacity-80 scale-100'
            }`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `<span class="text-primary font-title text-sm text-center px-2">${rankInfo.name}</span>`;
              }
            }}
          />
          <ChevronDown 
            size={16} 
            className={`absolute bottom-1 right-1 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background-light/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg shadow-primary/20 py-2 z-50 max-h-60 overflow-y-auto min-w-max">
            {availableOptions.map((option) => (
              <button
                key={`${option.tier}-${option.index}`}
                type="button"
                onClick={() => handleMedalSelect(option.mmr)}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-primary/10 transition-colors text-left whitespace-nowrap"
              >
                <img 
                  src={rankImages[option.tier as keyof typeof rankImages][option.index]} 
                  alt={option.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-text text-sm">{option.name}</span>
                <span className="text-text-dim text-xs ml-auto">{option.mmr} MMR</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="text-text-dim text-sm">{label}</p>
    </div>
  );
};

const RankCircle: React.FC<{ mmr: number; label: string }> = ({ mmr, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const rankInfo = getRankInfo(mmr);
  const currentImage = rankImages[rankInfo.tier as keyof typeof rankImages][rankInfo.index];

  return (
    <div className="text-center mb-6">
      <div className="text-center mb-2">
        <span className="text-primary font-title text-lg">{rankInfo.name}</span>
      </div>
      <div 
        className="w-24 h-24 mx-auto mb-2 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={currentImage} 
          alt={rankInfo.name}
          className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-110' : 'opacity-80 scale-100'
          }`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `<span class="text-primary font-title text-sm text-center px-2">${rankInfo.name}</span>`;
            }
          }}
        />
      </div>
      <p className="text-text-dim text-sm">{label}</p>
    </div>
  );
};

const DualMMRSlider: React.FC<DualMMRSliderProps> = ({ onMMRChange }) => {
  const [currentMMR, setCurrentMMR] = useState(1000);
  const [targetMMR, setTargetMMR] = useState(1500);
  const [currentMMRInput, setCurrentMMRInput] = useState('1000');
  const [targetMMRInput, setTargetMMRInput] = useState('1500');

  const calculatePrice = (current: number, target: number) => {
    if (target <= current) return 0;
    
    const mmrDifference = target - current;
    let totalPrice = 0;
    let remainingMMR = mmrDifference;

    // De 1 até 2309 (Herald 1 até Crusader 5) → R$10 por cada 25 MMR
    if (remainingMMR > 0) {
      const mmrInRange = Math.min(remainingMMR, Math.max(0, 2309 - current));
      const increments = Math.ceil(mmrInRange / 25);
      totalPrice += increments * 10;
      remainingMMR -= mmrInRange;
    }

    // De 2310 até 4619 (Archon 1 até Ancient 5) → R$12 por cada 25 MMR
    if (remainingMMR > 0) {
      const mmrInRange = Math.min(remainingMMR, Math.max(0, 4619 - Math.max(2310, current)));
      const increments = Math.ceil(mmrInRange / 25);
      totalPrice += increments * 12;
      remainingMMR -= mmrInRange;
    }

    // De 4620 até 5619 → R$15 por cada 25 MMR
    if (remainingMMR > 0) {
      const mmrInRange = Math.min(remainingMMR, Math.max(0, 5619 - Math.max(4620, current)));
      const increments = Math.ceil(mmrInRange / 25);
      totalPrice += increments * 15;
      remainingMMR -= mmrInRange;
    }

    // De 5620 até 6500 → R$20 por cada 25 MMR
    if (remainingMMR > 0) {
      const mmrInRange = Math.min(remainingMMR, Math.max(0, 6500 - Math.max(5620, current)));
      const increments = Math.ceil(mmrInRange / 25);
      totalPrice += increments * 20;
      remainingMMR -= mmrInRange;
    }

    // De 6501 até 7000 → R$25 por cada 25 MMR
    if (remainingMMR > 0) {
      const mmrInRange = Math.min(remainingMMR, Math.max(0, 7000 - Math.max(6501, current)));
      const increments = Math.ceil(mmrInRange / 25);
      totalPrice += increments * 25;
    }

    return totalPrice;
  };

  const handleCurrentMMRSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMMR = parseInt(e.target.value);
    setCurrentMMR(newMMR);
    setCurrentMMRInput(newMMR.toString());
    if (newMMR >= targetMMR) {
      setTargetMMR(newMMR + 1);
      setTargetMMRInput((newMMR + 1).toString());
      const price = calculatePrice(newMMR, newMMR + 1);
      onMMRChange(newMMR, newMMR + 1, price);
    } else {
      const price = calculatePrice(newMMR, targetMMR);
      onMMRChange(newMMR, targetMMR, price);
    }
  };

  const handleCurrentMedalSelect = (newMMR: number) => {
    setCurrentMMR(newMMR);
    setCurrentMMRInput(newMMR.toString());
    if (newMMR >= targetMMR) {
      const newTarget = Math.min(7000, newMMR + 100);
      setTargetMMR(newTarget);
      setTargetMMRInput(newTarget.toString());
      const price = calculatePrice(newMMR, newTarget);
      onMMRChange(newMMR, newTarget, price);
    } else {
      const price = calculatePrice(newMMR, targetMMR);
      onMMRChange(newMMR, targetMMR, price);
    }
  };

  const handleTargetMedalSelect = (newMMR: number) => {
    if (newMMR > currentMMR) {
      setTargetMMR(newMMR);
      setTargetMMRInput(newMMR.toString());
      const price = calculatePrice(currentMMR, newMMR);
      onMMRChange(currentMMR, newMMR, price);
    }
  };

  const handleTargetMMRSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMMR = parseInt(e.target.value);
    if (newMMR > currentMMR) {
      setTargetMMR(newMMR);
      setTargetMMRInput(newMMR.toString());
      const price = calculatePrice(currentMMR, newMMR);
      onMMRChange(currentMMR, newMMR, price);
    }
  };

  const handleCurrentMMRInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentMMRInput(value);
  };

  const handleCurrentMMRInputBlur = () => {
    let numValue = parseInt(currentMMRInput);
    
    // If empty or invalid, reset to current value
    if (isNaN(numValue) || currentMMRInput === '') {
      setCurrentMMRInput(currentMMR.toString());
      return;
    }
    
    // Clamp between 1 and 6999 (MMR atual não pode passar de 6999)
    numValue = Math.max(1, Math.min(6999, numValue));
    setCurrentMMR(numValue);
    setCurrentMMRInput(numValue.toString());
    
    // Adjust target MMR if necessary
    if (numValue >= targetMMR) {
      const newTarget = Math.min(7000, numValue + 1);
      setTargetMMR(newTarget);
      setTargetMMRInput(newTarget.toString());
      const price = calculatePrice(numValue, newTarget);
      onMMRChange(numValue, newTarget, price);
    } else {
      const price = calculatePrice(numValue, targetMMR);
      onMMRChange(numValue, targetMMR, price);
    }
  };

  const handleTargetMMRInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTargetMMRInput(value);
  };

  const handleTargetMMRInputBlur = () => {
    let numValue = parseInt(targetMMRInput);
    
    // If empty or invalid, reset to current value
    if (isNaN(numValue) || targetMMRInput === '') {
      setTargetMMRInput(targetMMR.toString());
      return;
    }
    
    // Clamp between currentMMR + 1 and 7000 (MMR desejado pode ir até 7000)
    numValue = Math.max(currentMMR + 1, Math.min(7000, numValue));
    setTargetMMR(numValue);
    setTargetMMRInput(numValue.toString());
    
    const price = calculatePrice(currentMMR, numValue);
    onMMRChange(currentMMR, numValue, price);
  };

  const price = calculatePrice(currentMMR, targetMMR);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Current MMR Slider */}
      <div className="card">
        <h3 className="font-title text-xl text-text-bright mb-6 text-center">MMR Atual</h3>
        
        <MedalSelector 
          mmr={currentMMR} 
          onMedalSelect={handleCurrentMedalSelect}
          label="Clique para selecionar medalha"
        />

        <div className="mb-6">
          <label className="block font-title text-text-bright mb-2">MMR Atual</label>
          <input
            type="range"
            min="1"
            max="6999"
            step="1"
            value={currentMMR}
            onChange={handleCurrentMMRSliderChange}
            className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-text-dim text-sm mt-2">
            <span>1</span>
            <span>6999</span>
          </div>
        </div>

        <div className="text-center mb-4">
          <input
            type="number"
            min="1"
            max="6999"
            step="1"
            value={currentMMRInput}
            onChange={handleCurrentMMRInputChange}
            onBlur={handleCurrentMMRInputBlur}
            className="text-3xl font-title text-primary mb-2 bg-transparent border-b border-primary/30 focus:border-primary outline-none text-center w-32"
          />
          <div className="text-text-dim">MMR atual</div>
        </div>
      </div>

      {/* Target MMR Slider */}
      <div className="card">
        <h3 className="font-title text-xl text-text-bright mb-6 text-center">MMR Desejado</h3>
        
        <MedalSelector 
          mmr={targetMMR} 
          onMedalSelect={handleTargetMedalSelect}
          label="Clique para selecionar medalha"
          isTarget={true}
          minMMR={currentMMR}
        />

        <div className="mb-6">
          <label className="block font-title text-text-bright mb-2">MMR Desejado</label>
          <input
            type="range"
            min={currentMMR + 1}
            max="7000"
            step="1"
            value={targetMMR}
            onChange={handleTargetMMRSliderChange}
            className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-text-dim text-sm mt-2">
            <span>{currentMMR + 1}</span>
            <span>7000</span>
          </div>
        </div>

        <div className="text-center mb-4">
          <input
            type="number"
            min={currentMMR + 1}
            max="7000"
            step="1"
            value={targetMMRInput}
            onChange={handleTargetMMRInputChange}
            onBlur={handleTargetMMRInputBlur}
            className="text-3xl font-title text-primary mb-2 bg-transparent border-b border-primary/30 focus:border-primary outline-none text-center w-32"
          />
          <div className="text-text-dim">MMR desejado</div>
        </div>
      </div>

      {/* Price Display */}
      <div className="lg:col-span-2">
        <div className="card text-center">
          <div className="text-2xl font-title text-text-bright mb-2">
            R$ {price.toFixed(2)}
          </div>
          <div className="text-text-dim mb-4">Preço total do boost ({targetMMR - currentMMR} MMR)</div>
          
          {/* Price Breakdown */}
          <div className="bg-background/80 p-4 rounded-lg">
            <h4 className="font-title text-text-bright mb-3">Tabela de Preços:</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
              <div className="text-center">
                <span className="text-text-dim block">1 - 2309 MMR</span>
                <span className="text-text">R$ 10/25 MMR</span>
              </div>
              <div className="text-center">
                <span className="text-text-dim block">2310 - 4619 MMR</span>
                <span className="text-text">R$ 12/25 MMR</span>
              </div>
              <div className="text-center">
                <span className="text-text-dim block">4620 - 5619 MMR</span>
                <span className="text-text">R$ 15/25 MMR</span>
              </div>
              <div className="text-center">
                <span className="text-text-dim block">5620 - 6500 MMR</span>
                <span className="text-text">R$ 20/25 MMR</span>
              </div>
              <div className="text-center">
                <span className="text-text-dim block">6501 - 7000 MMR</span>
                <span className="text-text">R$ 25/25 MMR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualMMRSlider;