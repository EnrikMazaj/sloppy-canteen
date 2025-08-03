import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sloppy Canteen',
  description: 'Learn about Sloppy Canteen\'s story, mission, and commitment to serving delicious fast food with fresh ingredients.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sloppy Canteen</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Where fresh ingredients meet bold flavors in a casual, welcoming atmosphere.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2018, Sloppy Canteen started as a dream to bring high-quality, 
                  affordable fast food to our community. What began as a single location has 
                  grown into a beloved local chain with 3 thriving restaurants and a 4th on the way.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our name might suggest messiness, but everything we do is carefully crafted. 
                  From hand-formed burger patties to freshly baked buns, we believe that 
                  fast food doesn't have to mean compromising on quality.
                </p>
                <p className="text-lg text-gray-700">
                  Every sandwich, every side, and every smile is made with care because 
                  we're not just serving food – we're serving our neighbors, our friends, 
                  and our extended family.
                </p>
              </div>
              
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-4">🏪</div>
                  <p className="text-lg">Our first location</p>
                  <p className="text-sm">Photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-12">
              To serve delicious, fresh food that brings people together in a welcoming 
              environment where everyone feels like family.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🥘</div>
                <h3 className="text-xl font-bold mb-4">Fresh Ingredients</h3>
                <p className="text-gray-600">
                  We source our ingredients locally whenever possible and never compromise on freshness.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold mb-4">Community First</h3>
                <p className="text-gray-600">
                  We're proud to be part of the community and support local events and organizations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-bold mb-4">Sustainable Practices</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental impact through sustainable packaging and practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#4CD3A9] text-black p-3 rounded-full font-bold text-xl min-w-[60px] h-[60px] flex items-center justify-center">
                  Q
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p className="text-gray-700">
                    Every item on our menu is prepared with care using the finest ingredients. 
                    We never cut corners when it comes to the food we serve.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#4CD3A9] text-black p-3 rounded-full font-bold text-xl min-w-[60px] h-[60px] flex items-center justify-center">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Service</h3>
                  <p className="text-gray-700">
                    Our team is dedicated to providing friendly, fast service that makes 
                    every visit enjoyable. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#4CD3A9] text-black p-3 rounded-full font-bold text-xl min-w-[60px] h-[60px] flex items-center justify-center">
                  C
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-700">
                    We believe in giving back to the communities that support us through 
                    local partnerships, sponsorships, and community events.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#4CD3A9] text-black p-3 rounded-full font-bold text-xl min-w-[60px] h-[60px] flex items-center justify-center">
                  I
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    We're always looking for new ways to improve our menu, service, 
                    and overall experience while staying true to our core values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
                <p className="text-[#4CD3A9] font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Mike started Sloppy Canteen with a passion for great food and community service.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍🍳</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
                <p className="text-[#4CD3A9] font-medium mb-2">Head Chef</p>
                <p className="text-gray-600 text-sm">
                  Sarah brings creativity and culinary expertise to every item on our menu.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold mb-2">David Rodriguez</h3>
                <p className="text-[#4CD3A9] font-medium mb-2">Operations Manager</p>
                <p className="text-gray-600 text-sm">
                  David ensures all our locations run smoothly and maintain our high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Sloppy Family</h2>
          <p className="text-xl mb-8">Visit us today and taste the difference that care and quality make.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90">
              View Menu
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
