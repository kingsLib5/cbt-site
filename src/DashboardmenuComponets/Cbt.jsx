import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#d45079"];

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600">CBT Review</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Test Results */}
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <Card title="Test Results">
            <div className="space-y-2">
              {testResults.map((result, index) => (
                <div key={index} className="flex justify-between items-center bg-purple-100 p-2 rounded-lg">
                  <span className="font-medium text-black">{result.label}:</span>
                  <span className="text-black">{result.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Upcoming Tests */}
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <Card title="Upcoming Tests">
            <ul className="space-y-2">
              {upcomingTests.map((test, index) => (
                <li key={index} className="bg-green-100 p-2 rounded-lg">
                  <p><strong>Date/Time:</strong> {test.date}</p>
                  <p><strong>Subjects:</strong> {test.subjects}</p>
                  <p><strong>Time Limit:</strong> {test.timeLimit}</p>
                  <p><strong>Format:</strong> {test.format}</p>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Progress Results */}
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <Card title="Progress Results">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={progressData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {progressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Attempts History */}
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <Card title="Attempts History">
            <ul className="space-y-2">
              {attemptHistory.map((attempt, index) => (
                <li key={index} className="bg-indigo-100 p-2 rounded-lg">
                  <p><strong>Date:</strong> {attempt.date}</p>
                  <p><strong>Score:</strong> {attempt.score}</p>
                  <p><strong>Review:</strong> <a href={attempt.reviewLink} className="text-blue-500 underline">View Answers</a></p>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 h-full">
      <h2 className="text-xl font-semibold text-black mb-3">{title}</h2>
      {children}
    </div>
  );
}

export default Cbt;