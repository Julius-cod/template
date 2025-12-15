import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, BookOpen } from 'lucide-react';
import bookImage from '../../assets/livro.jpg';
import authorImage from '../../assets/author.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-light/20 to-transparent pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-gold/30 rounded-full bg-brand-gold/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Best-Seller Internacional</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-white leading-[1.1]">
              Riqueza no <br/>
              <span className="text-brand-gold italic">Jogo da Vida</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text max-w-lg leading-relaxed font-light">
              O livro definitivo de Vicente Brás sobre prosperidade, mentalidade e estratégia para vencer os desafios reais da vida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="flex items-center justify-center gap-2 group">
              Comprar Agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="flex items-center justify-center gap-2">
              <BookOpen size={18} />
              Ver Conteúdo
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-4 text-sm text-brand-text/60">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-brand-light border border-brand-dark flex items-center justify-center text-xs overflow-hidden">
                  <div className="w-full h-full bg-gray-600"></div>
                </div>
              ))}
            </div>
            <p>Junte-se a mais de <span className="text-brand-white font-bold">15.000+</span> leitores</p>
          </div>
        </motion.div>
        
        {/* Right Content - Mockup & Author */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[600px] flex items-center justify-center"
        >
          {/* Author Portrait Background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] md:w-[350px] md:h-[450px] bg-brand-light rounded-sm overflow-hidden shadow-2xl border border-brand-gold/10 opacity-80 lg:translate-x-12 z-0 grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src={authorImage} 
               alt="Foto do autor Vicente Brás" 
               className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
             />
          </div>
          
          {/* Book Image Foreground */}
          <div className="relative z-10 transform lg:-translate-x-12 hover:scale-105 transition-transform duration-500 shadow-2xl rounded-md overflow-hidden border border-white/10">
            <img 
              src={bookImage} 
              alt="Capa do livro Riqueza no Jogo da Vida" 
              className="w-[300px] md:w-[350px] h-auto object-cover rounded-md shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
