import React from 'react';
import { Button } from '../ui/Button';
import { ShieldCheck, Truck, Package } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-brand-dark relative text-center">
      <div className="absolute inset-0 bg-gradient-radial from-brand-light/30 to-brand-dark pointer-events-none"></div>
      
      <div className="container-custom relative z-10 max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-white leading-tight">
          Adquira agora o livro que está <br/>
          <span className="text-brand-gold italic">transformando vidas</span>
        </h2>
        
        <p className="text-xl text-brand-text font-light max-w-2xl mx-auto">
          Junte-se a milhares de leitores e comece sua jornada rumo à verdadeira prosperidade hoje mesmo.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button className="text-lg px-12 py-4 shadow-brand-gold/20 shadow-xl hover:shadow-brand-gold/40 hover:-translate-y-1">
            Comprar Livro Físico
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-text/60 mt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-gold" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Package size={16} className="text-brand-gold" />
              <span>Produto Original</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-brand-gold" />
              <span>Envio Rápido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
