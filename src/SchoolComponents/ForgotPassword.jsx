import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ForgotPassword() {
  const [step, setStep] = useState(1); // Step 1: enter email, Step 2: enter new passwords
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // States for toggling password visibility
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle submission of email (Step 1)
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      // If the response includes emailFound true, move to step 2.
      if (res.data.emailFound) {
        setMessage(res.data.message);
        setStep(2);
      } else {
        // For security, even if email is not found, we display a generic message.
        setMessage(res.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
    setLoading(false);
  };

  // Handle submission of new passwords (Step 2)
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        { email, newPassword, confirmPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.success) {
        setMessage(res.data.message);
        // Optionally reset the form or redirect the user after a delay.
        setStep(1);
        setEmail("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError("Password reset failed.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred while resetting password.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        {message && <div className="mb-4 text-green-600 text-center">{message}</div>}
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Enter your registered email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[orangered] text-white rounded hover:bg-[orange] transition-colors"
              disabled={loading}
            >
              {loading ? "Checking..." : "Submit"}
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleResetPassword}>
            <div className="relative mb-4">
              <label htmlFor="newPassword" className="block mb-2 font-semibold">
                New Password:
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                className="w-full border p-2 pr-10 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
              >
                {showNewPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
            <div className="relative mb-4">
              <label htmlFor="confirmPassword" className="block mb-2 font-semibold">
                Confirm New Password:
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full border p-2 pr-10 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
            {newPassword && confirmPassword && newPassword !== confirmPassword && (
              <div className="mb-4 text-red-600 text-center">
                Passwords do not match.
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-[orangered] text-white rounded hover:bg-[orange] transition-colors"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
