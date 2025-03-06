import Card from "components/card";
import BarChart from "components/charts/BarChart";
import DoubleBarChart from "components/charts/DoubleBarChart";
import ReactApexChart from "react-apexcharts";
import { doubleChartOptions } from "variables/charts";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
  targetPointlist,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";
import Position from "./Position";
import { color } from "@chakra-ui/system";
// import { targetPointlist } from "variables/charts";

const WeeklyRevenue = () => {
  return (
    <Card extra="flex flex-col bg-[#F5F7FA] w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between  pb-[18px]">
        <h2 className="text-[22px] font-bold text-[#343C6A]">
          Weekly Activity
        </h2>
      </div>

      <div className=" mt-2 rounded-md bg-white px-[30px]">
        <div>
          <div className="flex items-center py-7  justify-end gap-[30px]">
          <ReactApexChart options={doubleChartOptions.options} series={doubleChartOptions.series} type="bar" height={226} width={667} />
          </div>
        </div>
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

export default WeeklyRevenue;
