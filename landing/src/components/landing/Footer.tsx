import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark border-t border-brand-light py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-bold text-brand-white mb-2">
              Vicente Brás
            </div>
            <p className="text-brand-text/40 text-sm">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-text/60 hover:text-brand-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-brand-text/60 hover:text-brand-gold transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-brand-text/60 hover:text-brand-gold transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          
          <div className="flex gap-6 text-sm text-brand-text/60">
            <a href="#" className="hover:text-brand-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
