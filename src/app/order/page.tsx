import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Order Now | Sloppy Canteen',
  description: 'Order your favorite Sloppy Canteen items online for pickup or delivery.',
};

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Online</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Skip the line and order your favorites for pickup or delivery!
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold mb-6">Online Ordering Coming Soon!</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're working hard to bring you a seamless online ordering experience. 
                In the meantime, you can still enjoy our delicious food by visiting 
                any of our 3 locations or calling ahead for pickup.
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#4CD3A9] text-black p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">What to expect:</h3>
                  <ul className="text-left space-y-1">
                    <li>✅ Easy menu browsing</li>
                    <li>✅ Customizable orders</li>
                    <li>✅ Multiple payment options</li>
                    <li>✅ Order tracking</li>
                    <li>✅ Pickup and delivery options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Order Now By Phone</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Downtown */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Downtown Location</h3>
              <p className="text-gray-600 mb-4">123 Main Street</p>
              <div className="bg-[#4CD3A9] text-black p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">(555) 123-4567</p>
              </div>
              <p className="text-sm text-gray-500">Average pickup time: 15-20 minutes</p>
            </div>
            
            {/* Westside */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Westside Location</h3>
              <p className="text-gray-600 mb-4">456 West Avenue</p>
              <div className="bg-[#4CD3A9] text-black p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">(555) 234-5678</p>
              </div>
              <p className="text-sm text-gray-500">Average pickup time: 15-20 minutes</p>
            </div>
            
            {/* Eastside */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Eastside Location</h3>
              <p className="text-gray-600 mb-4">789 East Boulevard</p>
              <div className="bg-[#4CD3A9] text-black p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">(555) 345-6789</p>
              </div>
              <p className="text-sm text-gray-500">Average pickup time: 15-20 minutes</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/menu" 
              className="bg-black text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-800 inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Order Hours</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Monday - Friday</h3>
                  <p className="text-2xl font-bold text-[#4CD3A9]">10:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Saturday - Sunday</h3>
                  <p className="text-2xl font-bold text-[#4CD3A9]">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  We stop taking phone orders 30 minutes before closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Notified When Online Ordering Launches</h2>
          <p className="text-xl mb-8">Be the first to know when our online ordering system goes live!</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#4CD3A9]"
              />
              <button className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90">
                Notify Me
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              We'll never spam you. One email when we launch, that's it!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
