import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { IoIosCard } from "react-icons/io";
import { SiPaypal } from "react-icons/si";
import { RiExchangeDollarFill } from "react-icons/ri";

function Transaction(props) {
  const {
    cardBallance,
    paypalBallance,
    jemiBallance,
    carddate,
    paypaldate,
    jemidate,
  } = props;
  return (
    <div className="sm:w-[350px]">
      <div
        className={`sm:W-[350px] border-2"} relative h-[235px] rounded-3xl  bg-white`}
      >
        <div className="h-full w-full gap-[17px] sm:p-6 py-5 px-[18px]">
          <div className="flex items-center gap-[17px]  pb-[15px]">
            <div className="rounded-full bg-[#FFF5D9] p-[13px]">
              <IoIosCard className="text-[#FFBB38]" />
            </div>
            <div className="flex w-full justify-between items-center gap-[17px]">
              <div>
                <p className="pb-2 sm:text-base text-[14px] font-medium">
                  Deposit from my Card
                </p>
                <p className="sm:text-[15px] text-xs text-[#718EBF]">{carddate}</p>
              </div>
              <div>
                <p className="sm:text-base text-[11px]">${cardBallance}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center  gap-[17px] pb-[15px]">
            <div className="rounded-full  bg-[#E7EDFF] p-[13px]">
              <SiPaypal className="text-[#396AFF]" />
            </div>
            <div className="flex w-full justify-between items-center gap-[17px]">
              <div>
                <p className="pb-2 sm:text-base text-[14px] font-bold">Deposit Paypal</p>
                <p className="sm:text-[15px] text-xs text-[#718EBF]">{paypaldate}</p>
              </div>
              <div>
                <p className="sm:text-base text-[11px]">${paypalBallance}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[17px]">
            <div className="rounded-full bg-[#DCFAF8] p-[13px]">
              <RiExchangeDollarFill className="text-[#16DBCC]" />
            </div>
            <div className="flex w-full justify-between items-center gap-[17px]">
              <div>
                <p className="pb-2 sm:text-base text-[14px] font-bold">Jemi Wilson</p>
                <p className="sm:text-[15px] text-xs text-[#718EBF]">{jemidate}</p>
              </div>
              <div>
                <p className="sm:text-base text-[11px]">${jemiBallance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
