import React, { useState } from "react";
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupList, setPopupList] = useState([]);

  // Placeholder data for Total Registered Students
  const totalRegisteredData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Registered Students",
        data: [200, 300, 400, 500, 600, 700],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  // Placeholder data for Total Exams Taken
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

  // Placeholder data for Score Distribution
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

  // Dynamic list of registered students
  const usersList = [
    { name: "John Doe", email: "john@example.com", date: "2024-12-01" },
    { name: "Jane Smith", email: "jane@example.com", date: "2024-12-02" },
  ];

  // Extended list of registered students for the popup
  const allUsersList = [
    { name: "John Doe", email: "john@example.com", date: "2024-12-01" },
    { name: "Jane Smith", email: "jane@example.com", date: "2024-12-02" },
    { name: "Alice Brown", email: "alice@example.com", date: "2024-12-03" },
    { name: "Bob Johnson", email: "bob@example.com", date: "2024-12-04" },
    // Add more dummy users
  ];

  // List of students with the highest scores
  const topScorers = [
    { name: "Alice Johnson", score: 98 },
    { name: "Bob Brown", score: 96 },
    { name: "Charlie Davis", score: 95 },
  ];

  // Extended list of top scorers for the popup
  const allTopScorers = [
    { name: "Alice Johnson", score: 98 },
    { name: "Bob Brown", score: 96 },
    { name: "Charlie Davis", score: 95 },
    { name: "Diana Prince", score: 94 },
    { name: "Eve Stone", score: 93 },
    // Add more top scorers
  ];

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
        <h2 className="text-xl font-bold mb-4 text-gray-800">Total Registered Students</h2>
        <Bar data={totalRegisteredData} />
      </div>

      {/* Exams Taken Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Exams Taken Over Time</h2>
        <Bar data={examsTakenData} />
      </div>

      {/* Registered Users List */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
        onClick={() => handleOpenPopup("More Registered Users", allUsersList)}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Registered Users</h2>
        <ul className="divide-y divide-gray-300">
          {usersList.map((user, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{user.name}</span>
              <span className="text-gray-600">{user.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Score Distribution Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Score Distribution</h2>
        <Pie data={scoresData} />
      </div>

      {/* Top Scorers List */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
        onClick={() => handleOpenPopup("Top Scorers", allTopScorers)}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Top Scorers</h2>
        <ul className="divide-y divide-gray-300">
          {topScorers.map((student, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{student.name}</span>
              <span className="text-gray-600">{student.score}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup for additional lists */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-800">{popupTitle}</h2>
            <ul className="divide-y divide-gray-300">
              {popupList.map((item, index) => (
                <li key={index} className="py-2 flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-gray-600">{item.email || item.score}</span>
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
