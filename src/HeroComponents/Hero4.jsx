// src/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is a Computer-Based Test (CBT)?',
      answer:
        'A Computer-Based Test (CBT) is an exam taken on a computer where questions are displayed on the screen, and responses are submitted through the computer interface.',
    },
    {
      question: 'How do I register for the CBT?',
      answer:
        'Registration typically involves visiting the official website, creating an account, and following the steps to register for the test.',
    },
    {
      question: 'What equipment will be available during the CBT?',
      answer:
        'During the CBT, you will be provided with a computer or laptop, a mouse, and a keyboard. Some tests may also provide headphones or microphones.',
    },
    {
      question: 'How much time will I have for the CBT?',
      answer:
        'Each test has a specific time limit, which will be clearly stated before the test starts.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="Hero4" className="bg-gray-800 py-10 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((faq, index) => (
          <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full py-4 px-5 text-left font-medium text-lg bg-gray-700 hover:bg-gray-600 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 py-4 bg-gray-800"
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero4;
