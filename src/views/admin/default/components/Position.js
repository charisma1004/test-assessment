import React from "react";

const Position = ({color, position}) => {

    return(
        <div className="flex gap-[10px] items-center">
            <div className={`${color} h-4 w-4 rounded-full`}>
            </div>
            <div>
                <p className="text-base text-[#718EBF]">{position}</p>
            </div>
        </div>
    );
};
export default Position;