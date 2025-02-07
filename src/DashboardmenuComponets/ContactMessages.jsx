import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/contact");
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      } else {
        setError(data.message || "Error fetching messages.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching messages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Handle deletion of a message
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        // Remove the deleted message from the state
        setMessages(messages.filter((message) => message._id !== id));
      } else {
        alert(data.message || "Failed to delete message.");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Error deleting message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Messages
        </h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-600 text-center">No messages found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {messages.map((message) => (
              <motion.div
                key={message._id}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {message.fullName}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {new Date(message.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> {message.email}
                  </p>
                </div>
                <div className="mb-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> {message.phone}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-medium">Message:</span> {message.message}
                  </p>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => handleDelete(message._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactMessages;
