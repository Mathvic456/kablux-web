import React, { useState } from "react";
import Button from "./Button";
import PixelCar from "./PixelCar";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  const [isRideModalOpen, setIsRideModalOpen] = useState(false);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinWaitlist = async (type) => {
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(`Joined waitlist for ${type} with email:`, email);
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset after success
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
      if (type === 'ride') {
        setIsRideModalOpen(false);
      } else {
        setIsDriveModalOpen(false);
      }
    }, 2000);
  };

  const WaitlistModal = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    const title = type === 'ride' ? "Book A Ride" : "Drive with Kablux";
    const description = type === 'ride' 
      ? "Be the first to ride with Kablux when we launch in your city!"
      : "Join our driver community and be the first to earn with Kablux!";

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Modal Content */}
          <div className="text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {type === 'ride' ? (
                <span className="text-2xl">🚗</span>
              ) : (
                <span className="text-2xl">🚕</span>
              )}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Coming Soon to Your City!
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 mb-2">
              {description}
            </p>
            
            <p className="text-gray-600 mb-6">
              Join the waitlist to be the first to hear when we launch!
            </p>

            {!isSubmitted ? (
              <>
                {/* Email Input */}
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    disabled={isLoading}
                  />
                </div>
                
                {/* Join Waitlist Button */}
                <button
                  onClick={() => handleJoinWaitlist(type)}
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
              </>
            ) : (
              /* Success State */
              <div className="py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-600 font-semibold">
                  You're on the list! We'll be in touch soon.
                </p>
              </div>
            )}
            
            {/* Additional Info */}
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy and will only use your email to notify you about our launch.
            </p>
          </div>
        </div>
      </div>
    );
  };

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
              onClick={() => setIsRideModalOpen(true)}
            />
            <Button
              text="🚕 Drive with Kablux"
              bgColor="bg-white"
              border
              textColor="text-gray-800"
              className="w-full xs:w-auto text-sm sm:text-base"
              onClick={() => setIsDriveModalOpen(true)}
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

      {/* Modals */}
      <WaitlistModal 
        isOpen={isRideModalOpen} 
        onClose={() => setIsRideModalOpen(false)} 
        type="ride" 
      />
      
      <WaitlistModal 
        isOpen={isDriveModalOpen} 
        onClose={() => setIsDriveModalOpen(false)} 
        type="drive" 
      />
    </section>
  );
};

export default Hero;