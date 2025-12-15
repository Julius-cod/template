import React from 'react';
import { motion } from 'framer-motion';
import { bookData } from '../../data/mockBookPage';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-stone-50">
      {/* Background Texture (Optional) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-200/50 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 border border-amber-200 rounded-full text-xs font-bold tracking-widest text-amber-800 uppercase mb-6 bg-amber-50">
            Best-Seller Internacional
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-900 leading-[1.1] mb-6">
            {bookData.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            {bookData.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white font-medium tracking-wide hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Comprar Agora
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-300 text-stone-800 font-medium tracking-wide hover:border-stone-900 hover:bg-stone-50 transition-all duration-300">
              Ler Amostra Gratuita
            </button>
          </div>
        </motion.div>

        {/* Book Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-[300px] md:w-[400px] lg:w-[450px] aspect-[2/3] shadow-2xl shadow-stone-400/50 rounded-sm overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
             <img 
               src={bookData.coverImage} 
               alt={bookData.title} 
               className="w-full h-full object-cover"
             />
             {/* Shine effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-stone-200 rounded-full opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};
