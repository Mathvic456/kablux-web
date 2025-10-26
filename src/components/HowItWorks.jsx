import React from "react";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaClock,
  FaGift,
  FaShieldAlt,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="w-full h-300 bg-black text-white py-20 px-6 md:px-16 lg:px-24 text-center">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Drive with Kablux. Earn More. <span className="text-yellow-400">Live Free.</span>
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-12">
        We put drivers first. With fair commissions, instant payouts, and flexible hours,
        Kablux is the ride-hailing platform that truly works for you.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-xl py-8 px-4 shadow-md flex flex-col items-center">
          <FaMoneyBillWave className="text-3xl text-yellow-400 mb-3" />
          <h4 className="font-semibold mb-2">Fast Payments</h4>
          <p className="text-sm text-gray-600">Daily cash-outs or instant wallet withdrawals.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-xl py-8 px-4 shadow-md flex flex-col items-center">
          <FaChartLine className="text-3xl text-yellow-400 mb-3" />
          <h4 className="font-semibold mb-2">Higher Earnings</h4>
          <p className="text-sm text-gray-600">Lower commissions mean you keep more.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black rounded-xl py-8 px-4 shadow-md flex flex-col items-center">
          <FaClock className="text-3xl text-yellow-400 mb-3" />
          <h4 className="font-semibold mb-2">Freedom of Time</h4>
          <p className="text-sm text-gray-600">Drive when you want, where you want.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-black rounded-xl py-8 px-4 shadow-md flex flex-col items-center">
          <FaGift className="text-3xl text-yellow-400 mb-3" />
          <h4 className="font-semibold mb-2">More Opportunities</h4>
          <p className="text-sm text-gray-600">
            Earn extra with convoy and premium-security trips.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white text-black rounded-xl py-8 px-4 shadow-md flex flex-col items-center">
          <FaShieldAlt className="text-3xl text-yellow-400 mb-3" />
          <h4 className="font-semibold mb-2">Safe Driving Environment</h4>
          <p className="text-sm text-gray-600">
            Rider verification and 24/7 driver support.
          </p>
        </div>
      </div>

      {/* How Kablux Works */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">
          How Kablux <span className="text-yellow-400">Works</span>
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          <span className="font-bold text-white">1</span> Open Kablux App.{" "}
          <span className="font-bold text-white">2</span> Set your destination.{" "}
          <span className="font-bold text-white">3</span> Choose or agree on your fare.{" "}
          <span className="font-bold text-white">4</span> Sit back and enjoy the ride.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
