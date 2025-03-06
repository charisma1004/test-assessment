import { MdFileUpload, MdOutlineEdit } from "react-icons/md";
import InputField from "components/fields/InputField";
import ButtonField from "components/fields/ButtunField";
import Card from "components/card";
import React from "react";
import avatar from "assets/img/avatars/avatar0.jpeg";

const Editprofile = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-2  justify-center lg:!mb-0 px-[60px]">
          <div className="h-24 w-24  items-center  relative  justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <div className=" relative ">
              <img className="h-full w-full relative rounded-full " src={avatar} alt="" />
              <MdOutlineEdit className=" absolute h-[30px] right-0 bottom-0 w-[30px] text-white bg-[#232323] rounded-full" />
            </div>
        </div>
        </div>
        <div className="col-span-10 lg:!mb-0">
          <Card className="h-auto w-full flex-wrap gap-4  rounded-[20px] bg-white  p-3 font-dm dark:!bg-navy-800 sm:flex">
            {/* <div className="col-span-5 text-base h-full w-full rounded-xl   2xl:col-span-6"> */}
            <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Your Name"
              placeholder="Janrae Mendoza"
              id="text"
              type="text"
            />
            <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="User Name"
              placeholder="Charlene Reed"
              id="username"
              type="text"
            />
            <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Email"
              placeholder="taman.contact.hello@gmail.com"
              id="email"
              type="email"
            />
            <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Password"
              placeholder="***********"
              id="password"
              type="password"
            />
             <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Date of Birth"
              placeholder="12 Feburuary 2025"
              id="dob"
              type="date"
            />
            <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Permanant Address"
              placeholder="San Jose, Califonia, USA"
              id="paddress"
              type="text"
            />
             <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Present Address"
              placeholder="San Joze, Califonia, USA"
              id="address"
              type="text"
            />
            <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="City"
              placeholder="San Jose"
              id="city"
              type="text"
            />
            <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Postal Code"
              placeholder="25000"
              id="postcode"
              type="text"
            />
            
             <InputField
              variant="auth"
              extra="mb-3 sm:w-[45%] w-full"
              label="Country"
              placeholder="USA"
              id="country"
              type="text"
            />
            {/* </div> */}
          </Card>
        </div>
        {/* all project & ... */}
      </div>
      <div className=" pb-[37px] flex justify-end  items-end px-[30px]">
         <ButtonField
          id={"button"}
          type = "button"
          value= "Save"
          extra = "color-white bg-[#232323] "
         />

          
      </div>
    </div>
  );
};

export default Editprofile;
