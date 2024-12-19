import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Cbt() {
  const testResults = [
    { label: "Score Achieved", value: "85/100" },
    { label: "Breakdown (By Subject/Topic)", value: "Math: 40, Science: 25, English: 20" },
    { label: "Percentage/Grade", value: "85% (A)" },
  ];

  const upcomingTests = [
    {
      date: "Dec 12, 2024, 10:00 AM",
      subjects: "Math, Science",
      timeLimit: "1 hour",
      format: "Multiple Choice",
    },
    {
      date: "Dec 15, 2024, 2:00 PM",
      subjects: "English, History",
      timeLimit: "1.5 hours",
      format: "Essay and Short Answer",
    },
    {
      date: "Dec 20, 2024, 9:00 AM",
      subjects: "Physics, Chemistry",
      timeLimit: "2 hours",
      format: "Practical and Theory",
    },
  ];

  const progressData = [
    { name: "Math", value: 40 },
    { name: "Science", value: 25 },
    { name: "English", value: 20 },
    { name: "Other", value: 15 },
  ];

  const attemptHistory = [
    {
      date: "Nov 30, 2024",
      score: "75/100",
      reviewLink: "#",
    },
    {
      date: "Nov 20, 2024",
      score: "65/100",
      reviewLink: "#",
    },
    {
      date: "Nov 10, 2024",
      score: "80/100",
      reviewLink: "#",
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-600">CBT Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your test results, progress, and upcoming tests</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Test Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Card title="Test Results">
            {testResults.map((result, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-orange-50 p-3 rounded-lg shadow-sm mb-2"
              >
                <span className="font-medium text-gray-700">{result.label}:</span>
                <span className="text-gray-900">{result.value}</span>
              </div>
            ))}
          </Card>
        </motion.div>

        {/* Upcoming Tests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Card title="Upcoming Tests">
            {upcomingTests.map((test, index) => (
              <div
                key={index}
                className="bg-green-50 p-3 rounded-lg shadow-sm mb-2"
              >
                <p><strong>Date/Time:</strong> {test.date}</p>
                <p><strong>Subjects:</strong> {test.subjects}</p>
                <p><strong>Time Limit:</strong> {test.timeLimit}</p>
                <p><strong>Format:</strong> {test.format}</p>
              </div>
            ))}
          </Card>
        </motion.div>

        {/* Progress Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Card title="Progress Results">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={progressData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {progressData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Attempt History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Card title="Attempts History">
            {attemptHistory.map((attempt, index) => (
              <div
                key={index}
                className="bg-blue-50 p-3 rounded-lg shadow-sm mb-2"
              >
                <p><strong>Date:</strong> {attempt.date}</p>
                <p><strong>Score:</strong> {attempt.score}</p>
                <p>
                  <strong>Review:</strong>{" "}
                  <a href={attempt.reviewLink} className="text-blue-500 underline">
                    View Answers
                  </a>
                </p>
              </div>
            ))}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default Cbt;
