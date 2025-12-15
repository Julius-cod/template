import React from 'react';
import { bookData } from '../../data/mockBookPage';

export const AuthorStrip = () => {
  return (
    <section className="bg-white border-y border-stone-100 py-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
        
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-100 shadow-sm">
            <img 
              src={bookData.author.image} 
              alt={bookData.author.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">{bookData.author.name}</h3>
            <p className="text-sm text-stone-500 uppercase tracking-wider">{bookData.author.role}</p>
          </div>
        </div>

        {/* Statement */}
        <div className="hidden md:block h-8 w-px bg-stone-200"></div>
        
        <p className="text-stone-700 font-medium italic text-center md:text-left">
          "{bookData.author.statement}"
        </p>

        {/* Achievements */}
        <div className="hidden md:block h-8 w-px bg-stone-200"></div>

        <div className="flex items-center gap-6 md:gap-8">
          {bookData.author.achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center">
              <achievement.icon size={20} className="text-amber-600 mb-1" strokeWidth={1.5} />
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wide">{achievement.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
