import React from "react";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import Testimonials from "./Testimonials";
import Driver from '../assets/Driver.png';

const SafetyAndTestimonials = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Safety Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaShieldAlt className="text-yellow-500" />
            Your Safety. Our Priority.
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded mb-6"></div>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              Verified drivers with background checks.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              In-app SOS button with instant emergency alerts.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              Trip sharing with friends and family.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              Live GPS monitoring for every ride.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              Special security rides with convoy or armed escort when needed.
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src={Driver}
            alt="Happy driver"
            className="w-full max-w-md h-64 object-cover rounded-2xl shadow"
          />
        </div>
      </div>

      {/* Testimonials */}
      {/* <Testimonials /> */}
    </section>
  );
};

export default SafetyAndTestimonials;
