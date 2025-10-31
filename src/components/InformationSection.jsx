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
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {/* Left side */}
      <div className="flex flex-col">
        <img
          src={Smile}
          alt="Driver smiling"
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />

        {/* Title + underline */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 text-left">
          Key Features for Riders:
        </h2>
        <div className="w-16 h-1 bg-yellow-400 rounded mb-6"></div>

        <p className="text-gray-600 mb-10 text-lg leading-relaxed text-left">
          With Kablux, moving around is stress-free. We combine comfort,
          flexibility, and affordability to give you the ride you deserve.
        </p>

        {/* Grid of features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* 1 */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <FaHandshake className="text-2xl md:text-3xl text-gray-400" />
            <h4 className="font-semibold text-gray-800 text-lg md:text-xl">
              Choose Your Fare:
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Go fixed or negotiate directly with drivers.
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <FaCarSide className="text-2xl md:text-3xl text-gray-400" />
            <h4 className="font-semibold text-gray-800 text-lg md:text-xl">
              Ride Options for Every Need:
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Budget, premium, convoy, or security-assisted rides.
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <FaHeartbeat className="text-2xl md:text-3xl text-gray-400" />
            <h4 className="font-semibold text-gray-800 text-lg md:text-xl">
              Travel with Confidence:
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Share trips with loved ones, track your driver in real-time, and
              hit SOS if you ever need help.
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <FaMoneyCheckAlt className="text-2xl md:text-3xl text-gray-400" />
            <h4 className="font-semibold text-gray-800 text-lg md:text-xl">
              Pay Your Way:
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Cash, card, wallet, or bank transfer — your convenience comes
              first.
            </p>
          </div>

          {/* 5 */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <FaGift className="text-2xl md:text-3xl text-gray-400" />
            <h4 className="font-semibold text-gray-800 text-lg md:text-xl">
              Earn Rewards:
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Every ride earns you points you can redeem for discounts.
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center">
        <div className="space-y-8">
          {/* Why Kablux */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Why Kablux
            </h3>
            <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are more than a ride-hailing service. We are building Africa's
              mobility revolution – affordable, safe, and community-driven.
            </p>
          </div>

          {/* Our Mission */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h3>
            <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To transform transportation in Africa by making rides safer, fairer,
              and more rewarding – for riders and drivers alike.
            </p>
          </div>

          <img
            src={Customer}
            alt="Happy passengers"
            className="w-full h-64 object-cover rounded-2xl my-4"
          />

          {/* Emotional Pool */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Emotional Pool
            </h3>
            <div className="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
            <p className="italic text-gray-500 text-lg leading-relaxed mb-6">
              No more overpaying. No more guessing. With Kablux, you ride on your
              terms – safe, fair, and hassle-free.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-left space-y-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-medium py-4 px-8 rounded-lg w-full md:w-auto text-lg">
              Download Kablux today and move smarter.
            </button>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
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
        </div>
      </div>
    </section>
  );
};

export default InformationSection;