import React, { useState } from 'react';
import { 
  HiMenu, 
  HiSearch, 
  HiUser, 
  HiHeart, 
  HiShoppingBag, 
  HiX 
} from 'react-icons/hi';

const Header = () => {
  const [activeNav, setActiveNav] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['HOME', 'MEN', 'WOMEN', 'SNEAKERS', 'ACCESSORIES', 'SALE'];

  return (
    <>

      <header className="bg-white fixed w-full z-50 shadow-md">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
            >
              <HiMenu className="h-6 w-6" />
            </button>

            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`px-3 py-2 text-sm font-medium ${
                    activeNav === item
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-red-600">
                <HiUser className="h-6 w-6" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-red-600">
                <HiShoppingBag className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white">

            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 border-b">
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <nav className="p-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveNav(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-lg font-medium rounded ${
                    activeNav === item
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;