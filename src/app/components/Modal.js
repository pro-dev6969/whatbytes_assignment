"use client"
import React , { useState } from "react";
import { FaHtml5 } from "react-icons/fa"; // Import HTML icon
import { AiOutlineArrowRight } from "react-icons/ai"; // Import arrow icon

export default function Modal({ isOpen, onClose, onSave, initialData }) {
  
    const [rank, setRank] = useState(initialData.rank);
  const [percentile, setPercentile] = useState(initialData.percentile);
  const [correctAnswers, setCorrectAnswers] = useState(
    initialData.correctAnswers.split(" / ")[0]
  );
    
  if (!isOpen) return null; // Return nothing if modal is not open

  // saving function 
  const handleSave = () => {
    onSave({
      rank,
      percentile,
      correctAnswers: `${correctAnswers} / 15`,
    });
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2"> 
            <h2 className="text-xl font-bold">Update Scores</h2>
          </div>
          <FaHtml5 className="text-orange-500 text-3xl" /> {/* HTML Icon */}
        </div>

        {/* Modal Body */}
        <div className="mt-4 space-y-6">
          {/* Section 1 */}
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">
              1
            </span>
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="rank"
                className="text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                Update your <span className="font-bold">Rank</span>
              </label>
              <input
                type="number"
                id="rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="w-32 px-3 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">
              2
            </span>
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="percentile"
                className="text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                Update your <span className="font-bold">Percentile</span>
              </label>
              <input
                type="number"
                id="percentile"
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
                className="w-32 px-3 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">
              3
            </span>
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="score"
                className="text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                Update your{" "}
                <span className="font-bold">Current Score (out of 15)</span>
              </label>
              <input
                type="number"
                id="score"
                value={correctAnswers}
                onChange={(e) => setCorrectAnswers(e.target.value)}
                className="w-32 px-3 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        </div>


        {/* Modal Footer */}
        <div className="flex justify-end mt-6 space-x-4">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          >
            Cancel
          </button>

          {/* Save Button */}
          <button 
          onClick={handleSave}
          className="px-4 py-2 flex items-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
