import React from 'react';
import { FaMapPin, FaMoneyBillAlt, FaRegDotCircle, FaRegHandshake } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';



const ExploreRecentOpportunities = () => {
    return (
      <section className="max-w-[954px] container m-auto py-[80px]">
        {/*-------------Heading----Title----------*/}
        <div className="flex justify-between">
          <h1 className="text-[#181818] text-[46px] font-bold ">
            Explore Recent Opportunities
          </h1>
          <div>
            <p className="text-[#626060] text-[16px] w-[505px]">
              Unlock a Universe of Investment Opportunities Step into a realm
              where growth and opportunity converge. Our innovative platform
              opens doors to a meticulously curated selection of high-potential
              investments, crafted to diversify your portfolio and amplify your
              wealth.
            </p>
            <button className="text-[#304966] font-bold text-[16px] mt-[24px] flex items-center gap-2">
              {" "}
              LEARN MORE <IoIosArrowForward className="font-bold tetx-[16px]" />
            </button>
          </div>
        </div>

        {/*-----------Explore Recent-----Card----------------*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20px] mt-[60px]">
          {/*-------------card----1----------*/}
          <div className="flex gap-[20px] p-[20px] border-[1px] border-[#626060] rounded-[25px]">
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/pvhwnPpJ/Rectangle-3.png"
                className="w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#181818] text-[21px] font-bold">
                International Art Museum
              </h3>
              <div className="flex items-center gap-[8px] mt-[16px]">
                <FaMoneyBillAlt className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Valuation $5M</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegHandshake className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">75 investors</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegDotCircle className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Target $500,000</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaMapPin className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">London, Uk</p>
              </div>

              <button className="text-[#304966] font-bold text-[16px] mt-[24px] flex items-center gap-2">
                {" "}
                LEARN MORE{" "}
                <IoIosArrowForward className="font-bold tetx-[16px]" />
              </button>
            </div>
          </div>
          {/*-------------card----2----------*/}
          <div className="flex gap-[20px] p-[20px] border-[1px] border-[#626060] rounded-[25px]">
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/nN04m4S3/Rectangle-3-1.png"
                className="w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#181818] text-[21px] font-bold">
                International Art Museum
              </h3>
              <div className="flex items-center gap-[8px] mt-[16px]">
                <FaMoneyBillAlt className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Valuation $5M</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegHandshake className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">75 investors</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegDotCircle className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Target $500,000</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaMapPin className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">London, Uk</p>
              </div>

              <button className="text-[#304966] font-bold text-[16px] mt-[24px] flex items-center gap-2">
                {" "}
                LEARN MORE{" "}
                <IoIosArrowForward className="font-bold tetx-[16px]" />
              </button>
            </div>
          </div>
          {/*-------------card----3----------*/}
          <div className="flex gap-[20px] p-[20px] border-[1px] border-[#626060] rounded-[25px]">
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/Rpy70nG2/Rectangle-3-2.png"
                className="w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#181818] text-[21px] font-bold">
                International Art Museum
              </h3>
              <div className="flex items-center gap-[8px] mt-[16px]">
                <FaMoneyBillAlt className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Valuation $5M</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegHandshake className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">75 investors</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegDotCircle className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Target $500,000</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaMapPin className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">London, Uk</p>
              </div>

              <button className="text-[#304966] font-bold text-[16px] mt-[24px] flex items-center gap-2">
                {" "}
                LEARN MORE{" "}
                <IoIosArrowForward className="font-bold tetx-[16px]" />
              </button>
            </div>
          </div>
          {/*-------------card----4----------*/}
          <div className="flex gap-[20px] p-[20px] border-[1px] border-[#626060] rounded-[25px]">
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/vC6PHbYC/Rectangle-3-3.png"
                className="w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#181818] text-[21px] font-bold">
                International Art Museum
              </h3>
              <div className="flex items-center gap-[8px] mt-[16px]">
                <FaMoneyBillAlt className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Valuation $5M</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegHandshake className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">75 investors</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaRegDotCircle className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">Target $500,000</p>
              </div>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <FaMapPin className="text-[16px]" />
                <p className="text-[#626060] text-[16px]">London, Uk</p>
              </div>

              <button className="text-[#304966] font-bold text-[16px] mt-[24px] flex items-center gap-2">
                {" "}
                LEARN MORE{" "}
                <IoIosArrowForward className="font-bold tetx-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExploreRecentOpportunities;