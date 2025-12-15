import React from 'react';
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold text-white mb-6 block">
              Vicente Brash
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Transformando vidas através da educação financeira e desenvolvimento pessoal de alto nível.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Livros</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cursos</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sobre</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Minha Conta</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Devolução</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Receba insights semanais sobre riqueza e prosperidade.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-stone-800 border border-stone-700 text-white px-4 py-2 text-sm w-full focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button className="bg-amber-600 text-white px-4 py-2 hover:bg-amber-700 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>&copy; 2025 Vicente Brash. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Design by Youware</p>
        </div>
      </div>
    </footer>
  );
};
