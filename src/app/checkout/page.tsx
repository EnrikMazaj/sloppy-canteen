'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface OrderDetails {
  location: string;
  orderType: 'pickup' | 'delivery';
  specialInstructions: string;
}

const locations = [
  { id: 'downtown', name: 'Downtown Location', address: '123 Main Street', phone: '(555) 123-4567' },
  { id: 'westside', name: 'Westside Location', address: '456 West Avenue', phone: '(555) 234-5678' },
  { id: 'eastside', name: 'Eastside Location', address: '789 East Boulevard', phone: '(555) 345-6789' },
];

export default function CheckoutPage() {
  const { items, total, itemCount, clearCart } = useCart();
  const router = useRouter();
  
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    location: '',
    orderType: 'pickup',
    specialInstructions: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-800 mb-6">Add some items to your cart before checkout!</p>
          <Link
            href="/menu"
            className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!customerInfo.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!customerInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!customerInfo.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) newErrors.email = 'Email is invalid';
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!orderDetails.location) newErrors.location = 'Please select a location';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate order number
    const orderNumber = Math.floor(Math.random() * 1000000);
    
    // Store order details for confirmation
    const orderSummary = {
      orderNumber,
      customerInfo,
      orderDetails,
      items,
      total,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem('last-order', JSON.stringify(orderSummary));
    
    // Clear cart
    clearCart();
    
    // Redirect to confirmation
    router.push(`/order-confirmation?orderNumber=${orderNumber}`);
  };

  const tax = total * 0.08; // 8% tax
  const finalTotal = total + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Forms */}
            <div className="space-y-8">
              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.firstName}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, firstName: e.target.value }))}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.lastName}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, lastName: e.target.value }))}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                
                {/* Order Type */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="orderType"
                        value="pickup"
                        checked={orderDetails.orderType === 'pickup'}
                        onChange={(e) => setOrderDetails(prev => ({ ...prev, orderType: e.target.value as 'pickup' | 'delivery' }))}
                        className="mr-2"
                      />
                      Pickup
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="orderType"
                        value="delivery"
                        checked={orderDetails.orderType === 'delivery'}
                        onChange={(e) => setOrderDetails(prev => ({ ...prev, orderType: e.target.value as 'pickup' | 'delivery' }))}
                        className="mr-2"
                        disabled
                      />
                      Delivery (Coming Soon)
                    </label>
                  </div>
                </div>

                {/* Location Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location *
                  </label>
                  <select
                    value={orderDetails.location}
                    onChange={(e) => setOrderDetails(prev => ({ ...prev, location: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name} - {location.address}
                      </option>
                    ))}
                  </select>
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    value={orderDetails.specialInstructions}
                    onChange={(e) => setOrderDetails(prev => ({ ...prev, specialInstructions: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9]"
                    rows={3}
                    placeholder="Any special requests or modifications..."
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-800">Qty: {item.quantity} × ${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
                      {(item.spicy || item.vegetarian) && (
                        <div className="flex mt-1">
                          {item.spicy && <span className="text-red-500 text-xs mr-1">🌶️</span>}
                          {item.vegetarian && <span className="text-green-500 text-xs">🌱</span>}
                        </div>
                      )}
                    </div>
                    <span className="font-medium">${item.totalPrice.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({itemCount} items):</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-2">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Placing Order...' : 'Place Order'}
                </button>
                
                <Link
                  href="/menu"
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors text-center block"
                >
                  Back to Menu
                </Link>
              </div>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Payment will be collected at pickup. We accept cash and all major cards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
