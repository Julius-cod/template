import React from 'react';
import { ArrowRight } from 'lucide-react';
import { bookData } from '../../data/mockBookPage';

export const SecondaryProducts = () => {
  return (
    <section className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2">
              Outras Obras de Vicente Brash
            </h2>
            <p className="text-stone-500">Expanda seu conhecimento com estes materiais complementares.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800 transition-colors group">
            Ver todos os produtos
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bookData.relatedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4 bg-stone-100 relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">{product.category}</p>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
