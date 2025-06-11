
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Download, Gift } from "lucide-react";

const About = () => {
  const benefits = [
    "150+ receitas exclusivas e testadas",
    "Categorias organizadas por ocasião",
    "Dicas profissionais de culinária",
    "Receitas para dietas especiais",
    "Técnicas de apresentação",
    "Lista de compras organizadas"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Um Tesouro Culinário em Suas Mãos
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso ebook digital foi criado especialmente para mulheres que querem transformar 
              momentos simples em memórias especiais através da culinária. Com receitas que vão 
              desde o café da manhã até jantares românticos.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Agora - R$ 27,90
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-rose-600" />
                <span className="text-xl font-semibold text-gray-800">Ebook Digital</span>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full"></div>
                <div className="h-4 bg-gradient-to-r from-orange-200 to-rose-200 rounded-full w-4/5"></div>
                <div className="h-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full w-3/5"></div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-rose-600" />
                    <span className="font-semibold text-gray-800">Bônus Especial</span>
                  </div>
                  <p className="text-sm text-gray-600">Planner de cardápios semanais gratuito!</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
