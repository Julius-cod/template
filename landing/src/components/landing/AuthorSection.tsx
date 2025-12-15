import React from 'react';
import authorImage from '../../assets/author.jpg';

export const AuthorSection = () => {
  return (
    <section id="author" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="text-[20vw] font-serif font-bold text-brand-white leading-none whitespace-nowrap absolute -top-20 -left-20">
          Vicente Brás
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden rounded-sm shadow-2xl border border-brand-gold/20 group">
               <img 
                 src={authorImage} 
                 alt="Foto do Autor Vicente Brás" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-60"></div>
               <div className="absolute bottom-6 left-6 text-brand-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 Vicente Brás
               </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-white">
              Sobre o <span className="text-brand-gold italic">Autor</span>
            </h2>
            
            <div className="space-y-6 text-lg text-brand-text leading-relaxed font-light">
              <p>
                <strong className="text-brand-white font-semibold">Vicente Brás</strong> é escritor, mentor e uma das maiores referências em desenvolvimento pessoal e prosperidade da atualidade.
              </p>
              <p>
                Com uma carreira de mais de duas décadas, Vicente já impactou leitores em mais de 15 países, ajudando pessoas comuns a transformarem suas mentalidades e alcançarem resultados extraordinários.
              </p>
              <p>
                Sua filosofia combina sabedoria antiga com estratégias modernas, focando sempre na responsabilidade pessoal e na visão de longo prazo como pilares para uma vida plena e rica em todos os sentidos.
              </p>
            </div>
            
            <div className="pt-4">
              <img src="https://placehold.co/200x80/112240/d4af37?text=Assinatura" alt="Assinatura Vicente Brás" className="h-16 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
