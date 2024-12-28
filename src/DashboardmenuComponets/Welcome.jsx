import React from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/myguy.jpg"; // Import the image

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      <div className="flex flex-col items-center text-center space-y-8 p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        {/* Image Section */}
        <div
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-center bg-cover bg-no-repeat rounded-full border-4 border-gray-300"
          style={{ backgroundImage: `url(${myImage})` }}
          aria-label="Welcome image"
        ></div>

        {/* Welcome Text Section */}
        <div className="space-y-4">
          <h1 className="text-[orangered] font-serif text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome, Dex
          </h1>
          <p className="text-gray-700 text-lg sm:text-base md:text-lg lg:text-xl font-medium">
            Your journey to success starts here.
          </p>
          <p className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-lg">
            Let’s explore and achieve great milestones together.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="px-6 py-3 bg-[orangered] text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition-all"
            onClick={() => navigate("/Past Questions")}
          >
            Past Questions
          </button>
          <button
            className="px-6 py-3 bg-[orangered] text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 transition-all"
            onClick={() => navigate("/CBT Exam")}
          >
            CBT Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
