import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import myImage from "../assets/blank.png"; // Default image
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage"; // Helper function for cropping

function Details() {
  const [profileImage, setProfileImage] = useState(myImage);
  const [userDetails, setUserDetails] = useState({
    firstName: "Kings",
    lastName: "Igboanusi",
    username: "Dex❤",
    email: "priscaojimba15@gmail.com",
    phoneNumber: "09076084515",
    state: "Anambra",
    profileImage: "",
  });

  // States for image cropping
  const [showCropper, setShowCropper] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Fetch user details from the backend using axios
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/auth/details", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.user) {
            setUserDetails(res.data.user);
            // If a profileImage exists in the user data, use it; otherwise, use default.
            if (res.data.user.profileImage) {
              setProfileImage(res.data.user.profileImage);
            } else {
              setProfileImage(myImage);
            }
          }
        })
        .catch((err) => {
          console.error("Error fetching user details:", err);
        });
    }
  }, []);

  // Handle profile image file selection (open cropper)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // Callback when crop is complete
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // When crop is confirmed, update profile image locally and in the database,
  // then dispatch a custom event so the Welcome component updates its picture.
  const handleCropSave = async () => {
    try {
      const croppedImage = await getCroppedImg(selectedImage, croppedAreaPixels);
      console.log("Cropped Image:", croppedImage);
      const token = localStorage.getItem("token");
      // Send updated profile image to the backend
      const res = await axios.put(
        "http://localhost:3000/api/auth/details",
        { profileImage: croppedImage },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Backend update response:", res.data);
      setShowCropper(false);
      // Clear crop states for subsequent updates
      setSelectedImage(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      if (res.data.user) {
        // Update localStorage with the new user data
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // Update the local state for profile image
        setProfileImage(res.data.user.profileImage);
        // Dispatch a custom event so Welcome can update its picture
        window.dispatchEvent(
          new CustomEvent("profileUpdated", {
            detail: { profileImage: res.data.user.profileImage },
          })
        );
      }
    } catch (error) {
      console.error("Crop failed:", error);
      setShowCropper(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Profile Image */}
          <div
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-center bg-cover bg-no-repeat rounded-full shadow-lg"
            style={{ backgroundImage: `url(${profileImage})` }}
            aria-label="User profile image"
          ></div>

          {/* Edit Button */}
          <label
            htmlFor="upload-image"
            className="px-6 py-2 bg-orange-500 text-white rounded-full font-bold shadow hover:bg-orange-600 transition-all cursor-pointer"
            aria-label="Edit profile image"
          >
            Edit Picture
          </label>
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Cropping Modal */}
        {showCropper && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded w-full max-w-md">
              <div style={{ width: "100%", height: "300px", position: "relative" }}>
                <Cropper
                  image={selectedImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <div className="mt-4 flex justify-end gap-4">
                <button
                  onClick={() => setShowCropper(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCropSave}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save Crop
                </button>
              </div>
            </div>
          </div>
        )}

        {/* User Details */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
             Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p>
                <strong className="font-semibold">First Name:</strong>{" "}
                {userDetails.firstName}
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Last Name:</strong>{" "}
                {userDetails.lastName}
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Username:</strong>{" "}
                {userDetails.username}
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Email:</strong>{" "}
                {userDetails.email}
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Phone No:</strong>{" "}
                {userDetails.phoneNumber}
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">State:</strong>{" "}
                {userDetails.state}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
