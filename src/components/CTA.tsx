
import { Button } from "@/components/ui/button";
import { Download, Gift, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Sua Jornada Culinária Começa Agora!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Não perca mais tempo procurando receitas. Tenha tudo organizado e ao seu alcance.
          </p>
          
          {/* Offer highlight */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/30">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-6 h-6" />
              <span className="text-lg font-semibold">Oferta Especial por Tempo Limitado</span>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl line-through opacity-60">R$ 47,90</span>
              <span className="text-4xl font-bold">R$ 27,90</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm opacity-80">
              <Clock className="w-4 h-4" />
              <span>Oferta válida por mais 48 horas</span>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-white text-rose-600 hover:bg-rose-50 px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Download className="w-6 h-6 mr-3" />
            Sim, Quero Transformar Minha Culinária!
          </Button>
          
          <p className="mt-6 text-sm opacity-80">
            ✅ Download imediato • ✅ Garantia de 7 dias • ✅ Suporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
