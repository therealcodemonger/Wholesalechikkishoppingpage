import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProductCard, Product } from "./components/ProductCard";
import { CartSheet } from "./components/CartSheet";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const products: Product[] = [
  {
    id: "1",
    name: "Classic Peanut Chikki",
    description: "Traditional roasted peanut brittle with jaggery",
    pricePerKg: 280,
    minOrder: 5,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772984959639-54284678b805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXQlMjBicml0dGxlJTIwY2FuZHl8ZW58MXx8fHwxNzc1MDU5OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    discount: 15,
  },
  {
    id: "2",
    name: "Premium Sesame Chikki",
    description: "Crunchy sesame seeds with pure jaggery syrup",
    pricePerKg: 320,
    minOrder: 5,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1770782912846-9e4560df0031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBicml0dGxlJTIwY2FuZHl8ZW58MXx8fHwxNzc1MDU5OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "3",
    name: "Almond Chikki",
    description: "Premium California almonds with organic jaggery",
    pricePerKg: 580,
    minOrder: 3,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772984959639-54284678b805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmQlMjBicml0dGxlJTIwc3dlZXR8ZW58MXx8fHwxNzc1MDU5OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    discount: 10,
  },
  {
    id: "4",
    name: "Cashew Chikki",
    description: "Rich cashew nuts with golden jaggery blend",
    pricePerKg: 680,
    minOrder: 3,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772985503023-3f6516084966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBicml0dGxlJTIwY2FuZHl8ZW58MXx8fHwxNzc1MDU5OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "5",
    name: "Coconut Chikki",
    description: "Fresh coconut pieces with traditional jaggery",
    pricePerKg: 350,
    minOrder: 5,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1610853956061-7a9a57d58ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwYnJpdHRsZSUyMHN3ZWV0fGVufDF8fHx8MTc3NTA1OTkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    discount: 20,
  },
  {
    id: "6",
    name: "Mixed Nuts Chikki",
    description: "Assorted nuts blend - almonds, cashews & peanuts",
    pricePerKg: 520,
    minOrder: 5,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772985431409-c7c71c794a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBicml0dGxlfGVufDF8fHx8MTc3NTA1OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "7",
    name: "Chocolate Peanut Chikki",
    description: "Peanut chikki coated with premium dark chocolate",
    pricePerKg: 420,
    minOrder: 5,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772984965951-d22523b5c94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJhbWVsJTIwbnV0JTIwY2FuZHl8ZW58MXx8fHwxNzc1MDU5OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: false,
  },
  {
    id: "8",
    name: "Sugar-Free Almond Chikki",
    description: "Diabetic-friendly with natural sweeteners",
    pricePerKg: 620,
    minOrder: 3,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1772984959639-54284678b805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmQlMjBicml0dGxlJTIwc3dlZXR8ZW58MXx8fHwxNzc1MDU5OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    discount: 5,
  },
];

interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      handleUpdateQuantity(product.id, existingItem.quantity + product.minOrder);
    } else {
      setCart([...cart, { product, quantity: product.minOrder }]);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter((item) => item.product.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const getProductQuantity = (productId: string) => {
    const item = cart.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Hero onShopNow={scrollToProducts} />
      
      <About />
      
      <main id="products" className="container mx-auto px-4 py-20 bg-white">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wholesale Chikki Collection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality Indian brittles for retailers and distributors. Best prices for bulk orders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getProductQuantity(product.id)}
              onAddToCart={handleAddToCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-semibold mb-1">Bulk Discounts</h3>
              <p className="text-sm text-gray-600">Save more on larger orders</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders above ₹10,000</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-semibold mb-1">Quality Assured</h3>
              <p className="text-sm text-gray-600">Fresh & hygienically packed</p>
            </div>
          </div>
        </div>
      </main>

      <Contact />

      <Footer />

      <CartSheet
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cart}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}