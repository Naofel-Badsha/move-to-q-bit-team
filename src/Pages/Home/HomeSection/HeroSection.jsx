import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="flex items-center justify-center gap-8 px-4">
        {/*--------------Test--------------*/}
        <div className="flex-1">
          <div>
            <h1 className="text-[#181818] font-semibold text-[85px] pt-18 leading-20">
              Investing <br /> Simplified
            </h1>
            <p className="text-[#181818] text-[18px] md:w-[500px] mt-5">
              Take command of your financial future and transcend to the life
              you've always envisioned. Unleash potential and master the art of
              investment with unparalleled ease and precision.
            </p>
          </div>
          {/*-------------Reating-----Banner--- 5-------*/}
          <div>

          </div>
        </div>

        {/*--------------Img--------------*/}
        <div className="relative pt-12 flex-1 flex items-center justify-end ">
          <img
            className="w-[550px] "
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
