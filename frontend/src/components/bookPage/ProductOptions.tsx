import React from 'react';
import { Check } from 'lucide-react';
import { bookData } from '../../data/mockBookPage';

export const ProductOptions = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Escolha Seu Formato Ideal
          </h2>
          <p className="text-stone-600">
            Disponível em múltiplos formatos para se adaptar ao seu estilo de aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bookData.products.map((product) => (
            <div 
              key={product.id} 
              className={`relative bg-white p-8 rounded-sm border transition-all duration-300 flex flex-col ${
                product.highlight 
                  ? 'border-amber-400 shadow-xl scale-105 z-10' 
                  : 'border-stone-200 shadow-sm hover:shadow-md'
              }`}
            >
              {product.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-sm">
                  Mais Popular
                </div>
              )}

              <div className="flex items-center justify-center w-12 h-12 bg-stone-100 rounded-full mb-6 mx-auto text-stone-700">
                <product.icon size={24} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-stone-900 text-center mb-2">{product.type}</h3>
              <p className="text-stone-500 text-sm text-center mb-6">{product.title}</p>
              
              <div className="text-center mb-8">
                <span className="text-3xl font-serif font-bold text-stone-900">{product.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-600">
                    <Check size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 font-medium tracking-wide transition-colors duration-300 ${
                  product.highlight
                    ? 'bg-stone-900 text-white hover:bg-stone-800'
                    : 'bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 hover:border-stone-900'
                }`}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
