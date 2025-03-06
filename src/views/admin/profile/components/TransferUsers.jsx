import React from "react";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

import { FaEthereum } from "react-icons/fa";
import Card from "components/card";

const TransferUsers = () => {
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
    {
      image: Nft4,
      title: "Designer",
      name: " Peter Will",
    }
  ];

  return (
    <Card extra={"mt-3 !z-5 overflow-hidden"}>
      
      {HistoryData.map((data, index) => (
        <div className="flex h-32 w-[85px] items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
          <div className="flex items-center gap-3">
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
              <p className="mt-1 text-sm font-normal text-gray-600">
                {" "}
                {data.name}{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default TransferUsers;
