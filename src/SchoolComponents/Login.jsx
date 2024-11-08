import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';

function Login({ onClose }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]'>
      <motion.div   
        className='relative bg-white h-[70vh] w-[90vw] md:w-[60vw] lg:w-[30vw] grid grid-rows-6 rounded-2xl shadow-xl'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Close button */}
        <button 
          onClick={onClose} 
          className='absolute top-3 right-3 text-gray-500 hover:text-black text-2xl'
        >
          &times;
        </button>
        
        {/* Header with Icon and Text */}
        <div className='bg-gray-200 h-[60px] row-span-1 flex justify-center items-center font-bold text-[24px] font-mono rounded-t-2xl'>
          <FaUserGraduate size={20} className='text-gray-700 mr-2' /> 
          <span className='text-[20px] text-[black] '>Student Login</span>
        </div>

        <div className='row-span-5 grid p-6'>
          {/* Form */}
          <form className='grid grid-rows-3 gap-4'>
            <div className='grid font-semibold'>
              <label className="text-gray-800">Email/Phone</label> {/* Explicit color */}
              <input 
                className='bg-gray-300 w-[80%] md:w-[70%] lg:w-[80%] h-[6vh] mt-2 rounded-md p-2 shadow-md text-gray-900' 
                placeholder='Enter your email or phone' 
                type="email" 
              />
            </div>
            <div className='grid font-semibold'>
              <label className="text-gray-800">Password</label> {/* Explicit color */}
              <input 
                className='bg-gray-300 w-[80%] md:w-[70%] lg:w-[80%] h-[6vh] mt-2 rounded-md p-2 shadow-md text-gray-900' 
                placeholder='Enter your password' 
                type="password" 
              />
            </div>

            <div className='grid grid-rows-4 row-span-1'>
              <div className='row-span-3 grid justify-center items-center'>
                <motion.button 
                  className='bg-[orangered] text-white font-semibold h-[6vh] w-[120px] rounded-[20px] shadow-lg'
                  whileHover={{ scale: 1.10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
              </div>
              <div className='grid justify-center items-center font-semibold'>
                <a href="#" className="text-blue-500 hover:underline">Forgot Password</a>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
