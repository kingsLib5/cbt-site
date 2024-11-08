import React from 'react';
import { motion } from 'framer-motion';

function About3() {
  return (
    <>
      <div className='h-[70vh] w-full bg-[url(./assets/smiling.jpg)] bg-cover bg-center grid grid-cols-1 md:grid-cols-2'>
        
        <div className='bg-[#d8d8d8cc] border border-opacity-25 flex justify-center items-center mx-4 md:mr-[90px] p-4 md:p-0'>
          <div className="text-left w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[orangered] mb-6 md:mb-8">What we believe</h2>

            {/* Staggered Slide-in Texts */}
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white w-full md:w-[140%] text-black font-semibold text-base md:text-lg px-4 md:px-6 py-3 md:py-4 shadow-lg rounded-lg border-b-4 border-black"
              >
                Learning should not be a privilege; it must be for everyone.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white w-full md:w-[120%] text-black font-semibold text-base md:text-lg px-4 md:px-6 py-3 md:py-4 shadow-lg rounded-lg border-b-4 border-black"
              >
                Always lead by example, nobody remembers second.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white w-full md:w-[100%] text-black font-semibold text-base md:text-lg px-4 md:px-6 py-3 md:py-4 shadow-lg rounded-lg border-b-4 border-black"
              >
                Progress needs change. Be the change.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About3;
