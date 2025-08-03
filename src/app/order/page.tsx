'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { menuItems, categories } from '@/data/menuItems';
import Link from 'next/link';

export default function OrderPage() {
  const { addItem, items, itemCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem(item);
  };

  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Online</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Quick and easy online ordering. Add items to your cart and checkout when ready!
          </p>
          {itemCount > 0 && (
            <div className="mt-6">
              <Link 
                href="/checkout"
                className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 inline-flex items-center"
              >
                Checkout ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === '' 
                  ? 'bg-[#4CD3A9] text-black' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Items
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-[#4CD3A9] text-black' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedCategory ? (
            // Show filtered category
            <div>
              <div className="flex items-center justify-center mb-8">
                <span className="text-4xl mr-4">
                  {categories.find(cat => cat.id === selectedCategory)?.icon}
                </span>
                <h2 className="text-3xl font-bold">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        {item.spicy && <span className="text-red-500" title="Spicy">🌶️</span>}
                        {item.vegetarian && <span className="text-green-500" title="Vegetarian">🌱</span>}
                        <span className="text-lg font-bold text-[#4CD3A9]">{item.price}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-[#4CD3A9] text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Show all categories
            categories.map((category) => (
              <div key={category.id} className="mb-16">
                <div className="flex items-center justify-center mb-8">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems
                    .filter((item) => item.category === category.id)
                    .map((item) => (
                      <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          <div className="flex items-center gap-2">
                            {item.spicy && <span className="text-red-500" title="Spicy">🌶️</span>}
                            {item.vegetarian && <span className="text-green-500" title="Vegetarian">🌱</span>}
                            <span className="text-lg font-bold text-[#4CD3A9]">{item.price}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <button 
                          onClick={() => handleAddToCart(item)}
                          className="w-full bg-[#4CD3A9] text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Checkout CTA */}
      {itemCount > 0 && (
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Complete Your Order?</h2>
            <p className="text-xl mb-8">
              You have {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
            <Link 
              href="/checkout"
              className="bg-[#4CD3A9] text-black px-8 py-4 rounded-md font-medium text-xl hover:bg-opacity-90 inline-block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </section>
      )}

      {/* Store Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pickup Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Downtown Location</h3>
              <p className="text-gray-600 mb-4">123 Main Street</p>
              <div className="bg-[#4CD3A9] text-black p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">(555) 123-4567</p>
              </div>
              <p className="text-sm text-gray-500">Average pickup time: 15-20 minutes</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Westside Location</h3>
              <p className="text-gray-600 mb-4">456 West Avenue</p>
              <div className="bg-[#4CD3A9] text-black p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">(555) 234-5678</p>
              </div>
              <p className="text-sm text-gray-500">Average pickup time: 15-20 minutes</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Eastside Location</h3>
              <p className="text-gray-600 mb-4">789 East Boulevard</p>
              <div className="bg-[#4CD3A9] text-black p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">(555) 345-6789</p>
              </div>
              <p className="text-sm text-gray-500">Average pickup time: 15-20 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
