import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Plus, Minus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: string;
  name: string;
  description: string;
  pricePerKg: number;
  minOrder: number;
  unit: string;
  image: string;
  inStock: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function ProductCard({ product, quantity, onAddToCart, onUpdateQuantity }: ProductCardProps) {
  const finalPrice = product.discount 
    ? product.pricePerKg * (1 - product.discount / 100)
    : product.pricePerKg;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.discount && (
          <Badge className="absolute top-2 right-2 bg-red-600">
            {product.discount}% OFF
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-bold text-orange-600">
            ₹{finalPrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">/{product.unit}</span>
          {product.discount && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.pricePerKg.toFixed(2)}
            </span>
          )}
        </div>
        
        <p className="text-xs text-gray-500">
          Min. Order: {product.minOrder} {product.unit}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {quantity === 0 ? (
          <Button 
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="w-full bg-orange-600 hover:bg-orange-700"
          >
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center gap-2 w-full">
            <Button
              size="icon"
              variant="outline"
              onClick={() => onUpdateQuantity(product.id, Math.max(0, quantity - product.minOrder))}
            >
              <Minus className="size-4" />
            </Button>
            <div className="flex-1 text-center">
              <span className="font-semibold">{quantity} {product.unit}</span>
            </div>
            <Button
              size="icon"
              variant="outline"
              onClick={() => onUpdateQuantity(product.id, quantity + product.minOrder)}
            >
              <Plus className="size-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
