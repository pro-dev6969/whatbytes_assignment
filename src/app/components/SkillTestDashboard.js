"use client";
import { useState } from 'react';
import QuickStatistics from './QuickStatistics';
import SyllabusAnalysis from './SyllabusAnalysis';
import ComparisonGraph from './ComparisonGraph';
import QuestionAnalysis from './QuestionAnalysis';
import { FaHtml5 } from "react-icons/fa";
import Modal from "./Modal";

export default function SkillTestDashboard() {
    // State for Quick Statistics
  const [statistics, setStatistics] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: "10 / 15",
  });

    // State for Modal Visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
                {/* Skill Test Section */}
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mb-6">
                    {/* Left Content */}
                    <div className="flex items-center gap-4">
                        {/* HTML Icon */}
                        <FaHtml5 className="text-4xl text-orange-500" /> {/* Icon styling */}
                        <div>
                            <h2 className="font-bold text-lg">Skill Test</h2>
                            <p>Hyper Text Markup Language</p>
                            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                        </div>
                    </div>

                    {/* Update Button */}
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:cursor-pointer"
                        onClick={() => setIsModalOpen(true)}>Update</button>

                    <Modal isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(updatedStats) => {
          setStatistics(updatedStats); // Update statistics dynamically
          setIsModalOpen(false); // Close modal after saving
        }}
        initialData={statistics} // Pass current statistics to modal 
        />
                </div>


                {/* Quick Statistics Section */}
                <QuickStatistics statistics={statistics}/>

                {/* Comparison Graph Section */}
                <ComparisonGraph percentile={statistics.percentile}/>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                {/* Syllabus Wise Analysis Section */}
                <SyllabusAnalysis />

                {/* Question Analysis Section */}
                <QuestionAnalysis />
            </div>
        </div>
    );
}
