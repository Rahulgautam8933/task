import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="my-7 w-full bg-[#0079FF] p-7 rounded-t-md shadow-md text-white">
        <div className="my-5 grid grid-cols-7">
          <div className=" lg:col-span-3 col-span-7">
            <div className="heading text-5xl font-bold capitalize leading-[4.5rem] tracking-wider">
              <h2>
                Yalla Drive <br /> On demand <br /> Chauffeur Service
              </h2>
            </div>
            <p className="capitalize mt-7 mb-12">
              On demand Chauffeur Service{" "}
            </p>
            <div className="space-x-4 capitalize">
              <span className=" border border-white rounded-lg p-2">
                {" "}
                Per minute
              </span>
              <span className=" border border-white rounded-lg p-2">
                {" "}
                Per hour
              </span>
              <span className=" border border-white rounded-lg p-2">
                {" "}
                Per day
              </span>
            </div>
            <div className="my-5 space-x-4 capitalize">
              <span className=" border border-white rounded-lg p-2">
                {" "}
                Per week
              </span>
              <span className=" border border-white rounded-lg p-2">
                {" "}
                Per month
              </span>
            </div>
            <div className="my-7">
              <div className="flex gap-2">
                <div className="px-3 py-2 font-semibold bg-white rounded-md text-black flex items-center gap-2">
                  <span>
                    <FaApple size={25} />
                  </span>{" "}
                  Apple Store
                </div>
                <div className="px-3 py-2 font-semibold bg-white rounded-md text-black flex items-center gap-2">
                  <span>
                    <FaGooglePlay size={20} />
                  </span>{" "}
                  Google Play
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 hero-main lg:block md:none relative">
            <div className="z-10 relative">
              <img
                src="https://www.haimourinternational.com/images/slides/service-chauffeur-prive.jpg"
                alt=""
                className="w-[60%] absolute top-1 right-34"
              />
            </div>
            <div className="z-0">
              <img
                src="https://watermark.lovepik.com/photo/20211126/large/lovepik-special-car-service-picture_501100014.jpg"
                alt=""
                className=" w-[60%] absolute top-48 right-1 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
