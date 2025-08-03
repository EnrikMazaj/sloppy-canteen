import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Deliciously Sloppy.<br />Perfectly Satisfying.
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Handcrafted burgers, sandwiches, and more at our 3 locations with a 4th coming soon!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90">
                View Menu
              </Link>
              <Link href="/locations" className="bg-white text-black px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90">
                Find Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          {/* Placeholder background with food pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CD3A9' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Menu Items</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <div className="text-6xl">🍔</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Classic Sloppy</h3>
                <p className="text-gray-600 mb-4">Our signature burger with special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.</p>
                <Link href="/menu" className="text-[#4CD3A9] font-medium hover:underline">
                  Order Now →
                </Link>
              </div>
            </div>
            
            {/* Featured Item 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <div className="text-6xl">🥪</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Chicken Deluxe</h3>
                <p className="text-gray-600 mb-4">Crispy chicken breast, avocado, bacon, lettuce, and honey mustard on a brioche bun.</p>
                <Link href="/menu" className="text-[#4CD3A9] font-medium hover:underline">
                  Order Now →
                </Link>
              </div>
            </div>
            
            {/* Featured Item 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative bg-gradient-to-br from-red-400 to-yellow-500 flex items-center justify-center">
                <div className="text-6xl">🍟</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Loaded Fries</h3>
                <p className="text-gray-600 mb-4">Crispy fries topped with cheese sauce, bacon bits, green onions, and sour cream.</p>
                <Link href="/menu" className="text-[#4CD3A9] font-medium hover:underline">
                  Order Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Downtown</h3>
              <p className="text-gray-600 mb-4">123 Main Street<br />City, State 12345</p>
              <p className="mb-4"><strong>Hours:</strong><br />Mon-Fri: 10am - 10pm<br />Sat-Sun: 11am - 11pm</p>
              <Link href="/locations" className="text-[#4CD3A9] font-medium hover:underline">
                View Details →
              </Link>
            </div>
            
            {/* Location 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Westside</h3>
              <p className="text-gray-600 mb-4">456 West Avenue<br />City, State 12345</p>
              <p className="mb-4"><strong>Hours:</strong><br />Mon-Fri: 10am - 10pm<br />Sat-Sun: 11am - 11pm</p>
              <Link href="/locations" className="text-[#4CD3A9] font-medium hover:underline">
                View Details →
              </Link>
            </div>
            
            {/* Location 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Eastside</h3>
              <p className="text-gray-600 mb-4">789 East Boulevard<br />City, State 12345</p>
              <p className="mb-4"><strong>Hours:</strong><br />Mon-Fri: 10am - 10pm<br />Sat-Sun: 11am - 11pm</p>
              <Link href="/locations" className="text-[#4CD3A9] font-medium hover:underline">
                View Details →
              </Link>
            </div>
            
            {/* Location 4 - Coming Soon */}
            <div className="bg-[#4CD3A9] p-6 rounded-lg shadow-md text-black">
              <h3 className="text-xl font-bold mb-2">Northside</h3>
              <p className="mb-4">1010 North Road<br />City, State 12345</p>
              <p className="text-lg font-bold mb-4">Coming Soon!</p>
              <Link href="/locations" className="text-black font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Skip the line and order ahead for pickup or delivery.</p>
          <Link href="/order" className="bg-[#4CD3A9] text-black px-8 py-4 rounded-md font-medium text-lg inline-block hover:bg-opacity-90">
            Order Now
          </Link>
    </div>
      </section>
    </>
  );
}
