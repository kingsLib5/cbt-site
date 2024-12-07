import React, { useEffect, useState } from "react";

const WelcomeAdmin = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the timer
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) =>
    time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const formatDate = (time) =>
    time.toLocaleDateString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="p-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-orange-600">Welcome, Admin!</h1>
          <p className="text-gray-700">Here's a quick snapshot of your dashboard:</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-700">{formatDate(currentTime)}</p>
          <p className="text-2xl font-bold text-orange-600">{formatTime(currentTime)}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Total Registered Users */}
        <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold text-orange-500 mb-2">120</h2>
          <p className="text-gray-600">Total Registered Users</p>
        </div>

        {/* Total Exams Taken */}
        <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold text-orange-500 mb-2">15</h2>
          <p className="text-gray-600">Total Exams Taken</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAdmin;
