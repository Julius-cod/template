import React from 'react';
import { Star, Quote } from 'lucide-react';
import { bookData } from '../../data/mockBookPage';

export const Reviews = () => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            O Que Dizem os Leitores
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Histórias reais de quem aplicou os princípios e transformou sua realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bookData.reviews.map((review) => (
            <div key={review.id} className="bg-stone-800/50 backdrop-blur-sm p-8 border border-stone-700 rounded-sm relative">
              <Quote className="absolute top-6 right-6 text-stone-700 opacity-50" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                ))}
              </div>
              
              <p className="text-stone-300 italic mb-8 leading-relaxed min-h-[80px]">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3 border-t border-stone-700 pt-6">
                <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center text-stone-400 font-serif font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
