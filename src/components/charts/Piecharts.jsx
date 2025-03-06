// src/PieChart.js

import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = ({ data, onHover }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (event, chartElement) => {
      if (chartElement.length > 0) {
        setHoveredIndex(chartElement[0].index);
      } else {
        setHoveredIndex(null);
      }
    };
  
    const modifiedData = {
      labels: data.labels,
      datasets: [
        {
          ...data.datasets[0],
          data: data.datasets[0].data.map((value, index) => {
            // Modify the value of the hovered piece to make it larger
            return index === hoveredIndex ? value * 1.3 : value; // Increase by 30% for hover effect
          }),
          backgroundColor: data.datasets[0].backgroundColor,
        },
      ],
    };
  
    return (
        <div>
      <Pie
        data={modifiedData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const label = tooltipItem.label || '';
                  const value = tooltipItem.raw || 0;
                  const total = tooltipItem.dataset.data.reduce((acc, val) => acc + val, 0);
                  const percentage = ((value / total) * 100).toFixed(2);
                  return `${label}: ${percentage}%`;
                },
              },
            },
          },
          interaction: {
            mode: 'nearest',
            intersect: true,
          },
        }}
        onHover={handleHover} // Call handleHover when hovering
      />
    </div>
  );
};

export default PieCharts;