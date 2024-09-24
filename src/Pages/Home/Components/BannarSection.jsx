import React from 'react';

const BannarSection = () => {
  return (
    <div className="relative bg-white overflow-hidden mt-24">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 transform -skew-y-6"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 md:py-32 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Take Your Management to the Next Level
        </h1>
        <p className="text-white text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto md:mx-0">
          Optimize your workflows with our powerful tools designed to make managing teams, tasks, and resources easier than ever.
        </p>

        <div className="flex justify-center md:justify-start space-x-6">
          <button className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannarSection;
