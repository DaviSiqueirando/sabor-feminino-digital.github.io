
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Heart className="w-8 h-8 text-rose-300 animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Star className="w-6 h-6 text-orange-300 animate-pulse" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Star className="w-10 h-10 text-pink-300 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Sabores que Aquecem o Coração
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Descubra mais de <span className="font-semibold text-rose-600">150 receitas exclusivas</span> que transformarão sua cozinha em um refúgio de amor e sabor
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              💕 Adquira Aqui - R$ 27,90
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Ver Prévia Gratuita
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Avaliado por mais de 2.500 mulheres apaixonadas por culinária</span>
          </div>
        </div>
      </div>
      
      {/* Floating recipe cards */}
      <div className="absolute top-1/4 left-10 hidden lg:block animate-fade-in">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-rose-200 rounded-xl mb-2"></div>
          <p className="text-xs font-medium text-gray-700">Bolo de Cenoura</p>
        </div>
      </div>
      
      <div className="absolute top-1/3 right-10 hidden lg:block animate-fade-in delay-500">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl mb-2"></div>
          <p className="text-xs font-medium text-gray-700">Brigadeiro Gourmet</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
