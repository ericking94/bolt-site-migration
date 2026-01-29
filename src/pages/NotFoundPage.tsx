import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center">
        <AnimatedElement animation="scale">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="text-8xl font-title text-primary">404</div>
              <div className="absolute -right-6 -top-6 text-error animate-pulse">
                <AlertTriangle size={32} />
              </div>
            </div>
          </div>
          
          <h1 className="font-title text-3xl md:text-4xl text-text-bright mb-4">
            Página Não Encontrada
          </h1>
          
          <p className="text-text-dim max-w-md mx-auto mb-8">
            Parece que você está tentando acessar um conteúdo que foi Denied. 
            Esta página não existe ou foi movida para outro endereço.
          </p>
          
          <Link to="/" className="magic-btn inline-flex items-center gap-2">
            <Home size={18} />
            VOLTAR PARA INÍCIO
          </Link>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default NotFoundPage;