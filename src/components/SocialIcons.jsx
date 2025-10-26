import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  const icons = [
    { icon: <FaFacebookF />, link: "#", label: "Facebook" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" },
  ];

  return (
    <>
      {/* Desktop Social Icons - Vertical */}
      <div className="hidden lg:flex flex-col items-center space-y-4 lg:space-y-6 border-l border-gray-200 pl-4 lg:pl-6 mr-4 lg:mr-6">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-500 hover:text-yellow-500 transition-all duration-300 text-base lg:text-lg p-2 rounded-full hover:bg-gray-100"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Tablet Social Icons - Horizontal */}
      <div className="hidden md:flex lg:hidden justify-center space-x-4 py-4 border-t border-gray-200 mt-6">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-500 hover:text-yellow-500 transition-all duration-300 text-lg p-3 rounded-full hover:bg-gray-100"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Mobile Social Icons - Horizontal with better spacing */}
      <div className="flex md:hidden justify-center space-x-8 py-6 border-t border-gray-200 mt-8 bg-gray-50 rounded-lg mx-4">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-600 hover:text-yellow-500 transition-all duration-300 text-xl p-3 rounded-full hover:bg-white hover:shadow-md transform hover:scale-110"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;