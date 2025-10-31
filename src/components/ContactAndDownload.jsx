import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import Phone from '../assets/Phone.png';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';
import Contact from '../assets/Contact.png';

const ContactAndDownload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  // Function to validate name (no special characters allowed)
  const validateName = (name) => {
    // Regular expression that allows only letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    
    if (!name.trim()) {
      return "Name is required";
    } else if (!nameRegex.test(name)) {
      return "Name should only contain letters, spaces, hyphens, and apostrophes";
    } else if (name.length < 2) {
      return "Name should be at least 2 characters long";
    }
    return "";
  };

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // Function to validate message
  const validateMessage = (message) => {
    if (!message.trim()) {
      return "Message is required";
    } else if (message.length < 10) {
      return "Message should be at least 10 characters long";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ""
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prevState => ({
      ...prevState,
      [name]: true
    }));

    // Validate the field on blur
    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }

    setErrors(prevState => ({
      ...prevState,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message)
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true
    });

    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    // Set loading state
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Reset loading state
    setIsLoading(false);
    
    // Show the modal
    setIsModalOpen(true);
    
    // Reset form and validation states
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setErrors({
      name: "",
      email: "",
      message: ""
    });
    setTouched({
      name: false,
      email: false,
      message: false
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-full">
      {/* CONTACT SECTION */}
      <div className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-center text-xl font-semibold mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  errors.name && touched.name 
                    ? "border-red-500" 
                    : "border-gray-300"
                }`}
                required
                disabled={isLoading}
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  errors.email && touched.email 
                    ? "border-red-500" 
                    : "border-gray-300"
                }`}
                required
                disabled={isLoading}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                rows="4"
                className={`w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  errors.message && touched.message 
                    ? "border-red-500" 
                    : "border-gray-300"
                }`}
                required
                disabled={isLoading}
              ></textarea>
              {errors.message && touched.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium transition flex items-center justify-center gap-2 min-w-[140px]"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send A Message"
              )}
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

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-lg max-w-md w-full p-6 relative border border-white border-opacity-20 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <FaTimes size={20} />
            </button>
            
            {/* Modal Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <svg 
                  className="w-8 h-8 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Message Received!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Thank you for your message. We have received it and will contact you soon.
              </p>
              
              <button
                onClick={closeModal}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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