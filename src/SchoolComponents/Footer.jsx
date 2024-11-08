import React, { useState } from 'react';
import { FaLaptop } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt, FaWhatsapp, FaGithub, FaLinkedin, FaInfo } from "react-icons/fa";
import { motion } from 'framer-motion';
import Login from './Login';

function Footer() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <div className='bg-[#3f3f74] text-white py-8 px-4 md:px-8 lg:px-16'>
      <div className='w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-white pt-8'>

       
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className='flex flex-col items-center md:items-start'
        >
          <h1 className='flex items-center font-bold text-[20px] gap-[10px]'>
            <FaInfo className='text-[orangered] text-[25px]' />Our Services
          </h1>
          <ul className='list-disc ml-10 mt-4 space-y-2 text-center md:text-left'>
            <li><a href="/Contact" className="hover:text-yellow-400">Contacts</a></li>
            <li>
              <span onClick={handleLoginClick} className="cursor-pointer hover:text-yellow-400">Login</span>
            </li>
            <li><a href="/CBT Exam" className="hover:text-yellow-400">CBT Questions</a></li>
            <li><a href="/Past Questions" className="hover:text-yellow-400">Past Questions</a></li>
            <li><a href="/Blog" className="hover:text-yellow-400">Blog</a></li>
          </ul>
        </motion.div>

        {/* Contacts Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='flex flex-col items-center md:items-start'
        >
          <h1 className='flex items-center font-bold text-[20px] gap-[10px]'>
            <IoMdContact className='text-[orangered] text-[25px]' />Contacts
          </h1>
          <ul className='mt-4 space-y-3'>
            <li className='flex gap-[10px] items-center'>
              <FaPhoneAlt className='text-[white] text-[15px]' />
              <span>09018115555, 09076084515</span>
            </li>
            <li className='flex gap-[10px] items-center'>
              <FaWhatsapp className='text-[green] text-[15px]' />
              <span>09076084515</span>
            </li>
            <li className='flex gap-[10px] items-center'>
              <a href="https://github.com/Xomcreate" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaGithub className='text-[15px]' />
              </a>
              Kings & Prisca
            </li>
            <li className='flex gap-[10px] items-center'>
              <a href="https://www.linkedin.com/in/david-igboanusi-757a66270/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedin className='text-[15px]' />
              </a>
              Kings & Prisca
            </li>
          </ul>
        </motion.div>

        {/* About Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='flex flex-col items-center md:items-start'
        >
          <h1 className='flex items-center font-bold text-[20px] gap-[10px]'>
            <FaLaptop className='text-[orangered] text-[25px]' />About Us
          </h1>
          <p className='mt-4 text-center md:text-left leading-relaxed'>
            e-lesson is an educational platform that helps students prepare for their exams and boosts their confidence with challenging questions.
          </p>
          <p className='text-center md:text-left mt-[75px] text-[13px]'>
            © 2024 All rights reserved | Developed by Kings & Prisca
          </p>
        </motion.div>
      </div>

      {/* Login Modal */}
      {showLogin && <Login onClose={handleCloseLogin} />}
    </div>
  );
}

export default Footer;
