import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminView = () => {
  // Popup state management
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupList, setPopupList] = useState([]);

  // State for dynamic data from the backend
  const [registeredCount, setRegisteredCount] = useState(0);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Fetch the total count of registered non-admin users
  useEffect(() => {
    const fetchRegisteredCount = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/admin/usercount", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        setRegisteredCount(response.data.count);
      } catch (error) {
        console.error("Error fetching registered count:", error.response || error);
      }
    };

    fetchRegisteredCount();
  }, []);

  // Fetch the list of registered (non-admin) users
  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/admin/users", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        setRegisteredUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching registered users:", error.response || error);
      }
    };

    fetchRegisteredUsers();
  }, []);

  // Chart data for Total Registered Students
  const totalRegisteredData = {
    labels: ["Total Registered Students"],
    datasets: [
      {
        label: "Students",
        data: [registeredCount],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  // Placeholder data for Exams Taken Chart
  const examsTakenData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Exams Taken",
        data: [15, 25, 30, 20, 35, 40],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  };

  // Placeholder data for Score Distribution Chart
  const scoresData = {
    labels: ["High Scores", "Low Scores"],
    datasets: [
      {
        label: "Score Distribution",
        data: [85, 15],
        backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 205, 86, 0.5)"],
      },
    ],
  };

  // Main list: display the first five registered users
  const displayedUsers = registeredUsers.slice(0, 5);

  // Handlers for opening and closing the popup
  const handleOpenPopup = (title, list) => {
    setPopupTitle(title);
    setPopupList(list);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Total Registered Students Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Total Registered Students
        </h2>
        <Bar data={totalRegisteredData} />
      </div>

      {/* Exams Taken Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Exams Taken Over Time
        </h2>
        <Bar data={examsTakenData} />
      </div>

      {/* Registered Users List */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
        onClick={() => handleOpenPopup("All Registered Users", registeredUsers)}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Registered Users
        </h2>
        <ul className="divide-y divide-gray-300">
          {displayedUsers.length > 0 ? (
            displayedUsers.map((user, index) => (
              <li key={index} className="py-2">
                <span>
                  {user.firstName && user.lastName
                    ? `${user.firstName} ${user.lastName}`
                    : user.name || "Unnamed User"}
                </span>
              </li>
            ))
          ) : (
            <li className="py-2 text-gray-600">No registered users found.</li>
          )}
        </ul>
      </div>

      {/* Score Distribution Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Score Distribution
        </h2>
        <Pie data={scoresData} />
      </div>

      {/* Top Scorers List */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
        onClick={() =>
          handleOpenPopup("Top Scorers", [
            { name: "Alice Johnson", score: 98 },
            { name: "Bob Brown", score: 96 },
            { name: "Charlie Davis", score: 95 },
            { name: "Diana Prince", score: 94 },
            { name: "Eve Stone", score: 93 },
          ])
        }
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Top Scorers</h2>
        <ul className="divide-y divide-gray-300">
          {[
            { name: "Alice Johnson", score: 98 },
            { name: "Bob Brown", score: 96 },
            { name: "Charlie Davis", score: 95 },
          ].map((student, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{student.name}</span>
              <span className="text-gray-600">{student.score}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup for viewing full user list */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-800">{popupTitle}</h2>
            <ul className="divide-y divide-gray-300">
              {popupList.map((user, index) => (
                <li key={index} className="py-2">
                  <span>
                    {user.firstName && user.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : user.name || "Unnamed User"}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminView;
