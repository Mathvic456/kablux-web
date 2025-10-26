import React from "react";
import Car from '../assets/Car.png';

const PixelCar = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Car Image */}
      <img
        src={Car}
        alt="Kablux Car"
        className="w-48 xs:w-56 sm:w-64 md:w-80 lg:w-96 xl:w-[400px] object-contain transition-all duration-300"
      />
      
      {/* App Store Buttons */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 cursor-pointer hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default PixelCar;