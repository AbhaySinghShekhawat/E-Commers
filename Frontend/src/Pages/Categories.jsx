import React from 'react';
import img from '../assets/images/img9.jpeg'
import img1 from '../assets/images/img10.jpeg'
import img2 from '../assets/images/img6.jpeg'
import img3 from '../assets/images/img11.jpeg'
import img4 from '../assets/images/img12.jpeg'
import img5 from '../assets/images/img14.jpeg'
import img6 from '../assets/images/img15.jpeg'
import img7 from '../assets/images/img16.jpeg'
import img8 from '../assets/images/img8.jpeg'
import img9 from '../assets/images/img17.jpeg'
import img10 from '../assets/images/img18.jpeg'
import img11 from '../assets/images/img7.webp'

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "T-SHIRTS",
      image: img
    },
    {
      id: 2,
      name: "ALL BOTTOMS",
      image: img1
    },
    {
      id: 3,
      name: "SHIRTS",
      image: img2
    },
    {
      id: 4,
      name: "POLOS",
      image: img3
    },
    {
      id: 5,
      name: "SHORTS",
      image: img4
    },
    {
      id: 6,
      name: "SNEAKERS",
      image: img5
    },
    {
      id: 7,
      name: "TANK TOPS",
      image: img6
    },
    {
      id: 8,
      name: "ACCESSORIES",
      image: img7
    },
    {
      id: 9,
      name: "HOODIES",
      image: img8
    },
    {
      id: 10,
      name: "JACKETS",
      image: img9
    },
    {
      id: 11,
      name: "JEANS",
      image: img10
    },
    {
      id: 12,
      name: "SWIMWEAR",
      image: img11
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            CATEGORIES
          </h2>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-red-600 transition-colors duration-200">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;