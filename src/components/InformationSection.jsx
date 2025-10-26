import React from "react";
import {
  FaHandshake,
  FaCarSide,
  FaHeartbeat,
  FaGift,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import Smile from '../assets/Smile.jpg';
import Customer from '../assets/Customer.png';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';

const InformationSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left side */}
      <div>
        <img
          src= {Smile}
          alt="Driver smiling"
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />

        {/* Title + underline */}
        <h2 className="text-xl font-semibold mb-2">Key Features for Riders:</h2>
        <div className="w-16 h-1 bg-yellow-400 rounded mb-6"></div>

        <p className="text-gray-600 mb-10">
          With Kablux, moving around is stress-free. We combine comfort,
          flexibility, and affordability to give you the ride you deserve.
        </p>

        {/* Grid of features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* 1 */}
          <div className="flex flex-col items-start space-y-2">
            <FaHandshake className="text-2xl text-gray-400" />
            <h4 className="font-semibold text-gray-800">Choose Your Fare:</h4>
            <p className="text-sm text-gray-600">
              Go fixed or negotiate directly with drivers.
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-start space-y-2">
            <FaCarSide className="text-2xl text-gray-400" />
            <h4 className="font-semibold text-gray-800">
              Ride Options for Every Need:
            </h4>
            <p className="text-sm text-gray-600">
              Budget, premium, convoy, or security-assisted rides.
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-start space-y-2">
            <FaHeartbeat className="text-2xl text-gray-400" />
            <h4 className="font-semibold text-gray-800">
              Travel with Confidence:
            </h4>
            <p className="text-sm text-gray-600">
              Share trips with loved ones, track your driver in real-time, and
              hit SOS if you ever need help.
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-start space-y-2">
            <FaMoneyCheckAlt className="text-2xl text-gray-400" />
            <h4 className="font-semibold text-gray-800">Pay Your Way:</h4>
            <p className="text-sm text-gray-600">
              Cash, card, wallet, or bank transfer — your convenience comes
              first.
            </p>
          </div>

          {/* 5 */}
          <div className="flex flex-col items-start space-y-2">
            <FaGift className="text-2xl text-gray-400" />
            <h4 className="font-semibold text-gray-800">Earn Rewards:</h4>
            <p className="text-sm text-gray-600">
              Every ride earns you points you can redeem for discounts.
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-2">Why Kablux</h3>
        <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
        <p className="text-gray-600 mb-6">
          We are more than a ride-hailing service. We are building Africa’s
          mobility revolution – affordable, safe, and community-driven.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
        <p className="text-gray-600 mb-6">
          To transform transportation in Africa by making rides safer, fairer,
          and more rewarding – for riders and drivers alike.
        </p>

        <img
          src={Customer}
          alt="Happy passengers"
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />

        <h3 className="text-2xl font-semibold mb-2">Emotional Pool</h3>
        <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
        <p className="italic text-gray-500 mb-6">
          No more overpaying. No more guessing. With Kablux, you ride on your
          terms – safe, fair, and hassle-free.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-medium py-3 px-6 rounded-lg w-full md:w-auto mb-4">
          Download Kablux today and move smarter.
        </button>

        <div className="flex gap-4">
          <img src={Google} alt="Google Play" className="h-10" />
          <img src={Apple} alt="App Store" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
