import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Internal handler to update our alert messages
let alertHandler = null;

// This function is used to trigger the fancy alert from anywhere.
// It now accepts an optional `type` parameter (default is "success").
export const triggerFancyAlert = (message, type = "success") => {
  if (alertHandler) {
    alertHandler(message, type);
  }
};

const FancyAlert = () => {
  // Change state from a single message to an array of alerts
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Set our internal alert handler to update local state
    alertHandler = (msg, type) => {
      // Create a unique id for each alert
      const id = Date.now();
      setAlerts((prev) => [...prev, { id, msg, type }]);
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
      }, 5000);
    };

    // Cleanup on unmount
    return () => {
      alertHandler = null;
    };
  }, []);

  // Helper to return styling classes based on alert type
  const getAlertClasses = (type) => {
    switch (type) {
      case "warning":
        return "bg-orange-100 border border-orange-500 text-orange-800";
      case "error":
        return "bg-red-100 border border-red-500 text-red-800";
      case "success":
      default:
        return "bg-green-100 border border-green-500 text-green-800";
    }
  };

  return (
    // Updated container to position alerts at the top center.
    // Added `w-full` so that the container doesn't collapse.
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 w-full flex flex-col items-center z-50 pointer-events-none">
      <AnimatePresence>
        {alerts.map(({ id, msg, type }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // Added `mb-2` to space multiple alerts and `pointer-events-auto` for alert interactivity
            className={`p-4 mb-2 rounded-md shadow-lg pointer-events-auto ${getAlertClasses(type)}`}
          >
            {msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FancyAlert;
