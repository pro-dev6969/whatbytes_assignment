export default function QuickStatistics({statistics}) {
  const stats = [
    { label: "YOUR RANK", value: statistics.rank, icon: "🏆" },
    { label: "PERCENTILE", value: `${statistics.percentile}%`, icon: "📊" },
    { label: "CORRECT ANSWERS", value: statistics.correctAnswers, icon: "✔️" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="font-bold text-lg mb-4">Quick Statistics</h2>

      {/* Statistics Grid */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4  p-4"
          >
            <span className="text-xl">{stat.icon}</span>
            <div>
              <h3 className="text-sm text-gray-500">{stat.label}</h3>
              <p className="text-lg font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
