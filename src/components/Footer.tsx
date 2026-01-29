import React from 'react';
import { Twitch, Youtube, Disc as Discord, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-light border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        {/* Centralized Community Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="font-title text-xl text-primary tracking-wider mr-2">ERICKING</span>
            <span className="text-xs px-2 py-0.5 bg-primary text-background rounded font-title">DOTA 2</span>
          </div>
          <p className="text-text-dim mb-6 max-w-2xl mx-auto">
            Compra de contas Dota 2, boost MMR, elo job e coach profissional. 
            Jogador Imortal especialista em hard carry desde 2012.
          </p>
          
          <h3 className="font-title text-lg mb-4 text-text-bright">Faça Parte da Comunidade</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
            <a href="https://twitch.tv/ericking" target="_blank" rel="noopener noreferrer" 
              className="bg-[#9146FF] text-white px-4 py-3 rounded-md font-title text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Twitch size={16} />
              TWITCH
            </a>
            <a href="https://www.youtube.com/@ericKING94" target="_blank" rel="noopener noreferrer"
              className="bg-[#FF0000] text-white px-4 py-3 rounded-md font-title text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Youtube size={16} />
              YOUTUBE
            </a>
            <a href="https://www.instagram.com/ericking94" target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-md font-title text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Instagram size={16} />
              INSTAGRAM
            </a>
            <a href="https://discord.gg/TdScnrf" target="_blank" rel="noopener noreferrer"
              className="bg-[#5865F2] text-white px-4 py-3 rounded-md font-title text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Discord size={16} />
              DISCORD
            </a>
            <a href="https://x.com/ericKING94" target="_blank" rel="noopener noreferrer"
              className="bg-black text-white px-4 py-3 rounded-md font-title text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-text-dim">
          <p>&copy; {currentYear} Ericking. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Dota 2 é uma marca registrada da Valve Corporation.
            Este site não é afiliado à Valve Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;