import React from 'react';

const CbtquestionUpload = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Upload CBT Questions</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600">Question Text</label>
          <textarea className="w-full p-2 border rounded-md" placeholder="Enter the question"></textarea>
        </div>
        <div>
          <label className="block text-gray-600">Options</label>
          {[...Array(4)].map((_, i) => (
            <input
              key={i}
              type="text"
              className="w-full p-2 border rounded-md mb-2"
              placeholder={`Option ${i + 1}`}
            />
          ))}
        </div>
        <div>
          <label className="block text-gray-600">Correct Answer</label>
          <select className="w-full p-2 border rounded-md">
            {[...Array(4)].map((_, i) => (
              <option key={i} value={`Option ${i + 1}`}>Option {i + 1}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md">Upload</button>
      </form>
    </div>
  );
};

export default CbtquestionUpload;
