// // // src/DoubleBarChart.js
// // import React from 'react';
// // import { Bar } from 'react-chartjs-2';
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from 'chart.js';

// // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // const DoubleBarChart = () => {
// //   const data = {
// //     labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu' , 'Fri'],
// //     datasets: [
// //       {
// //         label: 'Diposit',
// //         data: [12, 19, 3, 5, 2, 3,3],
// //         backgroundColor: '#232323',
// //         borderColor: '#',
// //         borderRadius : 30,
// //         width: 15,
// //         // borderWidth: 1,
// //       },
// //       {
// //         label: 'Withdraw',
// //         data: [2, 3, 20, 5, 1, 4,12],
// //         backgroundColor: '#396AFF',
// //         borderColor: '#396AF)',
// //         // borderWidth: 15px,
// //       },
// //     ],
// //   };

// //   const options = {
// //     responsive: true,
// //     scales: {
// //       x: {
// //         barThickness: 1, // Adjust this value to make the bars thinner (5 pixels)
// //         categoryPercentage: 0.5, // Adjust to control how much width the bars take in the category
// //         barPercentage: 0.1, // Adjust to control the width of the individual bars
// //       },
// //       y: {
// //         beginAtZero: true,
// //       },
// //     },
// //   };

// //   return <Bar data={data} options={options} />;
// // };

// // export default DoubleBarChart;
// const ApexChart = () => {
//   const [state, setState] = React.useState({
    
//       series: [{
//         data: [44, 55, 41, 64, 22, 43, 21]
//       }, {
//         data: [53, 32, 33, 52, 13, 44, 32]
//       }],
//       options: {
//         chart: {
//           type: 'bar',
//           height: 430
//         },
//         plotOptions: {
//           bar: {
//             horizontal: true,
//             dataLabels: {
//               position: 'top',
//             },
//           }
//         },
//         dataLabels: {
//           enabled: true,
//           offsetX: -6,
//           style: {
//             fontSize: '12px',
//             colors: ['#fff']
//           }
//         },
//         stroke: {
//           show: true,
//           width: 1,
//           colors: ['#fff']
//         },
//         tooltip: {
//           shared: true,
//           intersect: false
//         },
//         xaxis: {
//           categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
//         },
//       },
    
    
//   });

  

//   return (
//     <div>
//       <div id="chart">
//           <ReactApexChart options={state.options} series={state.series} type="bar" height={430} />
//         </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// }

// const domContainer = document.querySelector('#app');
// ReactDOM.render(<ApexChart />, domContainer);