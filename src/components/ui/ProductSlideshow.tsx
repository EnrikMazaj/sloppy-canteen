'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SlideItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    name: "The Classic Sloppy",
    description: "Our signature burger with special sauce, lettuce, cheese, pickles, onions on a sesame seed bun",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&crop=center",
    category: "burgers"
  },
  {
    id: 2,
    name: "BBQ Bacon Deluxe",
    description: "Beef patty, crispy bacon, BBQ sauce, cheddar cheese, onion rings, lettuce",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop&crop=center",
    category: "burgers"
  },
  {
    id: 3,
    name: "Chicken Deluxe",
    description: "Crispy chicken breast, avocado, bacon, lettuce, honey mustard on brioche",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1606755962773-d324e2d53352?w=800&h=600&fit=crop&crop=center",
    category: "sandwiches"
  },
  {
    id: 4,
    name: "Grilled Chicken Club",
    description: "Grilled chicken, bacon, lettuce, tomato, mayo on sourdough",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center",
    category: "sandwiches"
  },
  {
    id: 5,
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese sauce, bacon bits, green onions, sour cream",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&crop=center",
    category: "sides"
  }
];

export default function ProductSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      {/* Main slide display */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image side */}
              <div className="relative h-full">
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content side */}
              <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#4CD3A9] text-black px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {slide.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {slide.name}
                  </h3>
                  
                  <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-bold text-[#4CD3A9]">
                      {slide.price}
                    </span>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link
                      href="/menu"
                      className="bg-[#4CD3A9] text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                    >
                      Order Now
                    </Link>
                    <Link
                      href="/menu"
                      className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-[#4CD3A9]' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#4CD3A9]' : 'bg-gray-400'}`} />
      </div>
    </div>
  );
}
