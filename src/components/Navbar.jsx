import React, { useState } from "react";
import Logo from "../assets/Log.png";
import LogTwo from "../assets/LogTwo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // New modal states
  const [showFleetOwnerModal, setShowFleetOwnerModal] = useState(false);
  const [showCorporateModal, setShowCorporateModal] = useState(false);
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);
  const [showWhyChooseUsModal, setShowWhyChooseUsModal] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending email (replace with backend logic)
    setTimeout(() => {
      setIsLoading(false);
      setShowWaitlistModal(false);
      setShowVerificationModal(true);
      setEmail("");
    }, 1500);
  };

  // Modal data
  const modalData = {
    fleetOwner: {
      title: "Become a Fleet Owner",
      content: "Join our network of fleet owners and grow your business with Kablux. We provide the platform, tools, and support you need to manage your vehicle fleet efficiently.",
      features: [
        "Easy vehicle registration and management",
        "Real-time tracking and analytics",
        "Dedicated support team",
        "Competitive commission rates",
        "Flexible payment options"
      ],
      cta: "Apply Now"
    },
    corporate: {
      title: "Corporate Account",
      content: "Streamline your corporate transportation with Kablux. Our corporate solutions are designed to meet the unique needs of businesses of all sizes.",
      features: [
        "Centralized billing and invoicing",
        "Employee management tools",
        "Custom reporting and analytics",
        "Dedicated account manager",
        "Priority support"
      ],
      cta: "Contact Sales"
    },
    howItWorks: {
      title: "How Kablux Works",
      content: "Kablux makes transportation simple and efficient. Here's how our platform works for both riders and fleet owners.",
      steps: [
        {
          title: "Sign Up",
          description: "Create your account in minutes"
        },
        {
          title: "Book a Ride",
          description: "Request a ride through our app or website"
        },
        {
          title: "Get Matched",
          description: "We connect you with the nearest available driver"
        },
        {
          title: "Enjoy Your Ride",
          description: "Track your trip and pay seamlessly"
        }
      ],
      cta: "Learn More"
    },
    whyChooseUs: {
      title: "Why Choose Kablux",
      content: "We're revolutionizing transportation with innovative solutions that benefit both riders and fleet owners.",
      benefits: [
        {
          icon: "🚗",
          title: "Wide Vehicle Selection",
          description: "From economy to premium vehicles"
        },
        {
          icon: "⚡",
          title: "Fast Response Time",
          description: "Quick pickup and reliable service"
        },
        {
          icon: "💰",
          title: "Competitive Pricing",
          description: "Affordable rates with no hidden fees"
        },
        {
          icon: "🛡️",
          title: "Safety First",
          description: "Verified drivers and secure payments"
        },
        {
          icon: "🌍",
          title: "Eco-Friendly",
          description: "Reducing carbon footprint together"
        },
        {
          icon: "📱",
          title: "Easy to Use",
          description: "User-friendly app and platform"
        }
      ],
      cta: "Get Started"
    }
  };

  // Generic Modal Component
  const GenericModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 ease-out scale-95 opacity-0 animate-fade-in-up pointer-events-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl z-10 bg-white rounded-full p-1"
          >
            &times;
          </button>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="flex justify-between items-center py-4 px-4 sm:py-6 sm:px-6 md:px-10 lg:px-20 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={LogTwo}
          alt="Kablux"
          className="h-8 w-auto sm:h-10 md:h-12 lg:h-22 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        />
        <div className="text-yellow-500 font-semibold text-lg sm:text-xl hidden">
          Kablux
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
        <li>
          <button 
            onClick={() => setShowFleetOwnerModal(true)}
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            Become a Fleet Owner
          </button>
        </li>
        <li>
          <button 
            onClick={() => setShowCorporateModal(true)}
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            Corporate Account
          </button>
        </li>
        <li>
          <button 
            onClick={() => setShowHowItWorksModal(true)}
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            How it works
          </button>
        </li>
        <li>
          <button 
            onClick={() => setShowWhyChooseUsModal(true)}
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            Why choose us
          </button>
        </li>
      </ul>

      {/* Join Waitlist Button */}
      <div className="hidden md:flex items-center">
        <button
          onClick={() => setShowWaitlistModal(true)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-6 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/50 border border-yellow-400 hover:border-yellow-500"
        >
          Join Waitlist
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <ul className="space-y-4 text-center">
            <li>
              <button 
                className="block py-2 hover:text-yellow-500 w-full" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowFleetOwnerModal(true);
                }}
              >
                Become a Fleet Owner
              </button>
            </li>
            <li>
              <button 
                className="block py-2 hover:text-yellow-500 w-full" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowCorporateModal(true);
                }}
              >
                Corporate Account
              </button>
            </li>
            <li>
              <button 
                className="block py-2 hover:text-yellow-500 w-full" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowHowItWorksModal(true);
                }}
              >
                How it works
              </button>
            </li>
            <li>
              <button 
                className="block py-2 hover:text-yellow-500 w-full" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowWhyChooseUsModal(true);
                }}
              >
                Why choose us
              </button>
            </li>
          </ul>

          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setShowWaitlistModal(true);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/50 border border-yellow-400 hover:border-yellow-500 mx-4"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
          <div
            className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative transform transition-all duration-500 ease-out scale-95 opacity-0 animate-fade-in-up pointer-events-auto"
          >
            <button
              onClick={() => setShowWaitlistModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Join Our Waitlist</h2>
            <p className="text-gray-500 mb-6 text-sm">Be the first to know when Kablux launches near you.</p>

            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md transition-all flex items-center justify-center ${
                  isLoading ? "cursor-not-allowed opacity-80" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Joining...</span>
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 text-center relative transform transition-all duration-500 ease-out scale-95 opacity-0 animate-fade-in-up pointer-events-auto">
            <button
              onClick={() => setShowVerificationModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">You're on the list!</h2>
            <p className="text-gray-500 mb-6 text-sm">
              A confirmation email has been sent to your inbox.  
              We'll notify you once we go live in your area 🚀
            </p>
            <button
              onClick={() => setShowVerificationModal(false)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-6 rounded-md transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Fleet Owner Modal */}
      <GenericModal 
        isOpen={showFleetOwnerModal} 
        onClose={() => setShowFleetOwnerModal(false)}
        title={modalData.fleetOwner.title}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{modalData.fleetOwner.title}</h2>
        <p className="text-gray-600 mb-6">{modalData.fleetOwner.content}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">What We Offer:</h3>
          <ul className="space-y-3">
            {modalData.fleetOwner.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-105">
          {modalData.fleetOwner.cta}
        </button>
      </GenericModal>

      {/* Corporate Account Modal */}
      <GenericModal 
        isOpen={showCorporateModal} 
        onClose={() => setShowCorporateModal(false)}
        title={modalData.corporate.title}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{modalData.corporate.title}</h2>
        <p className="text-gray-600 mb-6">{modalData.corporate.content}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Features:</h3>
          <ul className="space-y-3">
            {modalData.corporate.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-105">
          {modalData.corporate.cta}
        </button>
      </GenericModal>

      {/* How It Works Modal */}
      <GenericModal 
        isOpen={showHowItWorksModal} 
        onClose={() => setShowHowItWorksModal(false)}
        title={modalData.howItWorks.title}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{modalData.howItWorks.title}</h2>
        <p className="text-gray-600 mb-6">{modalData.howItWorks.content}</p>
        
        <div className="mb-6">
          <div className="space-y-4">
            {modalData.howItWorks.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-105">
          {modalData.howItWorks.cta}
        </button>
      </GenericModal>

      {/* Why Choose Us Modal */}
      <GenericModal 
        isOpen={showWhyChooseUsModal} 
        onClose={() => setShowWhyChooseUsModal(false)}
        title={modalData.whyChooseUs.title}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{modalData.whyChooseUs.title}</h2>
        <p className="text-gray-600 mb-6">{modalData.whyChooseUs.content}</p>
        
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modalData.whyChooseUs.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-105">
          {modalData.whyChooseUs.cta}
        </button>
      </GenericModal>
    </nav>
  );
};

export default Navbar;