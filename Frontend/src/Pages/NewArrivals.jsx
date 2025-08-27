import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import img from '../assets/images/img6.jpeg'
import img1 from '../assets/images/img7.webp'
import img2 from '../assets/images/img8.jpeg'
import img3 from '../assets/images/img9.jpeg'
import img4 from '../assets/images/img10.jpeg'
import img5 from '../assets/images/img11.jpeg'
import img6 from '../assets/images/img12.jpeg'
import img7 from '../assets/images/img13.jpeg'

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Cotton-Linen Stripes: Coral",
      category: "Cotton Linen Shirts",
      price: 1599,
      image: img, 
      badge: "LINEN BLEND"
    },
    {
      id: 2,
      name: "Swim Shorts: Anchor",
      category: "Men Swimwear Shorts",
      price: 1299,
      image: img1,
      badge: null
    },
    {
      id: 3,
      name: "Harry Potter: School Of Magic",
      category: "Men Oversized Hoodies",
      price: 2099,
      image: img2,
      badge: "PREMIUM HEAVY FLEECE"
    },
    {
      id: 4,
      name: "TSS Originals: Pretend I Care",
      category: "T-Shirts",
      price: 799,
      image: img3,
      badge: "OVERSIZED FIT"
    },
    {
      id: 5,
      name: "Classic Denim: Blue Wash",
      category: "Denim Jeans",
      price: 2499,
      image: img4,
      badge: "SLIM FIT"
    },
    {
      id: 6,
      name: "Summer Polo: Navy",
      category: "Polo T-Shirts",
      price: 1399,
      image: img5,
      badge: "COTTON BLEND"
    },
    {
      id: 7,
      name: "Cargo Shorts: Khaki",
      category: "Men Casual Shorts",
      price: 1799,
      image: img6,
      badge: "RELAXED FIT"
    },
    {
      id: 8,
      name: "Graphic Tee: Street Style",
      category: "Casual T-Shirts",
      price: 899,
      image: img7,
      badge: "LIMITED EDITION"
    }
  ];

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; 
      if (window.innerWidth >= 768) return 3;  
      if (window.innerWidth >= 640) return 2;  
      return 1; 
    }
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  const maxIndex = Math.max(0, products.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NEW ARRIVALS
          </h2>
        </div>

        <div className="relative">
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 shadow-md"
            disabled={currentIndex === 0}
          >
            <HiChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 shadow-md"
            disabled={currentIndex === maxIndex}
          >
            <HiChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3"
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                    
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {product.category}
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        ₹ {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;