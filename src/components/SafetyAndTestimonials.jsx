import React from "react";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import Testimonials from "./Testimonials";
import Driver from '../assets/Driver.png';

const SafetyAndTestimonials = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Safety Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
        {/* Text Content - Left Aligned */}
        <div className="space-y-6 text-left">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3 text-left">
              <FaShieldAlt className="text-yellow-500" />
              Your Safety. Our Priority.
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded mb-6 ml-0"></div>
          </div>

          <ul className="space-y-4 text-gray-700 text-left">
            <li className="flex items-start gap-3 text-left">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-base">Verified drivers with background checks.</span>
            </li>
            <li className="flex items-start gap-3 text-left">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-base">In-app SOS button with instant emergency alerts.</span>
            </li>
            <li className="flex items-start gap-3 text-left">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-base">Trip sharing with friends and family.</span>
            </li>
            <li className="flex items-start gap-3 text-left">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-base">Live GPS monitoring for every ride.</span>
            </li>
            <li className="flex items-start gap-3 text-left">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-base">Special security rides with convoy or armed escort when needed.</span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Driver}
            alt="Happy driver"
            className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Testimonials */}
      {/* <Testimonials /> */}
    </section>
  );
};

export default SafetyAndTestimonials;