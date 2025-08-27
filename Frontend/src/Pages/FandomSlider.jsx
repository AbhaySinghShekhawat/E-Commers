import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import img from '../assets/images/simg1.avif'
import img1 from '../assets/images/simg2.avif'
import img2 from '../assets/images/simg3.avif'
import img3 from '../assets/images/simg4.avif'
import img4 from '../assets/images/simg5.avif'
import img5 from '../assets/images/simg6.avif'
import img6 from '../assets/images/simg7.avif'
import img7 from '../assets/images/simg8.avif'
import img8 from '../assets/images/simg9.avif'

const FandomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fandoms = [
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
    {
      id: 5,
      image: img4
      
    },
    {
      id: 6,
      image: img5
      
    },
    {
      id: 7,
      image: img6
    },
    {
      id: 8,
      image: img7
    },
    {
      id: 9,
      image: img8
    }
  ];

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; 
      if (window.innerWidth >= 768) return 2;  
      return 1; 
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  const maxIndex = Math.max(0, fandoms.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 5000);

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
    <section className="bg-white py-16 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            SHOP BY FANDOM
          </h2>
        </div>

        <div className="relative">
          
          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            disabled={currentIndex === 0}
          >
            <HiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            disabled={currentIndex === maxIndex}
          >
            <HiChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {fandoms.map((fandom) => (
                <div
                  key={fandom.id}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 px-2"
                >

                    <img
                      src={fandom.image}
                      alt={fandom.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />        

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FandomSlider;