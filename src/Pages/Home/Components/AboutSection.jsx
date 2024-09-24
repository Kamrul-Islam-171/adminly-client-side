import React from 'react';

const AboutSection = () => {
  return (
    <div className="container mx-auto p-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg p-8">
        
        {/* Left: Text Section */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About US</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to our <span className="font-semibold">User Management System</span>, a platform that simplifies user data management, role customization, and permission control with advanced security features.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Built to scale, our system ensures that managing small teams or large organizations is efficient and secure, giving you precise control over resource access.
          </p>
          <p className="text-lg text-gray-700 mt-6">
            <strong className="font-semibold">Crafted with care</strong> by a dedicated team passionate about delivering intuitive and reliable solutions.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="flex justify-center">
          <img 
            src="./public/teamwork.jpg" 
            alt="Teamwork illustration" 
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
