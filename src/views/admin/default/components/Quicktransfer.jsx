import Card from "components/card";
import BarChart from "components/charts/BarChart";
import DoubleBarChart from "components/charts/DoubleBarChart";
import { useState } from "react";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
  targetPointlist,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";
import Position from "./Position";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import { color } from "@chakra-ui/system";
import InputField from "components/fields/InputField";
import ButtonField from "components/fields/ButtunField";
import { IoPaperPlane } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
// import { targetPointlist } from "variables/charts";

const Quicktransfer = () => {
  const HistoryData = [
    {
      image: Nft1,
      title: "CEO",
      name: "Mark Benjamin",
    },
    {
      image: Nft2,
      title: "Director",
      name: "Esthera Jackson",
    },
    {
      image: Nft3,
      title: "Developer",
      name: "Nick Wilson",
    },
    // {
    //   image: Nft4,
    //   title: "Designer",
    //   name: " Peter Will",
    // },
  ];
  const [limitNumber, setLimitNubmer] = useState(0);
  const nextUser = () => {
    setLimitNubmer(limitNumber + 1);
  };
  // useEffect(() => {

  // }, []);
  // console.log(limitNumber);
  return (
    <Card extra="flex flex-col bg-[#F5F7FA] w-[445px] rounded-3xl h-[323px] py-6 px-2 text-center">
      <div className="flex items-center justify-between pb-5">
        <h2 className="text-[22px] font-bold text-[#343C6A]">Quick Transfer</h2>
      </div>

      <div className=" rounded-md bg-white px-[30px]">
        <div className="flex gap-8">
          {HistoryData.map((data, index) => {
            // if (index >= limitNumber && index <= limitNumber + 2) {
            return (
              <div className="flex    items-start justify-between bg-white px-3 py-[20px]  dark:shadow-none dark:hover:!bg-navy-700">
                <div className="flex flex-col items-center justify-center   gap-3">
                  <div className="flex h-16 w-16 items-center justify-center">
                    <img
                      className="h-full w-full rounded-full"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-base font-bold text-navy-700 dark:text-white">
                      {" "}
                      {data.title}
                    </h5>
                    <p className="mt-1 text-sm  font-normal text-gray-600">
                      {" "}
                      {data.name}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
            // }
          })}
          <input
            type="button"
            onClick={nextUser}
            className=" cursor-pointer"
            value={">"}
          />
        </div>
        <div className="flex">
          <InputField
            label="Write Amount"
            placeholder="525.50"
            className=""
            type="text"
            extra="flex gap-[27px]"
          />
          {/* <input type="button" className="" >Send <FaRegPaperPlane/></input> */}
          <div className=" flex gap-4 pb-6 align-middle  text-white">
              <div className="py-3 px-6 flex gap-4  justify-center items-center bg-[#232323] rounded-[50px]">
                <span>Send</span>
                <span><FaRegPaperPlane/></span>
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
      <div>
        
      </div>
    </Card>
  );
};

export default Quicktransfer;
