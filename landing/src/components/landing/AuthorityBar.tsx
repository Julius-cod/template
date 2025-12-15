import React from 'react';
import { Globe, Users, Award } from 'lucide-react';

export const AuthorityBar = () => {
  const items = [
    {
      icon: <Award className="text-brand-gold" size={24} />,
      text: "Autor Best-Seller Internacional"
    },
    {
      icon: <Users className="text-brand-gold" size={24} />,
      text: "Milhares de leitores impactados"
    },
    {
      icon: <Globe className="text-brand-gold" size={24} />,
      text: "Traduzido para 5 idiomas"
    }
  ];

  return (
    <section className="bg-brand-light border-y border-brand-gold/10 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3 group">
              <div className="p-4 rounded-full bg-brand-dark border border-brand-gold/20 group-hover:border-brand-gold/50 transition-colors">
                {item.icon}
              </div>
              <p className="font-serif text-lg text-brand-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
