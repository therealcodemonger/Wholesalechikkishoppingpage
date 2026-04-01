import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <section id="hero" className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Trusted by 500+ Retailers Across India
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Wholesale
              <span className="text-orange-600 block">Chikki & Sweets</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              India's leading supplier of authentic, handcrafted chikki. 
              Bulk orders with competitive pricing for retailers and distributors nationwide.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-green-600" />
                <span className="text-gray-700">100% Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-green-600" />
                <span className="text-gray-700">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-green-600" />
                <span className="text-gray-700">Pan-India Delivery</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={onShopNow}
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-lg px-8"
              >
                Shop Wholesale
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                variant="outline"
                className="text-lg px-8"
              >
                Contact Sales
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">50T+</div>
                <div className="text-sm text-gray-600">Monthly Production</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1772984959639-54284678b805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXQlMjBicml0dGxlJTIwY2FuZHl8ZW58MXx8fHwxNzc1MDU5OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium Chikki"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-sm text-gray-600 mb-1">Starting from</div>
              <div className="text-3xl font-bold text-orange-600">₹280/kg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
