'use client';

import { useCart, CartItem as CartItemType } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">
          {item.name}
        </h4>
        <p className="text-sm text-gray-500">{item.price} each</p>
        <div className="flex items-center mt-1">
          {item.spicy && <span className="text-red-500 text-xs mr-1" title="Spicy">🌶️</span>}
          {item.vegetarian && <span className="text-green-500 text-xs" title="Vegetarian">🌱</span>}
        </div>
      </div>
      
      <div className="flex items-center ml-4">
        <div className="flex items-center">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="mx-3 text-sm font-medium min-w-[20px] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <div className="ml-4 text-right">
          <p className="text-sm font-medium text-gray-900">
            ${item.totalPrice.toFixed(2)}
          </p>
          <button
            onClick={() => removeItem(item.id)}
            className="text-xs text-red-500 hover:text-red-700 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
