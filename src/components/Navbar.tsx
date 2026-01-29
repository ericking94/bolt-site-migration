import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Twitch, Youtube, ChevronDown, MessageCircle, Phone, Instagram } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'home', title: 'Início', path: '/' },
  { id: 'meta', title: 'Meta', path: '/meta' },
  { id: 'about', title: 'Sobre Mim', path: '/sobre' },
  { id: 'whatsapp', title: 'WhatsApp', path: '/whatsapp' },
  { id: 'contact', title: 'Contato', path: '/contato' },
];

const servicosItems: NavItem[] = [
  { id: 'mentoria', title: 'Mentoria', path: '/mentoria' },
  { id: 'boost', title: 'Boost MMR', path: '/boost' },
  { id: 'play', title: 'Jogue Comigo', path: '/play' },
  { id: 'boost-behavior', title: 'Boost Behavior', path: '/boost-behavior' },
  { id: 'low-priority', title: 'Low Priority', path: '/low-priority' },
];

const produtosItems: NavItem[] = [
  { id: 'contas', title: 'Contas', path: '/contas' },
  { id: 'pdfs', title: 'PDFs', path: '/pdfs' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProdutosOpen, setIsProdutosOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg shadow-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo com imagem - Escondido em mobile para evitar sobreposição */}
          <NavLink to="/" className="logo-topo hidden md:flex items-center space-x-3">
            <img 
              src="https://i.imgur.com/veIb0mw.jpeg"  
              alt="Ericking" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/50"
            />
            <div className="flex items-center space-x-2">
              <span className="font-title text-xl text-primary tracking-wider">ERICKING</span>
              <span className="text-xs px-2 py-0.5 bg-primary text-background rounded font-title">DOTA 2</span>
            </div>
          </NavLink>
          
          {/* Mobile Logo com imagem - Centralizado */}
          <NavLink to="/" className="md:hidden flex items-center space-x-2 mx-auto">
            <img 
              src="https://i.imgur.com/veIb0mw.jpeg" 
              alt="Ericking" 
              className="w-8 h-8 rounded-full object-cover border-2 border-primary/50"
            />
            <div className="flex items-center space-x-1">
              <span className="font-title text-lg text-primary tracking-wider">ERICKING</span>
              <span className="text-xs px-1.5 py-0.5 bg-primary text-background rounded font-title">DOTA 2</span>
            </div>
          </NavLink>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, 1).map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `nav-link-no-hover ${isActive ? 'active' : ''}`}
              >
                {item.title}
              </NavLink>
            ))}
            
            {/* Serviços Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="nav-link-no-hover flex items-center gap-1">
                Serviços
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-1 w-48 bg-background-light/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg shadow-primary/20 py-2 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {servicosItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className="block px-4 py-3 text-text-dim hover:text-text-bright hover:bg-primary/10 transition-colors"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
            
            {/* Produtos Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProdutosOpen(true)}
              onMouseLeave={() => setIsProdutosOpen(false)}
            >
              <button className="nav-link-no-hover flex items-center gap-1">
                Produtos
                <ChevronDown size={16} className={`transition-transform ${isProdutosOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-1 w-48 bg-background-light/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg shadow-primary/20 py-2 transition-all duration-200 ${
                isProdutosOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {produtosItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className="block px-4 py-3 text-text-dim hover:text-text-bright hover:bg-primary/10 transition-colors"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
            
            {navItems.slice(1).map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `nav-link-no-hover ${isActive ? 'active' : ''}`}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://twitch.tv/ericking" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
              <Twitch size={20} />
            </a>
            <a href="https://www.youtube.com/@ericKING94" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
              <Youtube size={20} />
            </a>
            <a href="https://www.instagram.com/ericking94" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/ericKING94" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          
          <button
            className="lg:hidden text-text-bright hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background-light border-t border-primary/30 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `nav-link-no-hover text-lg ${isActive ? 'active' : ''}`}
              >
                {item.title}
              </NavLink>
            ))}
            
            <div className="border-t border-primary/20 pt-4">
              <p className="text-text-dim text-sm mb-2">Serviços:</p>
              {servicosItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `nav-link-no-hover text-lg ml-4 ${isActive ? 'active' : ''}`}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
            
            <div className="border-t border-primary/20 pt-4">
              <p className="text-text-dim text-sm mb-2">Produtos:</p>
              {produtosItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `nav-link-no-hover text-lg ml-4 ${isActive ? 'active' : ''}`}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-primary/20">
              <a href="https://twitch.tv/ericking" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
                <Twitch size={20} />
              </a>
              <a href="https://www.youtube.com/@ericKING94" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/ericking94" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/ericKING94" target="_blank" rel="noopener noreferrer" className="social-icon-no-hover">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;