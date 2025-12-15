import { Book, Star, Award, TrendingUp, Users, BookOpen, Headphones, MonitorPlay } from 'lucide-react';

export const bookData = {
  title: "Riqueza no Jogo da Vida",
  subtitle: "O livro oficial de Vicente Brash sobre prosperidade, mentalidade e estratégia.",
  description: "Descubra os segredos para dominar as regras invisíveis do sucesso financeiro e pessoal. Uma obra definitiva para quem busca não apenas riqueza, mas um legado.",
  coverImage: "https://images.unsplash.com/photo-1672928115439-4dcaabbedfd3?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  author: {
    name: "Vicente Brash",
    role: "Autor Best-Seller & Estrategista de Vida",
    image: "https://images.unsplash.com/photo-1719835491911-99dd30f3f2dc?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    statement: "Mais de 2 milhões de leitores transformados.",
    achievements: [
      { icon: Users, text: "+2M Leitores" },
      { icon: Star, text: "#1 Best-Seller" },
      { icon: TrendingUp, text: "Top 10 Finanças" }
    ]
  },
  highlights: [
    {
      title: "Mentalidade de Elite",
      description: "Reprograme suas crenças limitantes e adote o mindset dos maiores líderes mundiais."
    },
    {
      title: "Estratégia Financeira",
      description: "Métodos práticos e comprovados para multiplicar seu patrimônio com segurança e inteligência."
    },
    {
      title: "Legado e Propósito",
      description: "Como construir uma vida que vai além do dinheiro, focada em impacto e significado real."
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Carla M.",
      role: "Empresária",
      text: "Este livro mudou completamente a forma como lidero minha empresa e minha vida pessoal. Indispensável.",
      rating: 5
    },
    {
      id: 2,
      name: "Ricardo S.",
      role: "Investidor",
      text: "Vicente Brash entrega ouro em cada página. A clareza e profundidade dos conceitos são impressionantes.",
      rating: 5
    },
    {
      id: 3,
      name: "Juliana P.",
      role: "Advogada",
      text: "Uma leitura obrigatória para quem deseja sair da média e alcançar a excelência. Simplesmente brilhante.",
      rating: 5
    }
  ],
  products: [
    {
      id: "ebook",
      type: "E-book",
      title: "Edição Digital",
      price: "R$ 49,90",
      features: ["Download imediato", "Formatos PDF, EPUB, MOBI", "Acesso vitalício"],
      icon: BookOpen,
      highlight: false
    },
    {
      id: "physical",
      type: "Livro Físico",
      title: "Edição de Luxo",
      price: "R$ 89,90",
      features: ["Capa dura com acabamento premium", "Papel pólen soft", "Marcador de páginas exclusivo"],
      icon: Book,
      highlight: true
    },
    {
      id: "audiobook",
      type: "Audiobook",
      title: "Narrado pelo Autor",
      price: "R$ 59,90",
      features: ["6 horas de conteúdo", "Acesso via app exclusivo", "Bônus: Meditações guiadas"],
      icon: Headphones,
      highlight: false
    }
  ],
  relatedProducts: [
    {
      id: "course1",
      title: "Mestria Financeira",
      category: "Curso Online",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    },
    {
      id: "mentorship",
      title: "Mentoria Elite",
      category: "Mentoria",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    },
    {
      id: "book2",
      title: "O Poder do Agora",
      category: "Livro",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    }
  ]
};
