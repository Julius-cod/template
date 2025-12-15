import React from 'react';
import { ShoppingBag } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-light">
      <div className="container-custom h-20 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold text-brand-white tracking-tight">
          Vicente Brás
        </div>
        
        <nav className="flex items-center gap-8">
          <a href="#author" className="text-sm font-medium text-brand-text hover:text-brand-gold transition-colors hidden md:block">
            Sobre o Autor
          </a>
          <a href="#contact" className="text-sm font-medium text-brand-text hover:text-brand-gold transition-colors hidden md:block">
            Contato
          </a>
          <button className="relative p-2 text-brand-gold hover:text-brand-white transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
