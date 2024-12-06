import React from "react";
import myImage from "../assets/myguy.jpg"; // Import the image

function Details() {
  return (
    <div className="min-h-[100vh] bg-gray-300 flex flex-col items-center py-8 px-4">
      {/* Profile Image and Edit Button */}
      <div className="flex items-center gap-4 mb-6">
        {/* Profile Image */}
        <div
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-center bg-cover bg-no-repeat rounded-full shadow-lg"
          style={{ backgroundImage: `url(${myImage})` }}
          aria-label="User profile image"
        ></div>

        {/* Edit Button */}
        <button
          className="px-4 py-2 bg-[orangered] mt-[180px] text-white rounded-full font-bold shadow hover:bg-orange-500 transition-all"
          aria-label="Edit profile image"
        >
          Edit
        </button>
      </div>

      {/* User Details */}
      <div className="flex flex-col items-center text-center gap-4 text-lg font-medium text-gray-800">
        <p>
          <strong>First Name:</strong> Kings
        </p>
        <p>
          <strong>Last Name:</strong> Igboanusi
        </p>
        <p>
          <strong>Username:</strong> Dex❤
        </p>
        <p>
          <strong>Email:</strong> priscaojimba15@gmail.com
        </p>
        <p>
          <strong>Phone No:</strong> 09076084515
        </p>
        <p>
          <strong>State:</strong> Anambra
        </p>
      </div>
    </div>
  );
}

export default Details;
