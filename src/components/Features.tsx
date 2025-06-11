
import { Heart, Clock, Users, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Receitas com Amor",
      description: "Cada receita foi criada com carinho especial para trazer momentos únicos à sua família"
    },
    {
      icon: Clock,
      title: "Praticidade no Dia a Dia",
      description: "Opções rápidas para o corrido do dia e receitas especiais para momentos únicos"
    },
    {
      icon: Users,
      title: "Para Toda a Família",
      description: "Desde petiscos para as crianças até pratos sofisticados para ocasiões especiais"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Receitas testadas e aprovadas por milhares de mulheres apaixonadas por cozinhar"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Por que Escolher Nosso Ebook?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais do que receitas, é um convite para criar memórias afetivas através da culinária
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-rose-200 group-hover:to-pink-200 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
