import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Testimonialsss from "../assets/Testimonials.png";

const testimonials = [
  {
    id: 1,
    name: "Kristin Watson",
    image: Testimonialsss,
    text: "I rented a car for a one-week trip from Carent on my friend's recommendation. I was completely satisfied with their service.",
  },
  {
    id: 2,
    name: "Robert Fox",
    image: Testimonialsss,
    text: "During my last trip, I used a Carent sport car. The car was clean, smooth, and had enough gas. Great experience!",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    image: Testimonialsss,
    text: "Kablux drivers are very polite and professional. I always feel safe using their service for daily commutes.",
  },
  {
    id: 4,
    name: "Esther Howard",
    image: Testimonialsss,
    text: "I love how easy it is to schedule rides. The app is smooth and I get instant notifications whenever my driver arrives.",
  },
  {
    id: 5,
    name: "Cody Fisher",
    image: Testimonialsss,
    text: "Kablux makes my business travels easier. Reliable, safe, and always on time — that's what I love about it.",
  },
  {
    id: 6,
    name: "Eleanor Pena",
    image: Testimonialsss,
    text: "The drivers are well-trained and respectful. I can always trust Kablux for late-night rides without worries.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16">
      {/* Title */}
      <h3 className="text-center text-xl font-semibold mb-2">
        What Our Clients Say?
      </h3>
      <div className="w-16 h-1 bg-yellow-400 rounded mx-auto mb-10"></div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 text-yellow-500 z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-6 px-10 pb-4"
        style={{
          scrollbarWidth: "none", /* Firefox */
          msOverflowStyle: "none", /* Internet Explorer 10+ */
        }}
      >
        {/* Webkit scrollbar hide */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-gray-200 rounded-xl p-6 w-72 flex-shrink-0 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
            />
            <h4 className="font-semibold text-gray-800">{t.name}</h4>
            <p className="text-sm text-gray-600 mt-2">{t.text}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 text-yellow-500 z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Testimonials;