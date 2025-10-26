import React from "react";
import Button from "./Button";
import PixelCar from "./PixelCar";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 xs:px-6 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-start mt-8 lg:mt-0">
        {/* Social Icons - Desktop */}
        <div className="hidden lg:block">
          <SocialIcons />
        </div>

        <div className="w-full space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight sm:leading-snug text-center lg:text-left">
            Africa Moves with{" "}
            <span className="text-yellow-500 block lg:inline">Kablux</span>
          </h1>
          
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-0">
            A smarter, safer, and more affordable way to get around.
            With Kablux, every ride puts you in control whether you're
            a rider or a driver.
          </p>

          <div className="flex flex-col xs:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              text="🚗 Book A Ride Now"
              bgColor="bg-yellow-400"
              textColor="text-white"
              className="w-full xs:w-auto text-sm sm:text-base"
            />
            <Button
              text="🚕 Drive with Kablux"
              bgColor="bg-white"
              border
              textColor="text-gray-800"
              className="w-full xs:w-auto text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <PixelCar />
      </div>

      {/* Social Icons - Mobile */}
      <div className="block lg:hidden w-full">
        <SocialIcons />
      </div>
    </section>
  );
};

export default Hero;