'use client';

import Link from 'next/link';
import { useState } from 'react';
import CartIcon from '@/components/cart/CartIcon';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 mr-2 bg-[#4CD3A9] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">SC</span>
            </div>
            <span className="text-2xl font-bold">Sloppy Canteen</span>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className="hover:text-[#4CD3A9]">Home</Link></li>
              <li><Link href="/menu" className="hover:text-[#4CD3A9]">Menu</Link></li>
              <li><Link href="/locations" className="hover:text-[#4CD3A9]">Locations</Link></li>
              <li><Link href="/about" className="hover:text-[#4CD3A9]">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#4CD3A9]">Contact</Link></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/menu" className="bg-[#4CD3A9] text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90">
              Order Now
            </Link>
            <CartIcon onClick={() => setIsCartOpen(true)} />
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
