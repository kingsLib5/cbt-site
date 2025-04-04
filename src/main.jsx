import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './SchoolComponents/Header';
import Hero from './SchoolComponents/Hero';
import About from './SchoolComponents/About';
import Pastquestions from './SchoolComponents/Pastquestions';
import Cbtquestions from './SchoolComponents/Cbtquestions';
import Contactus from './SchoolComponents/Contactus';
import Footer from './SchoolComponents/Footer';
import Register from './SchoolComponents/Register';
import Admin from './DashboardComponents/Admin';
import User from './DashboardComponents/User';
import ForgotPassword from './SchoolComponents/ForgotPassword';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import AdminProtectedRoute from './AdminProtectedRoute';

// Import our FancyAlert component and its trigger
import FancyAlert, { triggerFancyAlert } from './SchoolComponents/FancyAlert';

// Override the global alert function to trigger our fancy alert
window.alert = triggerFancyAlert;

// Layout component to handle Header and Footer visibility
const Layout = ({ children }) => {
  const location = useLocation();
  // Routes where Header and Footer should be hidden
  const hideHeaderFooter = location.pathname === '/codecraft';
  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/CBT Exam"
            element={
              <ProtectedRoute>
                <Cbtquestions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Past Questions"
            element={
              <ProtectedRoute>
                <Pastquestions />
              </ProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Contact" element={<Contactus />} />
          <Route path="/Register" element={<Register />} />
          
          <Route
            path="/codecraft"
            element={
              <AdminProtectedRoute>
                <Admin />
              </AdminProtectedRoute>
            }
          />

          {/* Protect the User route as well */}
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
      {/* Render the FancyAlert component globally */}
      <FancyAlert />
    </BrowserRouter>
  </StrictMode>
);
