import React, { useState } from "react";
import { motion } from "framer-motion";

function Contactus() {
  // State variables for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    // Prepare the form data payload
    const formData = { fullName, email, phone, message };

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMsg("Message sent successfully!");
        // Clear the form fields
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setResponseMsg(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("An error occurred. Please try again later.");
    }
    setLoading(false);
  };

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
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message here"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </form>

        {responseMsg && (
          <div className="mt-4 text-center text-sm text-green-600">
            {responseMsg}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 ">
            Prefer email? Contact us directly at{" "}
            <a
              href="mailto:example@example.com"
              className="text-orange-500 hover:underline font-medium"
            >
              davidkingsig@gmail.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Contactus;
