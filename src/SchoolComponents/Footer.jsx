import React, { useState, useEffect } from "react";
import {
  FaLaptop,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInfo,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";
import Login from "./Login";
import { useNavigate, Link } from "react-router-dom";

function Footer() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Listen for changes in localStorage (for example, when logging out)
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Listen for custom "userLoggedIn" event to update login state immediately
  useEffect(() => {
    const handleUserLoggedIn = () => {
      setIsLoggedIn(true);
    };
    window.addEventListener("userLoggedIn", handleUserLoggedIn);
    return () => {
      window.removeEventListener("userLoggedIn", handleUserLoggedIn);
    };
  }, []);

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  // Callback for successful login
  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  // For restricted pages: if not logged in, open the login modal; otherwise navigate and scroll to top
  const handleRestrictedLinkClick = (path) => {
    if (!isLoggedIn) {
      alert("Please log in to access this page.");
      setShowLogin(true);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#080836] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 border-t border-gray-700 pt-12">
        {/* Our Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
          aria-labelledby="services-heading"
        >
          <h2
            id="services-heading"
            className="flex items-center font-semibold text-xl gap-3 mb-4"
          >
            <FaInfo className="text-[orangered] text-2xl" aria-hidden="true" />
            Our Services
          </h2>
          <nav aria-label="Footer Services">
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <a
                  href="/Contact"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  Contacts
                </a>
              </li>
              {!isLoggedIn && (
                <li>
                  <button
                    onClick={handleLoginClick}
                    className="hover:text-yellow-400 transition-colors duration-200 focus:outline-none"
                  >
                    Login
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => handleRestrictedLinkClick("/CBT Exam")}
                  className="hover:text-yellow-400 transition-colors duration-200 focus:outline-none"
                >
                  CBT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRestrictedLinkClick("/Past Questions")}
                  className="hover:text-yellow-400 transition-colors duration-200 focus:outline-none"
                >
                  Past Questions
                </button>
              </li>
            </ul>
          </nav>
        </motion.section>

        {/* Contacts Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
          aria-labelledby="contacts-heading"
        >
          <h2
            id="contacts-heading"
            className="flex items-center font-semibold text-xl gap-3 mb-4"
          >
            <IoMdContact
              className="text-[orangered] text-2xl"
              aria-hidden="true"
            />
            Contacts
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-white text-lg" aria-hidden="true" />
              <a
                href="tel:09018115555"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                09018115555
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaWhatsapp className="text-green-500 text-lg" aria-hidden="true" />
              <a
                href="https://wa.me/09076084515"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                09076084515
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaGithub className="text-white text-lg" aria-hidden="true" />
              <a
                href="https://github.com/Xomcreate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Kings &amp; Prisca
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-600 text-lg" aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/david-igboanusi-757a66270/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Kings &amp; Prisca
              </a>
            </li>
          </ul>
        </motion.section>

        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="flex items-center font-semibold text-xl gap-3 mb-4"
          >
            <FaLaptop
              className="text-[orangered] text-2xl"
              aria-hidden="true"
            />
            About Us
          </h2>
          <p className="text-center md:text-left leading-relaxed mb-6">
            e-Lesson is an educational platform that helps students prepare for
            their exams and boosts their confidence with challenging questions.
          </p>
          <p className="text-center md:text-left text-sm text-gray-400">
            © 2024 All rights reserved | Developed by Kings &amp; Prisca
          </p>
        </motion.section>
      </div>

      {/* Conditionally render the Login modal */}
      {showLogin && (
        <Login
          onClose={handleCloseLogin}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </footer>
  );
}

export default Footer;
