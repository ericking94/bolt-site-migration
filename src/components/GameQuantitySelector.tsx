import React, { useState } from 'react';
import { Users } from 'lucide-react';

interface GameQuantitySelectorProps {
  onQuantityChange: (quantity: number, price: number) => void;
  productType?: 'partida-avulsa' | 'duo-didatico-avulso';
}

const GameQuantitySelector: React.FC<GameQuantitySelectorProps> = ({ 
  onQuantityChange, 
  productType = 'partida-avulsa' 
}) => {
  const [quantity, setQuantity] = useState(1);

  const calculatePrice = (qty: number) => {
    if (productType === 'duo-didatico-avulso') {
      return qty * 25; // R$ 25 per duo session
    }
    return qty * 12; // R$ 12 per game for partida-avulsa
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    const price = calculatePrice(newQuantity);
    onQuantityChange(newQuantity, price);
  };

  const getLabel = () => {
    return productType === 'duo-didatico-avulso' ? 'Quantidade de Sessões' : 'Quantidade de Jogos';
  };

  return (
    <div>
      <label htmlFor="gameQuantity" className="block font-title text-text-bright mb-2">
        {getLabel()}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Users size={18} className="text-text-dim" />
        </div>
        <select
          id="gameQuantity"
          name="gameQuantity"
          value={quantity}
          onChange={handleChange}
          className="w-full bg-background/80 pl-10 pr-4 py-3 rounded-md border border-primary/30 
            focus:border-primary focus:outline-none transition-colors text-text"
        >
          {(productType === 'duo-didatico-avulso' ? [1, 2, 3] : [1, 2, 3, 4, 5, 6, 7, 8]).map(num => (
            <option key={num} value={num}>
              {num} {productType === 'duo-didatico-avulso' 
                ? (num === 1 ? 'sessão' : 'sessões')
                : (num === 1 ? 'jogo' : 'jogos')
              }
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GameQuantitySelector;