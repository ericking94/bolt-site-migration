import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface BehaviorOption {
  id: string;
  name: string;
  color: string;
  description: string;
}

interface BehaviorSelectorProps {
  onBehaviorChange: (behavior: string) => void;
}

const behaviorOptions: BehaviorOption[] = [
  { 
    id: 'very-low', 
    name: 'Muito Baixo (0-3000)', 
    color: 'text-red-500',
    description: 'Behavior score crítico'
  },
  { 
    id: 'low', 
    name: 'Baixo (3001-6000)', 
    color: 'text-orange-500',
    description: 'Behavior score baixo'
  },
  { 
    id: 'normal', 
    name: 'Normal (6001-8000)', 
    color: 'text-yellow-500',
    description: 'Behavior score médio'
  },
  { 
    id: 'good', 
    name: 'Bom (8001-9500)', 
    color: 'text-green-500',
    description: 'Behavior score bom'
  },
  { 
    id: 'excellent', 
    name: 'Excelente (9501-10000)', 
    color: 'text-blue-500',
    description: 'Behavior score excelente'
  },
];

const BehaviorSelector: React.FC<BehaviorSelectorProps> = ({ onBehaviorChange }) => {
  const [selectedBehavior, setSelectedBehavior] = useState<BehaviorOption>(behaviorOptions[1]); // Default to Low
  const [isOpen, setIsOpen] = useState(false);

  const handleBehaviorSelect = (behavior: BehaviorOption) => {
    setSelectedBehavior(behavior);
    setIsOpen(false);
    onBehaviorChange(behavior.id);
  };

  return (
    <div>
      <label className="block font-title text-text-bright mb-2">
        Behavior Score Atual
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-background/80 p-3 rounded-md border border-primary/30 
            focus:border-primary focus:outline-none transition-colors flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${selectedBehavior.color.replace('text-', 'bg-')}`}></div>
            <div className="text-left">
              <div className={`text-sm ${selectedBehavior.color} font-title`}>{selectedBehavior.name}</div>
              <div className="text-xs text-text-dim">{selectedBehavior.description}</div>
            </div>
          </div>
          <ChevronDown 
            size={18} 
            className={`text-text-dim transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-background-light/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg shadow-primary/20 py-2 z-10 max-h-60 overflow-y-auto">
            {behaviorOptions.map((behavior) => (
              <button
                key={behavior.id}
                type="button"
                onClick={() => handleBehaviorSelect(behavior)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-primary/10 transition-colors text-left"
              >
                <div className={`w-3 h-3 rounded-full ${behavior.color.replace('text-', 'bg-')}`}></div>
                <div>
                  <div className={`text-sm ${behavior.color} font-title`}>{behavior.name}</div>
                  <div className="text-xs text-text-dim">{behavior.description}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BehaviorSelector;