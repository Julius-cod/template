import React from 'react';
import { motion } from 'framer-motion';

export const BookMockup = () => {
  return (
    <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[520px] perspective-1000 mx-auto">
      <motion.div 
        initial={{ rotateY: -30, rotateX: 10 }}
        animate={{ rotateY: -25, rotateX: 5 }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="relative w-full h-full transform-style-3d shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Cover */}
        <div className="absolute inset-0 bg-brand-light border-2 border-brand-gold/30 rounded-r-md flex flex-col items-center justify-between p-8 shadow-inner backface-hidden z-20"
             style={{ 
               background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
               transform: 'translateZ(25px)'
             }}>
          <div className="w-full text-center mt-4">
            <div className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-2">Best-Seller</div>
            <div className="h-[1px] w-12 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-brand-white leading-tight mb-2">
              Riqueza<br/>
              <span className="text-2xl md:text-3xl italic text-brand-gold">no Jogo da</span><br/>
              Vida
            </h1>
          </div>
          
          <div className="text-center mb-4">
            <div className="text-brand-text text-sm tracking-widest uppercase">Vicente Brás</div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-brand-gold/20 rounded-tr-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-brand-gold/20 rounded-bl-xl"></div>
        </div>

        {/* Spine */}
        <div className="absolute top-0 left-0 w-[50px] h-full bg-brand-dark border-l border-brand-gold/20 origin-left transform -rotate-y-90 flex flex-col items-center justify-center py-8 z-10"
             style={{ transform: 'rotateY(-90deg) translateZ(0px)' }}>
          <div className="transform rotate-90 whitespace-nowrap text-brand-gold font-serif text-lg tracking-widest">
            Riqueza no Jogo da Vida
          </div>
        </div>

        {/* Back Cover (barely visible but needed for 3D feel) */}
        <div className="absolute inset-0 bg-brand-dark rounded-l-md transform rotate-y-180 translate-z-[-25px]"
             style={{ transform: 'rotateY(180deg) translateZ(25px)' }}>
        </div>

        {/* Pages (Right side) */}
        <div className="absolute top-[2px] right-0 w-[48px] h-[calc(100%-4px)] bg-white transform rotate-y-90 origin-right"
             style={{ 
               transform: 'rotateY(90deg) translateZ(0px)',
               background: 'linear-gradient(to right, #e2e2e2, #fff 10%, #f0f0f0 90%, #e2e2e2)'
             }}>
        </div>
      </motion.div>
      
      {/* Shadow */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/40 blur-xl rounded-[100%]"></div>
    </div>
  );
};
