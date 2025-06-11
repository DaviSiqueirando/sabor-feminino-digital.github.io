
import { Heart, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-50 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-rose-500" />
            <span className="text-xl font-semibold text-gray-800">Sabores do Coração</span>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Transformando momentos simples em memórias especiais através da culinária
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-rose-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Sabores do Coração. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
