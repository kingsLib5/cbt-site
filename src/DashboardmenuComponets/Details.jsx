import React, { useState } from "react";
import myImage from "../assets/myguy.jpg"; // Default image

function Details() {
  const [profileImage, setProfileImage] = useState(myImage);

  // Handle profile image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Update profile image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Profile Image */}
          <div
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-center bg-cover bg-no-repeat rounded-full shadow-lg"
            style={{ backgroundImage: `url(${profileImage})` }}
            aria-label="User profile image"
          ></div>

          {/* Edit Button */}
          <label
            htmlFor="upload-image"
            className="px-6 py-2 bg-orange-500 text-white rounded-full font-bold shadow hover:bg-orange-600 transition-all cursor-pointer"
            aria-label="Edit profile image"
          >
            Edit Profile
          </label>
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* User Details */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">User Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p>
                <strong className="font-semibold">First Name:</strong> Kings
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Last Name:</strong> Igboanusi
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Username:</strong> Dex❤
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Email:</strong> priscaojimba15@gmail.com
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Phone No:</strong> 09076084515
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">State:</strong> Anambra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
