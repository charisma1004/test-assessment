
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import Quicktransfer from "./components/Quicktransfer";
import MasterCard from "components/card/MasterCard";
import Transaction from "components/card/Transaction";

const Dashboard = () => {
  return (
    <div>
      <div className="bg mt-5 flex gap-5">
        <div>
          <div className="flex justify-between">
            <p className="text-2xl pl-4 font-medium text-gray-900">My Cards</p>
            <input
              type="button"
              className="text-2xl text-gray-900"
              value={"See All"}
            ></input>
          </div>
          <div className="flex ml-3 justify-between gap-5  overflow-auto">
            <MasterCard
              bgcolor="black"
              valid_date="12/22"
              holder="Eddy Cusuma"
              ballance="5,765"
              cardNumber="3778 **** **** 1234"
            />
            <MasterCard
              bgcolor="white"
              valid_date="12/22"
              holder="Eddy Cusuma"
              ballance="5,765"
              cardNumber="3778 **** **** 1234"
            />
          </div>
        </div>
        <div>
          <p className="text-2xl font-medium text-gray-900">
            Recent Transaction
          </p>
          <Transaction
            carddate="28 January 2021"
            paypaldate="28 January 2021"
            jemidate="28 January 2021"
            cardBallance="-850"
            paypalBallance="+2500"
            jemiBallance="+5400"
          />
        </div>
      </div>
      <div className="bg mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* <VirtualCard /> */}
        <div>
          <WeeklyRevenue />
        </div>
        <div>
          <PieChartCard />
        </div>
      </div>
      <div className="mt-5 flex w-full gap-5 md:flex-row flex-col">
        <div className="">
          <Quicktransfer />
        </div>
        <div className=" w-full">
          <TotalSpent />
        </div>
      </div>

      {/* Tables & Charts */}
    </div>
  );
};

export default Dashboard;
