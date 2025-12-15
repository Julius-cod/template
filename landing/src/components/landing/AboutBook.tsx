import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AboutBook = () => {
  const benefits = [
    {
      title: "Mentalidade de Riqueza",
      desc: "Desconstrua crenças limitantes e construa uma base sólida para a prosperidade financeira e pessoal."
    },
    {
      title: "Estratégia de Longo Prazo",
      desc: "Aprenda a pensar em décadas, não apenas em dias. O jogo da vida é vencido pela consistência."
    },
    {
      title: "Disciplina e Decisão",
      desc: "Como tomar decisões difíceis e manter a disciplina necessária para executar seus planos mais ambiciosos."
    },
    {
      title: "Responsabilidade Pessoal",
      desc: "Assuma o controle total dos seus resultados e pare de depender da sorte ou de circunstâncias externas."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-brand-gold/30 rounded-full text-xs font-bold text-brand-gold uppercase tracking-widest mb-2">
              O Conteúdo
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-white leading-tight">
              O que você vai <br/>
              <span className="text-brand-gold italic">aprender</span> neste livro
            </h2>
            <p className="text-brand-text text-lg leading-relaxed">
              Este não é apenas mais um livro sobre dinheiro. É um manual sobre como jogar o jogo da vida com maestria, integrando finanças, propósito e realização pessoal.
            </p>
            
            <div className="pt-8 border-t border-brand-light mt-8">
              <h3 className="text-xl font-serif text-brand-white mb-4">Detalhes do Produto</h3>
              <ul className="space-y-3 text-brand-text/80 text-sm">
                <li className="flex justify-between border-b border-brand-light/50 pb-2">
                  <span>Formato:</span>
                  <span className="text-brand-white font-medium">Livro Físico (Hardcover)</span>
                </li>
                <li className="flex justify-between border-b border-brand-light/50 pb-2">
                  <span>Páginas:</span>
                  <span className="text-brand-white font-medium">320 páginas</span>
                </li>
                <li className="flex justify-between border-b border-brand-light/50 pb-2">
                  <span>Acabamento:</span>
                  <span className="text-brand-white font-medium">Capa dura com verniz localizado</span>
                </li>
                <li className="flex justify-between border-b border-brand-light/50 pb-2">
                  <span>Envio:</span>
                  <span className="text-brand-white font-medium">Para todo o Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="bg-brand-light p-8 rounded-sm border border-brand-gold/5 hover:border-brand-gold/20 transition-colors group">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-serif text-brand-white mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                    <p className="text-brand-text leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
