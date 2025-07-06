// components/ScoreBarChart.js
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

function ScoreBarChart({ leads }) {
  // Initialize distribution object
  const scoreDistribution = {
    Low: 0,
    Medium: 0,
    High: 0,
  };

  // Count segments
  leads.forEach((lead) => {
    const segment = lead.segment?.toLowerCase(); // ✅ Correct key
    if (segment === 'low' || segment === 'medium' || segment === 'high') {
      const properCase = segment.charAt(0).toUpperCase() + segment.slice(1);
      scoreDistribution[properCase]++;
    }
  });

  // Convert to array for chart
  const data = Object.entries(scoreDistribution).map(([segment, count]) => ({
    segment,
    count,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="segment" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#1D4ED8" barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ScoreBarChart;
