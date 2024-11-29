import React from 'react';
import { motion } from 'framer-motion';

function Hero2() {
  return (
    <div className="w-full min-h-[80vh] bg-[#080836] flex flex-col items-center py-8">
      {/* Header Section */}
      <div className="h-[20%] flex justify-center items-center">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold text-center">
          Get Started. Get Results.
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row h-[80%] w-full gap-8 sm:gap-0 items-center sm:items-start px-6 sm:px-12">
        {/* Left Section */}
        <motion.div
          className="w-full sm:w-1/2 flex flex-col items-center gap-4 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5, ease: 'easeOut', delay: 3 }}
        >
          <div
            className="bg-[url(./assets/exams.png)] bg-cover bg-center rounded-lg shadow-lg h-[150px] sm:h-[250px] w-[80%] max-w-[300px]"
            aria-label="Exam preparation visual"
          ></div>
          <h1 className="text-[orangered] font-bold text-lg sm:text-xl">
            Prepare for Exams
          </h1>
          <p className="text-white text-sm sm:text-base font-light">
            Building solid trust with our clients.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full sm:w-1/2 flex flex-col items-center gap-4 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5, ease: 'easeOut', delay: 3 }}
        >
          <div
            className="bg-[url(./assets/get.png)] bg-cover bb bg-center rounded-lg shadow-lg h-[150px] sm:h-[250px] w-[80%] max-w-[300px]"
            aria-label="Intelligence boost visual"
          ></div>
          <h1 className="text-[orangered] font-bold text-lg sm:text-xl">
            Boost Your Intelligence
          </h1>
          <p className="text-white text-sm sm:text-base font-light">
            Empowering you to achieve your best.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero2;
