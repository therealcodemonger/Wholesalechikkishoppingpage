import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Trash2 } from "lucide-react";
import { Product } from "./ProductCard";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function CartSheet({ open, onOpenChange, items, onRemoveItem, onUpdateQuantity }: CartSheetProps) {
  const subtotal = items.reduce((acc, item) => {
    const price = item.product.discount 
      ? item.product.pricePerKg * (1 - item.product.discount / 100)
      : item.product.pricePerKg;
    return acc + (price * item.quantity);
  }, 0);

  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-400">Add products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const price = item.product.discount 
                  ? item.product.pricePerKg * (1 - item.product.discount / 100)
                  : item.product.pricePerKg;
                const itemTotal = price * item.quantity;

                return (
                  <div key={item.product.id} className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="size-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.product.name}</h4>
                      <p className="text-sm text-gray-600">
                        ₹{price.toFixed(2)} × {item.quantity} {item.product.unit}
                      </p>
                      <p className="text-sm font-semibold text-orange-600 mt-1">
                        ₹{itemTotal.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => onRemoveItem(item.product.id)}
                    >
                      <Trash2 className="size-4 text-red-600" />
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <>
            <Separator />
            <div className="space-y-2 py-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">GST (18%)</span>
                <span className="font-semibold">₹{tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-orange-600">₹{total.toFixed(2)}</span>
              </div>
              {subtotal < 5000 && (
                <p className="text-sm text-red-600 text-center">
                  Add ₹{(5000 - subtotal).toFixed(2)} more to meet minimum order
                </p>
              )}
            </div>
            <SheetFooter>
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={subtotal < 5000}
              >
                Proceed to Checkout
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
