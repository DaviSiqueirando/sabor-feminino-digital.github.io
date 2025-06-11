
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Transformou completamente minha relação com a cozinha! As receitas são fáceis e o resultado sempre surpreende.",
      rating: 5,
      location: "São Paulo, SP"
    },
    {
      name: "Ana Costa",
      text: "Minha família adora as receitas novas que aprendo. Finalmente encontrei inspiração para variar o cardápio!",
      rating: 5,
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Carla Mendes",
      text: "O ebook é lindo e super bem organizado. Sinto que tenho uma chef particular me ensinando!",
      rating: 5,
      location: "Belo Horizonte, MG"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            O Que Nossas Leitoras Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de mulheres que transformaram sua culinária
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <Quote className="w-8 h-8 text-rose-400 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
