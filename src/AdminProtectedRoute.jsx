import React from "react";
import { Navigate } from "react-router-dom";
import * as jwtDecode from "jwt-decode";

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace />;

  try {
    // Use the default export if available, otherwise call the function directly
    const decoded = jwtDecode.default ? jwtDecode.default(token) : jwtDecode(token);
    if (decoded.role !== "Admin") {
      return <Navigate to="/" replace />;
    }
    return children;
  } catch (error) {
    console.error("Token decoding error:", error);
    return <Navigate to="/" replace />;
  }
};

export default AdminProtectedRoute;
