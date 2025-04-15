// components/AdminProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  // Retrieve token and role from localStorage (set in your login component)
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If there is no token or the role is not Admin, redirect to login (or any error page)
  if (!token || role !== "Admin") {
    return <Navigate to="/login" replace />;
  }

  // If authenticated as an admin, render the children component (e.g., your admin dashboard)
  return children;
};

export default AdminProtectedRoute;
