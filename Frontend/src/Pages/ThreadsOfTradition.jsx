import React, { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import img from '../assets/images/timg1.avif'
import img1 from '../assets/images/timg2.avif'
import img2 from '../assets/images/timg3.avif'
import img3 from '../assets/images/timg4.avif'

const ThreadsOfTradition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const traditions = [
    {
      id: 1,
      image: img
    },
    {
      id: 2,
      image: img1
    },
    {
      id: 3,
      image: img2
    },
    {
      id: 4,
      image: img3
    },
  ];

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; 
      if (window.innerWidth >= 768) return 2;  
      return 1; 
    }
    return 3;
  };

  const maxIndex = Math.max(0, traditions.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      const newMaxIndex = Math.max(0, traditions.length - newItemsPerView);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, traditions.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  return (
    <section className=" bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wider mb-4">
            THREADS OF TRADITION
          </h2>
        </div>

        <div className="relative">
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white"
            disabled={currentIndex === 0}
          >
            <IoChevronBack className="w-7 h-7 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white"
            disabled={currentIndex === maxIndex}
          >
            <IoChevronForward className="w-7 h-7 text-gray-800" />
          </button>

          <div className="overflow-hidden rounded-l">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {traditions.map((tradition) => (
                <div
                  key={tradition.id}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 px-3"
                >
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    
                    <img
                      src={tradition.image}
                      alt={tradition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    /> 
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

export default ThreadsOfTradition;