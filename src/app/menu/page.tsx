import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Sloppy Canteen',
  description: 'Browse our delicious selection of burgers, sandwiches, sides, and drinks at Sloppy Canteen.',
};

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

const menuItems: MenuItem[] = [
  // Burgers
  { id: 1, name: "The Classic Sloppy", description: "Our signature burger with special sauce, lettuce, cheese, pickles, onions on a sesame seed bun", price: "$12.99", category: "burgers" },
  { id: 2, name: "BBQ Bacon Deluxe", description: "Beef patty, crispy bacon, BBQ sauce, cheddar cheese, onion rings, lettuce", price: "$15.99", category: "burgers" },
  { id: 3, name: "Mushroom Swiss", description: "Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli", price: "$14.99", category: "burgers" },
  { id: 4, name: "Spicy Jalapeño", description: "Beef patty, jalapeños, pepper jack cheese, chipotle mayo, lettuce, tomato", price: "$13.99", category: "burgers", spicy: true },
  { id: 5, name: "Veggie Delight", description: "Plant-based patty, avocado, sprouts, tomato, lettuce, vegan mayo", price: "$13.99", category: "burgers", vegetarian: true },

  // Sandwiches
  { id: 6, name: "Chicken Deluxe", description: "Crispy chicken breast, avocado, bacon, lettuce, honey mustard on brioche", price: "$13.99", category: "sandwiches" },
  { id: 7, name: "Pulled Pork", description: "Slow-cooked pulled pork, coleslaw, BBQ sauce on a brioche bun", price: "$12.99", category: "sandwiches" },
  { id: 8, name: "Grilled Chicken Club", description: "Grilled chicken, bacon, lettuce, tomato, mayo on sourdough", price: "$12.99", category: "sandwiches" },
  { id: 9, name: "Fish Sandwich", description: "Beer-battered cod, tartar sauce, lettuce, pickles on a kaiser roll", price: "$11.99", category: "sandwiches" },

  // Sides
  { id: 10, name: "Loaded Fries", description: "Crispy fries topped with cheese sauce, bacon bits, green onions, sour cream", price: "$8.99", category: "sides" },
  { id: 11, name: "Regular Fries", description: "Golden crispy french fries", price: "$4.99", category: "sides" },
  { id: 12, name: "Sweet Potato Fries", description: "Crispy sweet potato fries with chipotle aioli", price: "$6.99", category: "sides" },
  { id: 13, name: "Onion Rings", description: "Beer-battered onion rings with ranch dipping sauce", price: "$6.99", category: "sides" },
  { id: 14, name: "Coleslaw", description: "Fresh cabbage slaw with creamy dressing", price: "$3.99", category: "sides" },

  // Drinks
  { id: 15, name: "Soft Drinks", description: "Coca-Cola, Pepsi, Sprite, Orange Fanta", price: "$2.99", category: "drinks" },
  { id: 16, name: "Fresh Lemonade", description: "House-made fresh lemonade", price: "$3.99", category: "drinks" },
  { id: 17, name: "Iced Tea", description: "Sweet or unsweetened", price: "$2.99", category: "drinks" },
  { id: 18, name: "Milkshakes", description: "Vanilla, chocolate, strawberry, or oreo", price: "$5.99", category: "drinks" },
  { id: 19, name: "Coffee", description: "Freshly brewed coffee", price: "$2.49", category: "drinks" },
];

const categories = [
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
  { id: 'sides', name: 'Sides', icon: '🍟' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
];

export default function MenuPage() {
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
                      <button className="bg-[#4CD3A9] text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                        Add to Order
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
          <p className="text-xl mb-8">Visit us at any of our 3 locations or order online for pickup!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90">
              Order Online
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-white hover:text-black transition-colors">
              Find Locations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
