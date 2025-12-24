import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="max-w-screen-xl container m-auto mb-14">
      <div className="flex items-center justify-center gap-8 px-4">
        {/*--------------Test--------------*/}
        <div className="flex-1">
          <div>
            <h1 className="text-[#181818] font-semibold text-[85px] pt-18 leading-20">
              Investing <br /> Simplified
            </h1>
            <p className="text-[#181818] text-[18px] md:w-[440px] mt-10">
              Take command of your financial future and transcend to the life
              you've always envisioned. Unleash potential and master the art of
              investment with unparalleled ease and precision.
            </p>
          </div>
          {/*-------------Reating-----Banner--- 5-------*/}
          <div className="bg-[#EBEEF1] p-6 rounded-xl mt-[48px]">
            {/*-------------Reating-----Button----------*/}
            <div className="flex  items-center justify-between">
              <div className="flex items-center">
                <FaStar className="text-[#304966] text-[13px] -mt-7" />
                <h3 className="text-[#181818] text-[28px] font-bold">4.9</h3>
              </div>

              <div>
                <button className="bg-[#304966] rounded-[25px] text-white px-5 py-2">
                  GET STARTED
                </button>
              </div>
            </div>

            {/*-------------Text-----And---Video-----Icon-------*/}
            <div className="flex  items-center justify-between">
              <p className="text-[#181818] text-[17px] font-bold mt-[40px] w-[350px]">
                Discover a World of Investment Opportunities: Start Growing Your
                Wealth Now
              </p>

              <div>
                <button className="bg-[#181818] rounded-full p-3">
                  <FaPlay className="text-xl text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*--------------Img--------------*/}
        <div className="relative pt-12 flex-1 flex items-center justify-end ">
          <img
            className="w-[550px] mt-8"
            src="https://i.ibb.co.com/DgKSRwh7/Rectangle-2.png"
            alt=""
          />

          <div className="absolute">
            <img
              className="w-[270px] pr-3 mt-[375px]"
              src="https://i.ibb.co.com/XrdsjB67/Frame-206.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
