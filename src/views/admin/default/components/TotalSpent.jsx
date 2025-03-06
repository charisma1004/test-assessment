import React from "react";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";
import BallanceHistory from "components/charts/BallanceHistory";

const TotalSpent = () => {
  return (
    <Card extra="flex flex-col bg-[#F5F7FA] w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between  pb-[18px]">
        <h2 className="text-[22px] font-bold text-[#343C6A]">
          Ballance Hisotry
        </h2>
      </div>

      <div className=" rounded-md bg-white h-[264px] px-[30px]">
          
            <BallanceHistory
              options={lineChartOptionsTotalSpent}
              series={lineChartDataTotalSpent}
            />
    
        {/* <div className="flex">
        <div>
          {targetPointlist.data.map((item, i) => (
            <div className={`pb-5 text-sm text-[#718EBF]`}>{item}</div>
          ))}
        </div>
        <div className="h-[186px] w-full xl:h-[250px]">
          <BarChart
            chartData={barChartDataWeeklyRevenue}
            chartOptions={barChartOptionsWeeklyRevenue}
          />
          
        </div>
      </div> */}
      </div>
    </Card>
  );
};

export default TotalSpent;
