'use client';

import { useCart, MenuItem } from '@/contexts/CartContext';
import { menuItems, categories } from '@/data/menuItems';

export default function MenuPage() {
  const { addItem } = useCart();

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fresh ingredients, bold flavors, and generous portions. Every item is made to order with love.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {categories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h2 className="text-3xl font-bold">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="bg-[#4CD3A9] text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8">Add items to your cart and checkout when you&apos;re ready!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90"
            >
              Back to Top
            </button>
            <a 
              href="/locations"
              className="border border-white text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-white hover:text-black transition-colors"
            >
              Find Locations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
