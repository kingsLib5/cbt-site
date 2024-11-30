import React from "react";
import { motion } from "framer-motion";

function Contactus() {
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
          <h1 className="text-2xl font-bold text-gray-800">Get In Touch</h1>
          <p className="text-sm text-gray-500">
            We'd love to hear from you! Please fill out the form below.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
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

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              placeholder="Your message here"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Prefer email? Contact us directly at{" "}
            <a
              href="mailto:example@example.com"
              className="text-orange-500 hover:underline font-medium"
            >
              dexom@mail.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Contactus;
