import React from "react";
import { AiFillContacts, AiFillDingtalkCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { SiCoinmarketcap } from "react-icons/si";

const FortifyYourFinancialHorizon = () => {
  return (
    <section className="max-w-[954px] container m-auto py-[80px]">
      <div className="bg-[#EBEEF1] p-[43px] rounded-[25px]">
        {/*-------------Heading----Title----------*/}
        <div className="flex justify-between">
          <h1 className="text-[#181818] text-[46px] font-bold ">
            Fortify Your <br /> Financial Horizon
          </h1>
          <div>
            <p className="text-[#626060] text-[16px] w-[400px]">
              Embark on a transformative journey that guarantees to elevate your
              economic stature through strategic investment opportunities..
            </p>
            <button className="text-[#304966] font-bold text-[16px] mt-[24px] flex items-center gap-2">
              {" "}
              LEARN MORE <IoIosArrowForward className="font-bold tetx-[16px]" />
            </button>
          </div>
        </div>

        {/*--------------All-----Card--------------*/}
        <div className="grid gap-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[60px]">
          {/*--------------Card------1-------*/}
          <div className="">
            <div className="bg-[#181818] rounded-full p-3 w-[50px] h-[50px] flex items-center justify-center">
              <SiCoinmarketcap className="text-xl text-white" />
            </div>
            <h3 className="text-[#181818] text-[21px] font-bold mt-[16px]">
              Live Market <br /> Insights
            </h3>
            <p className="text-[#626060] text-[16px] font-normal mt-2">
              Gain an edge with real-time updates and expert analyses
            </p>
          </div>
          {/*--------------Card------2-------*/}
          <div className="">
            <div className="bg-[#181818] rounded-full p-3 w-[50px] h-[50px] flex items-center justify-center">
              <AiFillContacts className="text-xl text-white" />
            </div>
            <h3 className="text-[#181818] text-[21px] font-bold mt-[16px]">
              Ventures Across Diverse Industries
            </h3>
            <p className="text-[#626060] text-[16px] font-normal mt-2">
              Step into a variety of sectors, each offering unique
            </p>
          </div>
          {/*--------------Card------3-------*/}
          <div className="">
            <div className="bg-[#181818] rounded-full p-3 w-[50px] h-[50px] flex items-center justify-center">
              <AiFillDingtalkCircle className="text-xl text-white" />
            </div>
            <h3 className="text-[#181818] text-[21px] font-bold mt-[16px]">
              Revolutionary Investment Solutions
            </h3>
            <p className="text-[#626060] text-[16px] font-normal mt-2">
              Harness the power of ground breaking strategies and tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FortifyYourFinancialHorizon;
