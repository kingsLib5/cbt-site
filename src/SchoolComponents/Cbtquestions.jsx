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
  const [step, setStep] = useState(1); // 1 = Subject Selection, 2 = Test
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [duration, setDuration] = useState(5); // Default duration in minutes
  const [timeLeft, setTimeLeft] = useState(0);
  const [questionsPerSubject, setQuestionsPerSubject] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // Store user's answers

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
      { question: "What is 2+2?", options: ["2", "3", "4", "5"] },
      { question: "What is 10-7?", options: ["2", "3", "1", "5"] },
    ],
    English: [
      { question: "Choose the correct spelling:", options: ["Accomodate", "Accommodate", "Acommodate", "Accomadate"] },
      { question: "Fill in the blank: She ___ happy.", options: ["was", "is", "were", "are"] },
    ],
    Biology: [
      { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"] },
      { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"] },
    ],
    Agriculture: [
      { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"] },
      { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"] },
    ],
    // Add more questions for other subjects here
  };

  useEffect(() => {
    if (step === 2) {
      setTimeLeft(duration * 60);
      const questionCount = Math.ceil(duration / 5) * 5;
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
    setStep(1);
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
      <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[orangered] text-white py-4 px-6">
            <h1 className="text-2xl font-semibold text-center">
              {step === 1 ? "Select Subjects and Start Test" : "CBT Test"}
            </h1>
          </div>
          <div className="p-6">
            {step === 1 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Choose 4 Subjects to Begin:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      className={`py-2 px-4 text-center rounded-lg ${
                        selectedSubjects.includes(subject)
                          ? "bg-[orangered] text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => toggleSubjectSelection(subject)}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-700">
                    Test Duration (Minutes):
                  </label>
                  <select
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  >
                    <option value={5}>5 Minutes</option>
                    <option value={10}>10 Minutes</option>
                    <option value={15}>15 Minutes</option>
                    <option value={20}>20 Minutes</option>
                  </select>
                </div>
                <button
                  onClick={startTest}
                  className="mt-6 w-full bg-[orangered] text-white py-2 rounded-lg shadow-md"
                >
                  Start Test
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    {selectedSubjects[currentSubjectIndex]} - Question {currentQuestionIndex + 1}
                  </h2>
                  <p>
                    Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}
                    {timeLeft % 60}
                  </p>
                </div>
                <p className="mb-4 text-gray-700">
                  {questions[currentSubjectIndex]?.[currentQuestionIndex]?.question || "No question"}
                </p>
                <div className="space-y-2">
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
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePreviousQuestion}
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
                    disabled={currentQuestionIndex === 0 && currentSubjectIndex === 0}
                  >
                    Previous
                  </button>
                  {currentSubjectIndex === selectedSubjects.length - 1 &&
                  currentQuestionIndex === (questions[currentSubjectIndex]?.length || 0) - 1 ? (
                    <button
                      onClick={handleSubmit}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="bg-[orangered] text-white py-2 px-4 rounded-lg"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Cbtquestions;
