import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locations | Sloppy Canteen',
  description: 'Find our 3 Sloppy Canteen locations and learn about our upcoming 4th location.',
};

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  features: string[];
  comingSoon?: boolean;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Downtown",
    address: "123 Main Street, Downtown District, City, State 12345",
    phone: "(555) 123-4567",
    hours: {
      weekdays: "Monday - Friday: 10:00 AM - 10:00 PM",
      weekends: "Saturday - Sunday: 11:00 AM - 11:00 PM"
    },
    features: ["Drive-through", "Outdoor seating", "Free WiFi", "Wheelchair accessible"]
  },
  {
    id: 2,
    name: "Westside",
    address: "456 West Avenue, West Plaza, City, State 12345",
    phone: "(555) 234-5678",
    hours: {
      weekdays: "Monday - Friday: 10:00 AM - 10:00 PM",
      weekends: "Saturday - Sunday: 11:00 AM - 11:00 PM"
    },
    features: ["Drive-through", "Kids play area", "Free WiFi", "Wheelchair accessible", "Party room"]
  },
  {
    id: 3,
    name: "Eastside",
    address: "789 East Boulevard, East Gate Mall, City, State 12345",
    phone: "(555) 345-6789",
    hours: {
      weekdays: "Monday - Friday: 10:00 AM - 10:00 PM",
      weekends: "Saturday - Sunday: 11:00 AM - 11:00 PM"
    },
    features: ["Mall location", "Food court seating", "Free WiFi", "Wheelchair accessible"]
  },
  {
    id: 4,
    name: "Northside",
    address: "1010 North Road, North Hills Center, City, State 12345",
    phone: "Coming Soon!",
    hours: {
      weekdays: "Opening Spring 2024",
      weekends: "Opening Spring 2024"
    },
    features: ["Drive-through", "Outdoor patio", "Free WiFi", "Wheelchair accessible", "Mobile order pickup"],
    comingSoon: true
  }
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Visit us at any of our 3 current locations, or stay tuned for our 4th location opening soon!
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className={`rounded-lg shadow-lg overflow-hidden ${
                  location.comingSoon ? 'bg-gradient-to-br from-[#4CD3A9] to-[#3BB89A] text-black' : 'bg-white'
                }`}
              >
                {location.comingSoon && (
                  <div className="bg-black text-white text-center py-2 font-bold">
                    🎉 COMING SOON! 🎉
                  </div>
                )}
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1 flex items-center">
                        📍 Address
                      </h3>
                      <p className={location.comingSoon ? 'text-black' : 'text-gray-600'}>
                        {location.address}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1 flex items-center">
                        📞 Phone
                      </h3>
                      <p className={location.comingSoon ? 'text-black' : 'text-gray-600'}>
                        {location.phone}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1 flex items-center">
                        🕒 Hours
                      </h3>
                      <p className={location.comingSoon ? 'text-black' : 'text-gray-600'}>
                        {location.hours.weekdays}
                      </p>
                      <p className={location.comingSoon ? 'text-black' : 'text-gray-600'}>
                        {location.hours.weekends}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        ✨ Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, index) => (
                          <span 
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              location.comingSoon 
                                ? 'bg-black text-white' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {!location.comingSoon && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="bg-[#4CD3A9] text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90">
                        Get Directions
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50">
                        Call Now
                      </button>
                    </div>
                  )}
                  
                  {location.comingSoon && (
                    <div className="mt-6">
                      <button className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800">
                        Get Updates
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us on the Map</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-lg">Interactive map will be integrated here</p>
              <p className="text-sm">Google Maps or similar mapping service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Locations?</h2>
          <p className="text-xl mb-8">Contact us for more information about any of our locations.</p>
          <button className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
