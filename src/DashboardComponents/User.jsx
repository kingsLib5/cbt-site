import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Details from '../DashboardmenuComponets/Details';
import Profile from '../DashboardmenuComponets/Profile';
import Log from '../DashboardmenuComponets/Log';
import Welcome from '../DashboardmenuComponets/Welcome';

function User() {
  const [activeSection, setActiveSection] = useState(''); // Default: no section is active
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Hamburger menu toggle
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out'); // You can also clear session storage or cookies here
    navigate('/'); // Redirect to the Logout component
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block col-span-3 lg:col-span-2 bg-gray-200 flex flex-col items-center md:items-start p-4 space-y-6 shadow-lg md:relative absolute w-full md:w-auto z-10`}
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
          <span>Dashboard</span>
        </div>

        {/* Sidebar Options */}
        <nav className="w-full space-y-4">
          <button
            className={`w-full text-left px-4 py-2 rounded-md font-semibold ${
              activeSection === 'details' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
            }`}
            onClick={() => setActiveSection('details')}
          >
            Profile
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-md font-semibold ${
              activeSection === 'login' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
            }`}
            onClick={() => setActiveSection('login')}
          >
            CBT Results
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-md font-semibold ${
              activeSection === 'profile' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
            }`}
            onClick={() => setActiveSection('profile')}
          >
            Edit Details
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
      <main className="col-span-9 lg:col-span-10 p-6 bg-[white] shadow-inner">
        {/* Render Section Based on Active Tab */}
        {activeSection === 'details' && <Details />}
        {activeSection === 'login' && <Log />}
        {activeSection === 'profile' && <Profile />}
        {activeSection === '' && <Welcome />}
      </main>
    </div>
  );
}

export default User;
