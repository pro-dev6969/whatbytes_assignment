export default function SyllabusAnalysis() {
    const topics = [
      { name: 'HTML Tools, Forms, History', score: 80, color: 'bg-blue-500' },
      { name: 'Tags & References in HTML', score: 60, color: 'bg-orange-500' },
      { name: 'Tables & References in HTML', score: 24, color: 'bg-red-500' },
      { name: 'Tables & CSS Basics', score: 96, color: 'bg-green-500' },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold text-lg mb-4">Syllabus Wise Analysis</h2>
        {topics.map((topic, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{topic.name}</span>
              <span>{topic.score}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div style={{ width: `${topic.score}%` }} className={`h-full ${topic.color} rounded-full`} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  