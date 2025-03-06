import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { IconCardChip } from "components/icons/IconCardChip";
function MasterCard(props) {
  const { ballance, bgcolor, valid_date, cardNumber, holder } = props;
  return (
    <div
      className={`relative ${
        bgcolor == "black"
          ? "bg-gradient-to-r  from-[#5B5A6F] to-[#000000]"
          : "border-2 bg-white"
      }  rounded-3xl`}
    >
      <div className="sm:w-[350px] w-[265px] sm:aspect-[350/235] aspect-[265/170] min-w-[120px] px-6 py-6">
        <div className="flex justify-between">
          <div>
            <p
              className={`${
                bgcolor == "black" ? "text-white" : "text-gray-900"
              } sm:text-sm text-[11px]`}
            >
              Ballance
            </p>
            <p
              className={`${
                bgcolor == "black" ? "text-white" : "text-gray-900"
              } sm:text-xl text-base`}
            >
              $ {ballance}
            </p>
          </div>
          <div>
            <IconCardChip
              className={`${
                bgcolor == "black" ? "text-white" : "text-gray-900"
              } sm:h-9 sm:w-9 h-[29px] w-[29px]`}
            />
          </div>
        </div>
        <div className="flex gap-16 py-4">
          <div>
            <p
              className={`sm:text-xs text-[10px] ${
                bgcolor == "black" ? "text-white" : "text-gray-900"
              }`}
            >
              CARD HOLDER
            </p>
            <p
              className={`sm:text-base text-[13px] ${
                bgcolor == "black" ? "text-white" : "text-gray-900"
              }`}
            >
              {holder}
            </p>
          </div>
          <div>
            <p
              className={`sm:text-sm text-[10px] ${
                bgcolor == "black" ? "text-white" : "text-gray-900"
              }`}
            >
              VALID THRU
            </p>
            <p
              className={`sm:text-base text-[13px] ${
                bgcolor == "black" ? "text-white" : "text-gray-900"
              }`}
            >
              {valid_date}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full items-center gap-16 bg-[#f7f0f021] sm:px-6 px-5 sm:py-5 py-4">
        <p
          className={` ${
            bgcolor == "black" ? "text-white" : "text-gray-900"
          } sm:text-[22px] text-[15px]`}
        >
          {cardNumber}
        </p>
        <RiMastercardFill
          className={`sm:h-11 sm:w-9 w-[24px] h-[24px] ${
            bgcolor == "black" ? "text-white" : "text-gray-400"
          } opacity-50`}
        />
      </div>
    </div>
  );
}

export default MasterCard;
