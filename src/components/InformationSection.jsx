import React, { useState } from "react";
import {
  FaHandshake,
  FaCarSide,
  FaHeartbeat,
  FaGift,
  FaMoneyCheckAlt,
  FaTimes,
} from "react-icons/fa";
import Smile from '../assets/Smile.jpg';
import Customer from '../assets/Customer.png';

const InformationSection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleJoinWaitlist = async (e) => {
    e.preventDefault();
    
    // Validate email
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Joined waitlist with email:", email);
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset after success
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
      setIsWaitlistModalOpen(false);
      setError("");
    }, 2000);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  const WaitlistModal = () => {
    if (!isWaitlistModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
          {/* Close Button */}
          <button
            onClick={() => setIsWaitlistModalOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            type="button"
          >
            <FaTimes size={20} />
          </button>
          
          {/* Modal Content */}
          <div className="text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Coming Soon!
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 mb-2">
              Be the first to download Kablux when we launch in your city!
            </p>
            
            <p className="text-gray-600 mb-6">
              Join the waitlist to get early access and exclusive launch offers.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleJoinWaitlist}>
                {/* Email Input */}
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isLoading}
                    autoComplete="email"
                    inputMode="email"
                  />
                  {error && (
                    <p className="text-red-500 text-xs mt-1 text-left">{error}</p>
                  )}
                </div>
                
                {/* Join Waitlist Button */}
                <button
                  type="submit"
                  disabled={!email || isLoading}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-600 font-semibold">
                  You're on the list! We'll notify you when Kablux is available for download.
                </p>
              </div>
            )}
            
            {/* Additional Info */}
            <p className="text-xs text-gray-500 mt-4">
              We'll only use your email to notify you about our app launch and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    );
  };

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
            <button 
              onClick={() => setIsWaitlistModalOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-medium py-4 px-8 rounded-lg w-full md:w-auto text-lg"
            >
              Download Kablux today and move smarter.
            </button>

            {/* App Store Images - Always side by side */}
            <div className="flex flex-row gap-4 justify-start">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 sm:h-14 md:h-16 cursor-pointer hover:scale-105 transition-transform"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12 sm:h-14 md:h-16 cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal />
    </section>
  );
};

export default InformationSection;