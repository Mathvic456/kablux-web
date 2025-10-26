import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Phone from '../assets/Phone.png';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';
import Contact from '../assets/Contact.png';

const ContactAndDownload = () => {
  return (
    <section className="w-full">
      {/* CONTACT SECTION */}
      <div className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-center text-xl font-semibold mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Send A Message
            </button>
          </form>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Contact}
              alt="Contact"
              className="rounded-md shadow-md w-full max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* DOWNLOAD SECTION */}
      <div className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
          {/* Left Text */}
          <div>
            <p className="uppercase text-yellow-400 text-sm mb-2">Download</p>
            <h2 className="text-3xl font-semibold mb-3 leading-tight">
              Download Kablux App for <span className="text-yellow-400">FREE</span>
            </h2>
            <p className="text-gray-300 mb-6">
              For faster, easier booking and exclusive deals.
            </p>

            <div className="flex items-center gap-4">
              <img
                src={Google}
                alt="Google Play"
                className="w-32 cursor-pointer"
              />
              <img
                src={Apple}
                alt="App Store"
                className="w-32 cursor-pointer"
              />
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center md:justify-end">
            <img
              src={Phone}
              alt="Kablux App"
              className="w-72 md:w-80"
            />
          </div>
        </div>

        {/* Support Info */}
        <div className="text-center text-sm text-gray-400 mt-16">
          Need help riding or driving? Please call{" "}
          <span className="text-yellow-400 font-semibold">+233-444-9999</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white border-t border-gray-800 py-6 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <h3 className="text-yellow-400 font-bold text-lg">Kablux</h3>

        {/* Support text */}
        <p className="text-gray-400 text-sm">
          24/7 Customer Support Available
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-gray-300">
          <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
          <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-400"><FaLinkedinIn /></a>
        </div>
      </footer>
    </section>
  );
};

export default ContactAndDownload;
