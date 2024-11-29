import React from 'react';
import { motion } from 'framer-motion';

function Hero2() {
  return (
    <div className='w-full min-h-[80vh] bg-[#080836] flex flex-col gap-y-6'>
      <div className='h-[25%] flex justify-center items-center'>
        <h1 className='text-[white] text-[30px] sm:text-[40px] font-semibold text-center'>
          Get Started. Get Results.
        </h1>
      </div>

      {/* section-two */}
      <div className='flex flex-col sm:flex-row h-[85%] gap-y-6 sm:gap-y-0'>
        
        {/* Left Section */}
        <motion.div 
          className='w-full sm:w-[50%] flex items-center flex-col gap-2 justify-center'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5, ease: 'easeOut', delay: 2 }}
        >
          <div className='bg-[url(./assets/exams.png)] bg-cover bg-center h-[150px] sm:h-[250px] w-[70%] sm:w-[50%] max-w-[300px]'></div>
          <div className='flex'>
            <h1 className='text-[orangered] font-bold text-[15px] sm:text-[20px] text-center'>
              Prepare You for Exam
            </h1>
          </div>
          <div className='flex text-center px-2'>
            <h3 className='text-[white] text-[13px] font-serif text-sm sm:text-base'>
              We are to build solid trust in our clients
            </h3>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className='w-full sm:w-[50%] flex items-center flex-col gap-4 justify-center'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5, ease: 'easeOut', delay: 2 }}
        >
          <div className='bg-[url(./assets/get.png)] bg-cover bg-center bb h-[150px] sm:h-[250px] w-[70%] sm:w-[50%] max-w-[300px]'></div>
          <div className='flex'>
            <h1 className='text-[orangered] font-bold text-[15px] sm:text-[20px] text-center'>
              Boost Your Intelligence
            </h1>
          </div>
          <div className='flex text-center px-2'>
            <h3 className='text-[white] text-[13px] font-serif text-sm sm:text-base'>
              We are to build solid trust in our clients
            </h3>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Hero2;