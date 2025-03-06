import React from "react";
import Card from "components/card";
import ReactApexChart from "react-apexcharts";

const PieChatApex = () => {
  const [state, setState] = React.useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Card extra="flex flex-col bg-[#F5F7FA] w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between  pb-[18px]">
        <h2 className="text-[22px] font-bold text-[#343C6A]">
          Expensive Statstics 
        </h2>
      </div>
      <div>
        <div id="chart" className="mt-2 rounded-md bg-white px-[30px]">
          <div className="flex  gap-[30px] py-7">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="pie"
              width={380}
            />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    </Card>
  );
};

export default PieChatApex;
