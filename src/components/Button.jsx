import React from "react";

const Button = ({ 
  text, 
  bgColor, 
  textColor, 
  border = false, 
  className = "",
  onClick 
}) => {
  return (
    <button
      className={`
        ${bgColor} 
        ${textColor} 
        ${border ? 'border border-gray-300' : ''}
        px-4 sm:px-6 py-2 sm:py-3 
        rounded-lg 
        font-medium 
        hover:shadow-lg 
        transition-all 
        duration-200 
        transform hover:scale-105
        active:scale-95
        ${className}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;