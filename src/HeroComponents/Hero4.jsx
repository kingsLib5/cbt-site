

// src/FAQ.jsx
import React, { useState } from 'react';

const Hero4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is a Computer-Based Test (CBT)?',
      answer: 'A Computer-Based Test (CBT) is an exam taken on a computer where questions are displayed on the screen, and responses are submitted through the computer interface.',
    },
    {
      question: 'How do I register for the CBT?',
      answer: 'Registration typically involves visiting the official website, creating an account, and following the steps to register for the test.',
    },
    {
      question: 'What equipment will be available during the CBT?',
      answer: 'During the CBT, you will be provided with a computer or laptop, a mouse, and a keyboard. Some tests may also provide headphones or microphones.',
    },
    {
      question: 'How much time will I have for the CBT?',
      answer: 'Each test has a specific time limit, which will be clearly stated before the test starts.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-orange-500 py-8 px-4 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto">
        {questions.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left py-3 px-4 bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none"
            >
              <h3 className="font-semibold">{faq.question}</h3>
            </button>
            {activeIndex === index && (
              <p className="mt-2 px-4 text-gray-200">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero4;
