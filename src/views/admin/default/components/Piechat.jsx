import Card from "components/card";
import PieCharts from "components/charts/Piecharts";
import { MdBarChart } from "react-icons/md";
import Position from "./Position";
import { color } from "@chakra-ui/system";
// import { targetPointlist } from "variables/charts";

const Piechat = () => {
    const pieData = {
        labels: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4'],
        datasets: [
          {
            label: 'My Pie Chart',
            data: [25, 35, 20, 20],  // Values for the segments
            backgroundColor: [
              '#FF6384', // Segment 1 color
              '#36A2EB', // Segment 2 color
              '#FFCE56', // Segment 3 color
              '#4BC0C0', // Segment 4 color
            ],
          },
        ],
      };
  return (
    <Card extra="flex flex-col bg-[#F5F7FA] w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between  pb-[18px]">
        <h2 className="text-[22px] font-bold text-[#343C6A]">
          Expensive Statistics
        </h2>
      </div>
      <div className=" mt-2 rounded-md bg-white ">
        <div>
          <div className="items-center">
         
            <div className="h-72 w-72">
               <PieCharts data={pieData} />
            </div>

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

export default Piechat;
