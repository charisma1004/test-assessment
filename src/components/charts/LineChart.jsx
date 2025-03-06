import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; 

Chart.register(...registerables);

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // 7 months
        datasets: [
            {
                label: 'Progress',
                data: [600, 650, 700, 720, 780, 800, 830], // Example values
                borderColor: 'rgba(75, 192, 192, 1)', // Line color
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill under the line
                fill: true, // Fill the area below the curve
                tension: 0.4, // Change this value to control the curvature (0 is straight line, higher is more curve)
            },
            {
                label: 'Target',
                data: new Array(7).fill(800), // Constant target line
                borderColor: 'rgba(255, 99, 132, 1)', // Target line color
                borderDash: [5, 5], // Dashed line for target
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            },
        },
    };

    return (
        <div>
            <h2>Curved Line Chart Example</h2>
            <Line data={data} options={options} />
        </div>
    );

};

export default LineChart;