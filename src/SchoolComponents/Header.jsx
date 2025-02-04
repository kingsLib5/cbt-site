import React, { useState, useEffect } from 'react';
import { FaEdgeLegacy } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Login from './Login'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Set login state to true if token exists
    }
  }, []);

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'token') {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Update login state based on token presence
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const menuVariants = {
    open: { opacity: 1, height: "auto", transition: { type: "spring", stiffness: 80, damping: 15 } },
    closed: { opacity: 0, height: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // Handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login state to true
    setShowLogin(false); // Close the login modal
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Set login state to false
    navigate('/'); // Redirect to home page
  };

  return (
    <>
      <div className='bg-gradient-to-r from-[#080836] to-[#272774] w-full h-[10vh] flex justify-between items-center px-4 shadow-lg'>
        {/* Logo Section */}
        <div className='flex ml-[40px] items-center text-white text-[25px] font-bold'>  
          <FaEdgeLegacy className='text-[orangered] text-[25px] animate-pulse' /><p>-lesson</p> 
        </div>

        {/* Menu for larger screens */}
        <div className='hidden md:flex space-x-8 text-white'>
          <ul className='flex gap-[20px] items-center'>
            <li className={`flex text-[17px] font-bold ${location.pathname === '/' ? 'text-[orangered]' : 'hover:text-yellow-400'} transition-all duration-300`}>
              <Link to='/'>Home</Link>
            </li>
            <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/about' ? 'text-[orangered]' : ''}`}>
              <Link to='/About'>About</Link>
            </li>
            {isLoggedIn && (
              <>
                <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/cbt' ? 'text-[orangered]' : ''}`}>
                  <Link to='/CBT Exam'>CBT </Link>
                </li>
                <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/past' ? 'text-[orangered]' : ''}`}>
                  <Link to='/Past Questions'>Past Questions</Link>
                </li>
              </>
            )}
            <li className='hover:text-yellow-400 transition-all duration-300'><a href="#Hero4">FAQ</a></li>
            <li className={`hover:text-yellow-400 transition-all duration-300 ${location.pathname === '/contact' ? 'text-[orangered]' : ''}`}>
              <Link to='/Contact'>Contacts</Link>
            </li>
          </ul>
        </div>

        {/* Buttons Section for larger screens */}
        <div className='hidden md:flex gap-4'>
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => navigate('/register')} 
                className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[8vw] rounded-lg transition-all duration-300 
                          hover:shadow-lg hover:scale-105'
              >
                Register
              </button>
              <button 
                onClick={() => setShowLogin(true)} 
                className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[8vw] rounded-lg transition-all duration-300 
                          hover:shadow-lg hover:scale-105'
              >
                Login
              </button>
            </>
          ) : (
            <button 
              onClick={() => navigate('/user')} 
              className='bg-gradient-to-r from-[orangered] to-[#ff7300] justify-center grid items-center text-white text-[15px] h-[4vh] w-[2vw] rounded-full transition-all duration-300 
                        hover:shadow-lg hover:scale-105'
            >
              <BsFillPersonFill className=' text-[20px]' />   
            </button>
          )}
        </div>

        {/* Hamburger Menu for mobile */}
        <div className='md:hidden text-white'>
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            whileTap={{ scale: 0.9 }}
            className='focus:outline-none'
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </motion.button>
        </div>
      </div>

      {/* Collapsible Mobile Menu */}
      <motion.div
        className='md:hidden bg-[#3f3f74] text-white overflow-hidden'
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className='flex flex-col items-center gap-[20px] py-4'>
          {['/', '/About', isLoggedIn ? '/CBT Exam' : null, isLoggedIn ? '/Past Questions' : null, '/Contact']
            .filter(Boolean)
            .map((path, index) => (
              <motion.li 
                key={path} 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className={`text-[15px] font-bold ${location.pathname === path ? 'text-[orangered]' : 'hover:text-yellow-400'} transition-all duration-300`}
              >
                <Link to={path} onClick={() => setIsOpen(false)}>
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                </Link>
              </motion.li>
            ))}
          {!isLoggedIn ? (
            <>
              <motion.li 
                className='w-full flex justify-center'
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <button 
                  onClick={() => {
                    navigate('/register'); // Navigate to the register page
                    setIsOpen(false); // Close the menu
                  }}
                  className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[60vw] rounded-lg hover:bg-yellow-400 transition-all duration-300'
                >
                  Register
                </button>
              </motion.li>
              <motion.li 
                className='w-full flex justify-center'
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
              >
                <button 
                  onClick={() => { setIsOpen(false); setShowLogin(true); }}
                  className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[60vw] rounded-lg hover:bg-yellow-400 transition-all duration-300'>
                  Login
                </button>
              </motion.li>
            </>
          ) : (
            <motion.li 
              className='w-full flex justify-center'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <button 
                onClick={() => { navigate('/user'); setIsOpen(false); }}
                className='bg-gradient-to-r from-[orangered] to-[#ff7300] text-white text-[15px] h-[4vh] w-[60vw] rounded-lg hover:bg-yellow-400 transition-all duration-300'
              >
                Profile
              </button>
            </motion.li>
          )}
        </ul>
      </motion.div>

      {/* Login Popup Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />} 
    </>
  );
}

export default Header;