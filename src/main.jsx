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
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

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
          <Route path="/Contact" element={<Contactus />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/codecraft" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);