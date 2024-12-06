import React from "react";
import { useNavigate } from "react-router-dom"
import myImage from "../assets/myguy.jpg"; // Import the image

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex  justify-center min-h-[100vh] bg-gray-300">
      <div className="flex mt-[30px] flex-col items-center text-center space-y-8">
        {/* Image Section */}
        <div
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-center bg-cover bg-no-repeat rounded-full"
          style={{ backgroundImage: `url(${myImage})` }}
          aria-label="Welcome image"
        ></div>

        {/* Welcome Text Section */}
        <div className="space-y-4">
          <h1 className="text-orangered font-serif text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
            WELCOME, DEX
          </h1>
          <p className="text-gray-700 text-lg sm:text-base md:text-lg lg:text-xl font-medium">
            "Your journey to success starts here."
          </p>
          <p className="text-gray-500 text-base sm:text-sm md:text-base lg:text-lg">
            Let's get started!
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center gap-6">
          <button
            className="px-6 py-3 bg-[orangered] text-black rounded-lg font-semibold shadow hover:bg-orange-500 transition-all"
            onClick={() => navigate("/Past Questions")}
          >
            Past Questions
          </button>
          <button
            className="px-6 py-3 bg-[orangered] text-black rounded-lg font-semibold shadow hover:bg-orange-500 transition-all"
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
