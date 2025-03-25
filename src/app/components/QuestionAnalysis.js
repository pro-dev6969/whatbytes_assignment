"use client"; // Ensure this component is treated as a client component

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required elements for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export default function QuestionAnalysis() {
  // Data for the pie chart
  const data = {
    labels: ["Correct Answers", "Incorrect Answers"],
    datasets: [
      {
        label: "Question Analysis",
        data: [10, 5], // Example: 10 correct answers, 5 incorrect answers
        backgroundColor: ["#10b981", "#ef4444"], // Green for correct, red for incorrect
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Question Analysis",
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">Question Analysis</h2>
      <p>
        You scored <span className="font-bold">10 questions correct</span> out of
        15. However, it still needs some improvements.
      </p>
      {/* Pie Chart */}
      <div className="mt-6">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
