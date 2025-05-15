import React from "react";
import { FaTasks, FaRocket, FaHeart, FaEnvelope, FaPhone, FaMagic } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-blue-50 to-pink-100 px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12" data-aos="fade-down" data-aos-delay="100">
        <h1 className="text-5xl font-extrabold text-purple-700 drop-shadow-lg">
          About Our Todo App ❤️
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
          We believe productivity should be simple, beautiful, and delightful. That’s why we built this Todo App — your smart partner in daily task management.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div
          className="bg-white rounded-xl p-8 shadow-xl border-t-4 border-indigo-400 transform transition duration-300 hover:shadow-2xl hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaTasks className="text-5xl text-indigo-500 mb-4 ml-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Task Management</h2>
          <p className="text-gray-600 text-center">
            Plan, create, and track your todos easily with our intuitive interface.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-xl p-8 shadow-xl border-t-4 border-green-400 transform transition duration-300 hover:shadow-2xl hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaRocket className="text-5xl text-green-500 mb-4 ml-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Boost Focus</h2>
          <p className="text-gray-600 text-center">
            Stay productive with priority sorting, reminders, and clean visuals.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-xl p-8 shadow-xl border-t-4 border-pink-400 transform transition duration-300 hover:shadow-2xl hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaHeart className="text-5xl text-pink-500 mb-4 ml-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Loved by Users</h2>
          <p className="text-gray-600 text-center">
            Designed with care to offer you a delightful and relaxing task experience.
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <FaMagic className="text-5xl text-pink-500 mb-4 ml-6" />
      <div className="max-w-4xl mx-auto mt-20 p-8 bg-white rounded-xl shadow-xl" data-aos="fade-up" data-aos-delay="500">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8">
          Have questions or feedback? We’d love to hear from you!
        </p>

        

        {/* Contact Info */}
        <div className="mt-10 flex justify-center space-x-12 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-purple-500 text-xl" />
            <span>anjalisingh.12@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-purple-500 text-xl" />
            <span>+91 9820392106</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;
