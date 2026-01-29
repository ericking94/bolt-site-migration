import React, { useState } from 'react';
import { ChevronDown, Sword, Target, Shield, Users, Heart } from 'lucide-react';

interface RoleOption {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface RoleSelectorProps {
  onRoleChange: (role: string) => void;
}

const roleOptions: RoleOption[] = [
  { id: 'hard-carry', name: 'Hard Carry', icon: <Sword size={18} className="text-primary" /> },
  { id: 'mid', name: 'Mid', icon: <Target size={18} className="text-primary" /> },
  { id: 'offlane', name: 'Offlaner', icon: <Shield size={18} className="text-primary" /> },
  { id: 'support-4', name: 'Suporte 4', icon: <Users size={18} className="text-primary" /> },
  { id: 'support-5', name: 'Suporte 5', icon: <Heart size={18} className="text-primary" /> },
];

const RoleSelector: React.FC<RoleSelectorProps> = ({ onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState<RoleOption>(roleOptions[0]); // Default to Hard Carry
  const [isOpen, setIsOpen] = useState(false);

  const handleRoleSelect = (role: RoleOption) => {
    setSelectedRole(role);
    setIsOpen(false);
    onRoleChange(role.id);
  };

  return (
    <div>
      <label className="block font-title text-text-bright mb-2">
        Função Preferida
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-background/80 p-3 rounded-md border border-primary/30 
            focus:border-primary focus:outline-none transition-colors flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {selectedRole.icon}
            <span className="text-text">{selectedRole.name}</span>
          </div>
          <ChevronDown 
            size={18} 
            className={`text-text-dim transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-background-light/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg shadow-primary/20 py-2 z-10">
            {roleOptions.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => handleRoleSelect(role)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-primary/10 transition-colors text-left"
              >
                {role.icon}
                <span className="text-text">{role.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleSelector;