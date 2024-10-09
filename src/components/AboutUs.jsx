import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="my-7">
        <div className="grid grid-cols-7">
          <div className="lg:col-span-3 col-span-7 p-5 bg-[#F5F8FF]">
            <div className="text-[#0079FF]  font-bold flex items-center my-5">
              <div className="border-t-2 border-[#0079FF] w-12 me-1"></div>
              <div className="">About Us</div>
              <div className="border-t-2 border-[#0079FF] w-12 ms-1"></div>
            </div>
            <h2 className="font-bold text-3xl leading-normal capitalize">
              Yalla Manages the <br /> Drive, so you can Savor <br /> every
              moment
            </h2>
            <p className="my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              sint dignissimos molestias non tempora commodi quis aperiam
              possimus neque provident?
            </p>
            <div className=" flex items-start gap-2 my-7">
              <span className="text-[0.5rem] mt-1 font-bold">01</span>
              <p className="text-xl font-[400] text-start"> Available 24/7</p>
            </div>
            <div className=" flex items-start gap-2 my-7">
              <span className="text-[0.5rem] mt-1 font-bold">02</span>
              <p className="text-xl font-[400] text-start">
                {" "}
                Easy To Book A Ride
              </p>
            </div>
            <div className=" flex items-start gap-2 my-7">
              <span className="text-[0.5rem] mt-1 font-bold">03</span>
              <p className="text-xl font-[400] text-start">
                {" "}
                Hassel Free Chauffeur Rental
              </p>
            </div>
          </div>
          <div className="image-section   lg:col-span-4 col-span-7 ">
            <div className="my-7">
              <div className="flex justify-center items-center mx-5">
                <div className="w-7 h-7 border-8 border-[#0079FF] rounded-full p-1"></div>
                <div className="w-60 border"></div>
                <div className="w-7 h-7 border-8 border-[#0079FF] rounded-full p-1"></div>
                <div className="w-60 border"></div>
                <div className="w-7 h-7 border-8 border-[#0079FF] rounded-full p-1"></div>
              </div>
              <div className="flex mx-5 justify-between font-semibold text-lg">
                <h2 className="w-32">Lorem, ipsum dolor.</h2>

                <h2 className="w-32">Lorem, ipsum dolor.</h2>

                <h2 className="w-32">Lorem, ipsum dolor.</h2>
              </div>
            </div>
            <div className="">
              <img
                src="https://watermark.lovepik.com/photo/20211210/large/lovepik-young-people-travel-together-by-car-picture_501799952.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
