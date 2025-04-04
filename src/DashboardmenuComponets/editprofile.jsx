import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function EditProfile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-[100vh] bg-gray-300 flex justify-center items-center py-8 px-4'
    >
      <motion.form
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className='h-auto grid grid-rows-7 gap-6 w-full bg-white max-w-2xl p-8 rounded-lg shadow-xl'
      >
        <div className='row-span-1 font-serif text-[24px] md:text-[28px] text-[orangered] font-bold flex justify-center items-center'>
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring' }}
          >
            Edit Profile
          </motion.h1>
        </div>

        <div className='row-span-5 grid gap-6 md:grid-cols-2'>
          {/* Left Column (Personal Info) */}
          <motion.div 
            className='grid gap-6'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={childVariants} className='flex flex-col md:flex-row items-center gap-4'>
              <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>FirstName:</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </motion.div>

            <motion.div variants={childVariants} className='flex flex-col md:flex-row items-center gap-4'>
              <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>LastName:</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </motion.div>

            <motion.div variants={childVariants} className='flex flex-col md:flex-row items-center gap-4'>
              <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>Username:</label>
              <input
                type="text"
                placeholder="Enter your username"
                className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </motion.div>
          </motion.div>

          {/* Right Column (Contact Info) */}
          <motion.div 
            className='grid gap-6'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={childVariants} className='flex flex-col md:flex-row items-center gap-4'>
              <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>Phone:</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </motion.div>

            <motion.div variants={childVariants} className='flex flex-col md:flex-row items-center gap-4'>
              <label className='font-medium text-[16px] md:text-[18px] text-gray-600 w-full md:w-[30%]'>State:</label>
              <input
                type="text"
                placeholder="Enter your state"
                className='h-[40px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Submit Button */}
        <div className='row-span-1 flex justify-center items-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-3 w-full md:w-auto bg-[orangered] text-white font-semibold text-lg rounded-md hover:bg-[#00008B] transition duration-200 ease-in'
          >
            Save Changes
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default EditProfile;