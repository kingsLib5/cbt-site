
import React from 'react'
import { motion } from 'framer-motion'

function Contactus() {
  return (
    <>
    <div className='h-[90vh]  w-full grid justify-center items-center bg-white'>
      <motion.div 
        className='bg-white h-[80vh] w-[90vw] md:w-[70vw] lg:w-[30vw] grid grid-rows-8 rounded-2xl shadow-xl'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className='bg-[#e4e4e3]  flex h-[60px] justify-center items-center font-mono font-semibold text-[15px] row-span-1 rounded-t-2xl'>
          Get In Touch
        </div>

        <div className='row-span-6 mt-[250px] flex justify-start items-center p-4'>
          {/* Form */}
          <form className='grid grid-rows-7  w-full'>
            <div className='grid font-semibold'>
              <label className='text-[14px] mb-1'>Fullname</label>
              <input 
                type="text" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[6vh] rounded-md p-2 shadow-md' 
                placeholder='Your first name' 
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
              <label className='text-[14px] mb-1'>Message</label>
              <textarea
                type="text" 
                className='bg-gray-300 w-[90%] md:w-[80%] lg:w-[300px] h-[10vh] rounded-md p-2 shadow-md' 
                placeholder='Your phone number' 
              />
            </div>

            {/* Button */}
            <div className='grid justify-center items-center row-span-1'>
              <motion.button 
                className='bg-orange-500 text-white font-semibold h-[6vh] w-[120px] md:w-[50%] lg:w-[120px] rounded-[20px] shadow-lg'
                whileHover={{ scale: 1.10 }} // Subtle hover effect
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default Contactus