import React from "react";
import { FaUserNurse } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { PiAirplaneTiltLight } from "react-icons/pi";

import img1 from "../images/134.png"

const TextSection = () => {


  const data = [

    {
      id: "01",
      heading: "Personalized Service",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur nemo amet tempora explicabo architecto!",
      icon: <FaUserNurse />

    },
    {
      id: "02",
      heading: "Personalized Service",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur nemo amet tempora explicabo architecto!",
      icon: <PiAirplaneTiltLight />

    },
    {
      id: "03",
      heading: "Personalized Service",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur nemo amet tempora explicabo architecto!",
      icon: <FaUserNurse />

    },
    {
      id: "04",
      heading: "Personalized Service",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur nemo amet tempora explicabo architecto!",
      icon: <FaUserNurse />

    },
    {
      id: "05",
      heading: "Personalized Service",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur nemo amet tempora explicabo architecto!",
      icon: <FaUserNurse />

    },
    {
      id: "06",
      heading: "Personalized Service",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur nemo amet tempora explicabo architecto!",
      icon: <FaUserNurse />

    },
  ]



  return (
    <>
      <div className="mt-7  mb-0">
        <div className="flex my-5 w-[90%] heading-content m-auto justify-between gap-20">
          <div className=" w-full p-5">
            <div className="text-[#0079FF]  font-bold flex items-center">
              <div className="border-t-2 border-[#0079FF] w-12 me-1"></div>
              <div className="">Our Services</div>
              <div className="border-t-2 border-[#0079FF] w-12 ms-1"></div>
            </div>
            <div className="text-2xl font-bold mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo.
            </div>
          </div>
          <div className=" w-full p-5">
            <div className="border-t-2 border-[#0079FF] pt-7 font-semibold text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              pariatur nemo amet tempora explicabo architecto!
            </div>
          </div>
        </div>

        <div>

          <div className="bg-[#F5F8FF] w-[90%] m-auto p-6" >
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4" >


              {
                data?.map((item, index) => {
                  return (
                    <>
                      <div>
                        <div className="serviceId">
                          {item?.id}
                        </div>

                        <div className="text-5xl">{item?.icon}</div>

                        <div className="text-lg font-bold	">
                          {item?.heading}
                        </div>

                        <div className="text-base">{item?.content}</div>

                        <div className="flex items-center gap-1 my-5"> <MdOutlineKeyboardDoubleArrowRight /> Learn more</div>
                      </div>

                    </>
                  )
                })
              }
            </div>
          </div>




          <div className="flex w-[90%] m-auto heading-content my-10 justify-between gap-20">
            <div className=" w-full p-5">

              <div className="text-5xl font-bold mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo.
              </div>
            </div>
            <div className=" w-full p-5">
              <div className="border-t-2 border-[#0079FF] pt-7 font-semibold text-lg mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                pariatur nemo amet tempora explicabo architecto!
              </div>
            </div>
          </div>


          <div>
            <img style={{width:"100%"}} src={img1} alt="" />
          </div>

        </div>
      </div>
    </>
  );
};

export default TextSection;
