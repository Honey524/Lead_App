import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function SegmentChart({ leads }) {
  const segmentData = [
    { name: 'High', value: leads.filter(l => l.segment === 'High').length },
    { name: 'Medium', value: leads.filter(l => l.segment === 'Medium').length },
    { name: 'Low', value: leads.filter(l => l.segment === 'Low').length },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={segmentData}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          fill="#8884d8"
          dataKey="value"
          label
        >
          {segmentData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default SegmentChart;
