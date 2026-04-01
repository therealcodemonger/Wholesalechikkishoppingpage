import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="size-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🥜</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Chikki Wholesale</h1>
              <p className="text-sm text-gray-600">Premium Indian Sweets</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </button>
          </nav>
          
          <Button onClick={onCartClick} variant="outline" className="relative">
            <ShoppingCart className="size-5" />
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 size-6 flex items-center justify-center p-0 bg-orange-600">
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}