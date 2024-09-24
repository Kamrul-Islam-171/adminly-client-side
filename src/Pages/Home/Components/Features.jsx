import React from 'react';
import { MdGroup, MdSecurity, MdDashboard } from 'react-icons/md';

const Features = () => {
  const features = [
    {
      icon: <MdGroup size={70} className="text-white" />,
      title: 'User Management',
      description: 'Easily manage users, add, edit, and remove users with intuitive controls.',
      bgColor: 'bg-blue-500',
    },
    {
      icon: <MdSecurity size={70} className="text-white" />,
      title: 'Access Control',
      description: 'Securely define roles and permissions for sensitive data and system access.',
      bgColor: 'bg-purple-500',
    },
    {
      icon: <MdDashboard size={70} className="text-white" />,
      title: 'Dashboard Overview',
      description: 'Get insights and track real-time metrics and user activities in one place.',
      bgColor: 'bg-green-500',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="space-y-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2"
          >
            {/* Icon section */}
            <div className={`p-6 rounded-l-lg ${feature.bgColor} flex items-center justify-center`}>
              {feature.icon}
            </div>
            {/* Text content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
