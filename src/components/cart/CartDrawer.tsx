'use client';

import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import CartItem from './CartItem';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, total, itemCount, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    onClose();
    router.push('/checkout');
  };

  const handleContinueShopping = () => {
    onClose();
    router.push('/menu');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Your Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-4 text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-800 mb-6">Add some delicious items from our menu!</p>
              <button
                onClick={handleContinueShopping}
                className="bg-[#4CD3A9] text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="px-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            {/* Total */}
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </button>
              <div className="flex space-x-2">
                <button
                  onClick={handleContinueShopping}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={clearCart}
                  className="flex-1 border border-red-300 text-red-600 py-2 rounded-md font-medium hover:bg-red-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
