import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiSnapchat } from 'react-icons/si';
import { MdKeyboardReturn, MdAccountCircle } from 'react-icons/md';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';

const Footer = () => {
  const footerSections = [
    {
      title: "NEED HELP",
      titleColor: "text-red-600",
      links: [
        "Contact Us",
        "Track Order", 
        "Returns & Refunds",
        "FAQs",
        "My Account"
      ]
    },
    {
      title: "COMPANY",
      titleColor: "text-red-600", 
      links: [
        "About Us",
        "Investor Relation",
        "Careers",
        "Gift Vouchers",
        "Community Initiatives"
      ]
    },
    {
      title: "MORE INFO",
      titleColor: "text-red-600",
      links: [
        "T&C",
        "Privacy Policy", 
        "Sitemap",
        "Get Notified",
        "Blogs"
      ]
    },
    {
      title: "STORE NEAR ME",
      titleColor: "text-red-600",
      links: [
        "Mumbai",
        "Pune",
        "Bangalore", 
        "Hubbali",
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, color: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
    { icon: FaInstagram, color: "bg-gradient-to-r from-purple-500 to-pink-500", hoverColor: "hover:from-purple-600 hover:to-pink-600" },
    { icon: SiSnapchat, color: "bg-yellow-400", hoverColor: "hover:bg-yellow-500" },
    { icon: FaTwitter, color: "bg-gray-900", hoverColor: "hover:bg-black" }
  ];

  return (
    <footer className="bg-gray-100 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Over <span className="text-red-600">6 Million</span> Happy Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className={`text-lg font-bold ${section.titleColor} mb-6 tracking-wide`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 py-8 border-t border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <RiMoneyRupeeCircleLine className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-gray-700 font-medium">COD Available</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MdKeyboardReturn className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-700 font-medium">30 Days Easy Returns & Exchanges</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MdAccountCircle className="w-6 h-6 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">
              EXPERIENCE THE SOULED STORE APP
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="inline-block hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 min-w-[180px]">
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="inline-block hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 min-w-[180px]">
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} The Souled Store. All rights reserved.
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm mr-3">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 ${social.color} ${social.hoverColor} rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
