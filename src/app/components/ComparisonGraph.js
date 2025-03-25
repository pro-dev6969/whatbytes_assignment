"use client";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



export default function ComparisonGraph({percentile}) {
    let data = [
        { name: "Week 1", percentile: 20 },
        { name: "Week 2", percentile: 35 },
        { name: "Week 3", percentile: 50 },
        { name: "Week 4", percentile: percentile },
      ];
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">Comparison Graph</h2>
      <p className="mb-4">
        You scored <span className="font-bold">{percentile}% percentile</span>, which is
        {(percentile<72)?" lower than":" greater or equal to"}  the average percentile (<span className="font-bold">72%</span>).
      </p>

      {/* Responsive container for the graph */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="percentile" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
