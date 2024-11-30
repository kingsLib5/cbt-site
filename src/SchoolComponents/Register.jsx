import React, { useState } from "react";
import { motion } from "framer-motion";
import Login from "./Login"; // Import the Login component

function Register() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  return (
    <div className="min-h-[100vh] w-screen flex justify-center items-center bg-[#b4b3b3]">
      <motion.div
        className="bg-white w-full max-w-md rounded-lg shadow-2xl p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
          <p className="text-sm text-gray-500">
            Sign up to get started with our platform
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* First and Last Name Fields */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              />
            </div>
          </div>

          {/* Other Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              placeholder="Your state"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Set your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-type password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={openLoginModal}
              className="text-orange-500 hover:underline font-medium"
            >
              Log in
            </button>
          </p>
        </div>
      </motion.div>

      {/* Login Modal */}
      {isLoginOpen && <Login onClose={closeLoginModal} />}
    </div>
  );
}

export default Register;
