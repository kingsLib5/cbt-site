import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error("Error caught in ErrorBoundary:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};

const Cbtquestions = () => {
  const [step, setStep] = useState(1); // Step in the process: 1. Subject Selection, 2. Test
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [duration, setDuration] = useState(5); // Default test duration (in minutes)
  const [timeLeft, setTimeLeft] = useState(0);
  const [questionsPerSubject, setQuestionsPerSubject] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // Track user's answers

  const subjects = [
    "Mathematics",
    "English",
    "Biology",
    "Chemistry",
    "Physics",
    "History",
    "Geography",
    "Economics",
    "Civic Education",
    "Literature",
    "Agriculture",
    "Computer Science",
  ];

  const allQuestions = {
    Mathematics: [
      { question: "Math Q1", options: ["A", "B", "C", "D"] },
      { question: "Math Q2", options: ["E", "F", "G", "H"] },
      // Add more questions as needed
    ],
    English: [
      { question: "Eng Q1", options: ["I", "J", "K", "L"] },
      { question: "Eng Q2", options: ["M", "N", "O", "P"] },
    ],
    Biology: [
      { question: "Bio Q1", options: ["Q", "R", "S", "T"] },
      { question: "Bio Q2", options: ["U", "V", "W", "X"] },
    ],
    Agriculture: [
      { question: "Agr Q1", options: ["Q", "R", "S", "T"] },
      { question: "Agr Q2", options: ["U", "V", "W", "X"] },
    ],
  };

  useEffect(() => {
    if (step === 2) {
      setTimeLeft(duration * 60); // Convert duration to seconds
      const questionCount = Math.ceil(duration / 5) * 5; // Adjust questions based on duration
      setQuestionsPerSubject(questionCount);

      const selectedQuestions = selectedSubjects.map((subject) =>
        allQuestions[subject] ? allQuestions[subject].slice(0, questionCount) : []
      );
      setQuestions(selectedQuestions);
    }
  }, [step, selectedSubjects, duration]);

  useEffect(() => {
    if (timeLeft > 0 && step === 2) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, step]);

  const toggleSubjectSelection = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]
    );
  };

  const startTest = () => {
    if (selectedSubjects.length < 4) {
      alert("Please select at least 4 subjects.");
    } else {
      setStep(2);
    }
  };

  const handleAnswerChange = (subjectIndex, questionIndex, selectedOption) => {
    const key = `${subjectIndex}-${questionIndex}`;
    setUserAnswers((prev) => ({ ...prev, [key]: selectedOption }));
  };

  const handleSubmit = () => {
    console.log("User's Answers:", userAnswers);
    alert("Test submitted successfully!");
    setUserAnswers({});
    setStep(1); // Move back to subject selection
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (questions[currentSubjectIndex]?.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSubjectIndex < selectedSubjects.length - 1) {
      setCurrentSubjectIndex(currentSubjectIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSubjectIndex > 0) {
      setCurrentSubjectIndex(currentSubjectIndex - 1);
      setCurrentQuestionIndex((questions[currentSubjectIndex - 1]?.length || 0) - 1);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold mb-6">Select Subjects for Your Test</h1>
            <div className="grid grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  className={`py-2 px-4 rounded ${
                    selectedSubjects.includes(subject) ? "bg-[orangered] text-white" : "bg-gray-300"
                  }`}
                  onClick={() => toggleSubjectSelection(subject)}
                >
                  {subject}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <label htmlFor="duration" className="block text-lg font-medium mb-2">
                Select Duration (Minutes):
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="border border-gray-300 rounded px-4 py-2"
              >
                <option value={5}>5 Minutes</option>
                <option value={10}>10 Minutes</option>
                <option value={15}>15 Minutes</option>
                <option value={20}>20 Minutes</option>
              </select>
            </div>

            <button
              onClick={startTest}
              className="mt-6 bg-[orangered] text-white py-2 px-4 rounded"
            >
              Start Test
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <h2>
                Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </h2>
              <h2>
                {selectedSubjects[currentSubjectIndex]} - Question {currentQuestionIndex + 1}
              </h2>
              <div>
                <p>
                  {questions[currentSubjectIndex]?.[currentQuestionIndex]?.question || "No question available"}
                </p>
                <div>
                  {questions[currentSubjectIndex]?.[currentQuestionIndex]?.options.map((option, index) => (
                    <label key={index} className="block">
                      <input
                        type="radio"
                        name={`question-${currentSubjectIndex}-${currentQuestionIndex}`}
                        value={option}
                        checked={
                          userAnswers[`${currentSubjectIndex}-${currentQuestionIndex}`] === option
                        }
                        onChange={() =>
                          handleAnswerChange(currentSubjectIndex, currentQuestionIndex, option)
                        }
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousQuestion}
                  className="bg-[orangered] py-2 px-4 rounded"
                  disabled={currentQuestionIndex === 0 && currentSubjectIndex === 0}
                >
                  Previous
                </button>
                {currentSubjectIndex === selectedSubjects.length - 1 &&
                currentQuestionIndex === (questions[currentSubjectIndex]?.length || 0) - 1 ? (
                  <button onClick={handleSubmit} className="bg-green-500 py-2 px-4 rounded">
                    Submit
                  </button>
                ) : (
                  <button onClick={handleNextQuestion} className="bg-[orangered] py-2 px-4 rounded">
                    Next
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Cbtquestions;
