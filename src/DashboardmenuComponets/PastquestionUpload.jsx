import React from 'react';

const PastquestionsUpload = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Upload Past Questions</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600">Category/Subject</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter category" />
        </div>
        <div>
          <label className="block text-gray-600">Upload File</label>
          <input type="file" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-600">Description</label>
          <textarea className="w-full p-2 border rounded-md" placeholder="Optional notes"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md">Upload</button>
      </form>
    </div>
  );
};

export default PastquestionsUpload;
