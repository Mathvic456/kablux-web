import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a ride?",
    answer:
      "Open the Kablux app, set your destination, choose your ride type, and confirm your booking.",
  },
  {
    question: "Can I pay with cash?",
    answer:
      "Yes, you can pay with cash, card, wallet, or bank transfer — your convenience comes first.",
  },
  {
    question: "How do drivers get paid?",
    answer:
      "Drivers receive instant payouts through the in-app wallet with options for daily withdrawals.",
  },
  {
    question: "What if I feel unsafe during a ride?",
    answer:
      "You can use the in-app SOS button to alert emergency services or share your live location with trusted contacts.",
  },
  {
    question: "How do I sign up to drive?",
    answer:
      "Download the Kablux app, complete the driver registration form, upload your documents, and await quick approval.",
  },
];

const stats = [
  { number: "450+", label: "Cars For Rent" },
  { number: "800+", label: "Happy Clients" },
  { number: "750+", label: "Rental Locations" },
];

const FaqItem = ({ faq, index, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="border-b border-gray-200 pb-3 cursor-pointer transition-all duration-300 hover:bg-gray-50 rounded-lg px-3"
      onClick={() => onClick(index)}
    >
      <div className="flex justify-between items-center py-3">
        <h3 className="font-medium text-gray-800 pr-4">
          {faq.question}
        </h3>
        <FaChevronDown
          className={`text-gray-500 transition-all duration-700 ease-in-out flex-shrink-0 ${
            isOpen ? "rotate-180 transform scale-110" : ""
          }`}
        />
      </div>
      
      {/* Animated Answer Container */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className={`text-gray-600 text-sm pb-3 transition-all duration-700 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-2"
        }`}>
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">
          Frequently Asked Questions
        </h2>
        <div className="w-20 h-1 bg-yellow-400 rounded mb-8"></div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={toggleFaq}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-yellow-50 mt-20 py-10 rounded-xl">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:scale-105"
            >
              <h3 className="text-3xl font-semibold text-gray-900">
                {stat.number}
              </h3>
              <p className="text-gray-700 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;