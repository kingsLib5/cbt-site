import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;