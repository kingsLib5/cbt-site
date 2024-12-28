import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import WelcomeAdmin from '../DashboardmenuComponets/WelcomeAdmin';
import AdminView from '../DashboardmenuComponets/AdminView';
import PastquestionsUpload from '../DashboardmenuComponets/PastquestionUpload';
import CbtquestionUpload from '../DashboardmenuComponets/CbtquestionUpload';

function Admin() {
  const [activeSection, setActiveSection] = useState(''); // Default: no section is active
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Hamburger menu toggle
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out'); // You can also clear session storage or cookies here
    navigate('/'); // Redirect to the Logout component
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false); // Close the hamburger menu
  };

  return (
    <div className="min-h-[100vh] grid grid-cols-1 md:grid-cols-12 bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block col-span-3 lg:col-span-2 bg-gray-300 flex flex-col items-center md:items-start p-4 space-y-6 shadow-lg md:relative absolute w-full md:w-auto z-10`}
      >
        {/* Close Button for Small Screens */}
        <div className="flex w-full justify-end md:hidden">
          <button
            className="text-2xl text-gray-800 hover:text-orange-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Dashboard Header */}
        <div className="flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-orange-500 transition">
          <MdDashboard className="text-2xl text-orange-500" />
          <span>Ad Dashboard</span>
        </div>

        {/* Sidebar Options */}
        <nav className="w-full space-y-4">
          <button
            className={`w-full text-left px-4 py-2 rounded-md font-semibold ${
              activeSection === 'AdminView' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
            }`}
            onClick={() => handleSectionClick('AdminView')}
          >
            Admin View
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-md font-semibold ${
              activeSection === 'PQ' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
            }`}
            onClick={() => handleSectionClick('PQ')}
          >
            PQ Upload
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-md font-semibold ${
              activeSection === 'Cbt-Q' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
            }`}
            onClick={() => handleSectionClick('Cbt-Q')}
          >
            Cbt-Q upload
          </button>
        </nav>

        {/* Logout Button */}
        <button
          className="w-full text-left px-4 py-2 rounded-md font-semibold text-red-600 hover:bg-red-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </aside>

      {/* Hamburger Menu */}
      <div className="md:hidden flex justify-between items-center bg-gray-200 p-4 shadow-lg">
        <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
        <FaBars
          className="text-xl cursor-pointer text-gray-800 hover:text-orange-500"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      {/* Main Content */}
      <main className="col-span-9 lg:col-span-10 p-6 bg-gray-200 shadow-inner">
        {/* Render Section Based on Active Tab */}
        {activeSection === 'Cbt-Q' && <CbtquestionUpload />}
        {activeSection === 'PQ' && <PastquestionsUpload />}
        {activeSection === 'AdminView' && <AdminView />}
        {activeSection === '' && <WelcomeAdmin />}
      </main>
    </div>
  );
}

export default Admin;
