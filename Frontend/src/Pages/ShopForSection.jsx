import React from 'react';
import img from '../assets/images/img16.jpeg'
import img1 from '../assets/images/fimg1.jpeg'
import img2 from '../assets/images/fimg2.jpeg'

const ShopForSection = () => {
  const categories = [
    {
      id: 1,
      title: "ACCESSORIES",
      mainImage: img,
      thumbnailImage: img,
      bgColor: "bg-red-800",
      accentColor: "bg-red-700"
    },
    {
      id: 2,
      title: "WOMEN",
      mainImage: img1,
      thumbnailImage: img1,
      bgColor: "bg-purple-400",
      accentColor: "bg-purple-500"
    },
    {
      id: 3,
      title: "KIDSWEAR",
      mainImage: img2,
      thumbnailImage: img2,
      bgColor: "bg-yellow-400",
      accentColor: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide mb-4">
            SHOP FOR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-80 lg:h-96">
                
                <div className={`absolute inset-0 ${category.bgColor} opacity-20`} />
                
                <div className="absolute inset-0">
                  <img
                    src={category.mainImage}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-6 right-6 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white/80 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={category.thumbnailImage}
                    alt={`${category.title} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 group-hover:bg-white transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-wider text-center">
                      {category.title}
                    </h3>
                    
                    <div className={`w-12 h-1 ${category.accentColor} mx-auto mt-2 group-hover:w-16 transition-all duration-300`} />
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-lg transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    Shop Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-600 p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wider">
            HOMEGROWN INDIAN BRAND
          </h3>
          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Celebrating authentic Indian culture through contemporary fashion
          </p>
        </div>

      </div>
    </section>
  );
};

export default ShopForSection;