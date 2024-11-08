
import React from 'react'
import { motion } from 'framer-motion'

function Register() {
  return (
    <div className='h-[130vh] w-screen grid justify-center items-center bg-[#dfdddd]'>
      <motion.div 
        className='bg-white h-[120vh] w-[90vw] md:w-[70vw] lg:w-[30vw] grid grid-rows-8 rounded-2xl shadow-xl'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className='bg-[#e4e4e3] flex h-[60px] justify-center items-center font-mono font-semibold text-[15px] row-span-1 rounded-t-2xl'>
          Create an account
        </div>

        <div className='row-span-6 mt-5 flex justify-start items-center p-4'>
          {/* Form */}
          <form className='grid grid-rows-7 gap-4 w-full'>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>Firstname</label>
              <input 
                type="text" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Your first name' 
              />
            </div>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>Lastname</label>
              <input 
                type="text" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Your last name' 
              />
            </div>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>Email</label>
              <input 
                type="email" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Your email address' 
              />
            </div>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>Phone No:</label>
              <input 
                type="text" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Your phone number' 
              />
            </div>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>State</label>
              <input 
                type="text" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Your state' 
              />
            </div>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>Password</label>
              <input 
                type="password" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Set your password' 
              />
            </div>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>Confirm Password</label>
              <input 
                type="password" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Re-type password' 
              />
            </div>

            {/* Button */}
            <div className='grid justify-center mt-5 items-center row-span-1'>
              <motion.button 
                className='bg-orange-500 text-white font-semibold h-[6vh] w-[120px] md:w-[50%] lg:w-[120px] rounded-[20px] shadow-lg'
                whileHover={{ scale: 1.10 }} // Subtle hover effect
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Register
