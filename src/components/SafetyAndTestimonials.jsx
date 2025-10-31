import React from "react";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import Testimonials from "./Testimonials";
import Driver from '../assets/Driver.png';

const SafetyAndTestimonials = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Safety Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaShieldAlt className="text-yellow-500" />
              Your Safety. Our Priority.
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded mb-6"></div>
          </div>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>Verified drivers with background checks.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>In-app SOS button with instant emergency alerts.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>Trip sharing with friends and family.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>Live GPS monitoring for every ride.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span>Special security rides with convoy or armed escort when needed.</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
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