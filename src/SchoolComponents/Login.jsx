import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

function Login({ onClose }) {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        // Save token to localStorage or context
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        onClose(); // Close the modal
      } else {
        console.error("Login failed:", data.message);
        alert(`Login failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <motion.div
        className="bg-white w-full max-w-md rounded-lg shadow-2xl p-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
            <FaUserGraduate size={24} className="text-orange-500 mr-2" />
            Student's Login
          </h1>
          <p className="text-sm text-gray-500">Access your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email/Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email/Phone
            </label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter your email or phone"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-orange-500 hover:underline font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;