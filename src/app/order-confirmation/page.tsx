'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface OrderSummary {
  orderNumber: number;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  orderDetails: {
    location: string;
    orderType: string;
    specialInstructions: string;
  };
  items: Array<{
    id: number;
    name: string;
    quantity: number;
    totalPrice: number;
    spicy?: boolean;
    vegetarian?: boolean;
  }>;
  total: number;
  timestamp: string;
}

const locations = [
  { id: 'downtown', name: 'Downtown Location', address: '123 Main Street', phone: '(555) 123-4567' },
  { id: 'westside', name: 'Westside Location', address: '456 West Avenue', phone: '(555) 234-5678' },
  { id: 'eastside', name: 'Eastside Location', address: '789 East Boulevard', phone: '(555) 345-6789' },
];

export default function OrderConfirmationPage() {
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('orderNumber');

  useEffect(() => {
    const savedOrder = localStorage.getItem('last-order');
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder);
        if (order.orderNumber.toString() === orderNumber) {
          setOrderSummary(order);
        } else {
          router.push('/menu');
        }
      } catch (error) {
        console.error('Error loading order:', error);
        router.push('/menu');
      }
    } else {
      router.push('/menu');
    }
  }, [orderNumber, router]);

  if (!orderSummary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4CD3A9] mx-auto mb-4"></div>
          <p className="text-gray-800">Loading order details...</p>
        </div>
      </div>
    );
  }

  const selectedLocation = locations.find(loc => loc.id === orderSummary.orderDetails.location);
  const tax = orderSummary.total * 0.08;
  const finalTotal = orderSummary.total + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
            <p className="text-xl text-gray-800 mb-4">
              Thank you, {orderSummary.customerInfo.firstName}!
            </p>
            <div className="bg-[#4CD3A9] text-black p-4 rounded-lg">
              <p className="font-semibold">Your Order Number:</p>
              <p className="text-2xl font-bold">#{orderSummary.orderNumber}</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            
            {/* Customer Info */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">Customer Information</h3>
              <p>{orderSummary.customerInfo.firstName} {orderSummary.customerInfo.lastName}</p>
              <p>{orderSummary.customerInfo.email}</p>
              <p>{orderSummary.customerInfo.phone}</p>
            </div>

            {/* Pickup Location */}
            {selectedLocation && (
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Pickup Location</h3>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">{selectedLocation.name}</p>
                  <p>{selectedLocation.address}</p>
                  <p>Phone: {selectedLocation.phone}</p>
                </div>
              </div>
            )}

            {/* Special Instructions */}
            {orderSummary.orderDetails.specialInstructions && (
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Special Instructions</h3>
                <p className="bg-gray-50 p-3 rounded">{orderSummary.orderDetails.specialInstructions}</p>
              </div>
            )}
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            
            <div className="space-y-3">
              {orderSummary.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start border-b pb-3">
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-800">Quantity: {item.quantity}</p>
                    {(item.spicy || item.vegetarian) && (
                      <div className="flex mt-1">
                        {item.spicy && <span className="text-red-500 text-xs mr-1" title="Spicy">🌶️</span>}
                        {item.vegetarian && <span className="text-green-500 text-xs" title="Vegetarian">🌱</span>}
                      </div>
                    )}
                  </div>
                  <span className="font-medium">${item.totalPrice.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t pt-4 mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${orderSummary.total.toFixed(2)}</span>
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
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">What&apos;s Next?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-2xl mr-3">👨‍🍳</span>
                <div>
                  <p className="font-medium">We&apos;re preparing your order</p>
                                      <p className="text-sm text-gray-800">Our kitchen team will start working on your order right away.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">⏰</span>
                <div>
                  <p className="font-medium">Estimated pickup time: 15-20 minutes</p>
                                      <p className="text-sm text-gray-800">We&apos;ll have your order ready for pickup soon!</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">💳</span>
                <div>
                  <p className="font-medium">Payment at pickup</p>
                                      <p className="text-sm text-gray-800">Pay when you arrive. We accept cash and all major cards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="flex-1 bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium text-center hover:bg-opacity-90 transition-colors"
            >
              Order Again
            </Link>
            <Link
              href="/"
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium text-center hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Questions about your order? Call the location directly or email us at orders@sloppycanteen.com
          </p>
        </div>
      </div>
    </div>
  );
}
