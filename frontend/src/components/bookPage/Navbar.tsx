import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-stone-900">
            Vicente Brash
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Livros', 'Cursos', 'Blog', 'Sobre o Autor'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm uppercase tracking-widest text-stone-600 hover:text-amber-700 transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6 text-stone-800">
          <button className="hover:text-amber-700 transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-amber-700 transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-amber-700 transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-600 rounded-full"></span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-stone-800">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {['Home', 'Livros', 'Cursos', 'Blog', 'Sobre o Autor'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-serif text-stone-800 hover:text-amber-700"
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-stone-100">
                <Search size={20} />
                <User size={20} />
                <ShoppingBag size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
