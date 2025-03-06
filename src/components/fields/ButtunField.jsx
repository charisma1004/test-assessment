// Custom components
import React from "react";

function ButtonField(props) {
  const { label, id, extra, type, value,placeholder, variant, state, disabled } =
    props;

  return (
    <div >
     
      <input
        disabled={disabled}
        type={type}
        id={id}
    
        className={`${extra} text-white cursor-pointer text-lg rounded-2xl py-[14px] px-[74px]`}
        value={value}
      />
    </div>
  );
}

export default ButtonField;
