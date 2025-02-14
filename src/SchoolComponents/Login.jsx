import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onClose, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.emailOrPhone || !formData.password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      if (response.status === 200) {
        // Save token and username (using data.user.username)
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.user.username);

        // Dispatch an event if needed
        window.dispatchEvent(
          new CustomEvent("userLoggedIn", { detail: { token: data.token } })
        );

        // Optionally call a callback
        if (onLoginSuccess) {
          onLoginSuccess(data.token);
        }
        setLoading(false);
        // Close the modal if applicable
        onClose && onClose();
        // Navigate to the Welcome page and pass the username in the route state
        navigate("/user", { state: { username: data.user.username } });
      } else {
        setError(data.message || "Login failed. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Invaild Password");
      setLoading(false);
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

        {/* Error Message */}
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        {/* Login Form */}
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
              autoComplete="username"
              autoFocus
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-black focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full px-4 py-2 pr-12 border rounded-lg shadow-sm text-black focus:ring focus:ring-orange-300 focus:outline-none"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 inset-y-0 flex items-center text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm text-orange-500 hover:underline font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
