import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What steps are involved in adding a new user?",
      answer: "To add a new user, navigate to the 'User Management' section, click 'Add User', and fill in the required details like name and role."
    },
    {
      question: "How can I remove a user from the system?",
      answer: "To remove a user, access the 'User List', select the user you wish to delete, and confirm your choice."
    },
    {
      question: "How do I modify user roles?",
      answer: "User roles can be modified by selecting a user in the 'User Settings' section and choosing a new role from the dropdown."
    },
    {
      question: "What if I can't remember my admin password?",
      answer: "If you've forgotten your admin password, click on 'Forgot Password' at the login page and follow the reset instructions."
    }
  ];

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 last:border-b-0">
            <div 
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center">
                <FaQuestionCircle className="text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
              </div>
              <button className="text-gray-600 focus:outline-none">
                {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            <AnimatePresence>
              {openFAQ === index && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 mt-2 pb-4">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
