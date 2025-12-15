import React from 'react';
import { motion } from 'framer-motion';
import { bookData } from '../../data/mockBookPage';

export const ContentOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            O Que Você Vai Encontrar
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {bookData.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-stone-50 border border-stone-100 rounded-sm hover:shadow-lg hover:border-amber-100 transition-all duration-300 group"
            >
              <div className="text-4xl font-serif text-stone-200 font-bold mb-4 group-hover:text-amber-200 transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
                {highlight.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
