import React from "react";

const card = ({ title, numbers, subHeading, icone, iconeBg }) => {
  return (
    <>
      <div
        className={`my-2 p-5 rounded bg-white w-80 shadow-lg hover:shadow-2xl transition-all duration-500 m-auto`}
        style={{ borderBottomWidth: "3px", borderColor: iconeBg }}
      >
        <div className="flex justify-between items-start">
          <div className="text-section">
            <div className="text-blue-gray-500 font-[400] hover:font-[500] hover:text-blue-gray-600">
              <p className="text-lg ">{title}</p>
            </div>
            <div className="my-1 flex justify-start items-center gap-2">
              <p className="text-blue-gray-600 text-3xl font-semibold">
                {numbers}{" "}
              </p>
              <span className="text-green-500  font-normal">(+12%)</span>
            </div>
            <div className="text-blue-gray-500 font-[400]">
              <p className="text-sm ">{subHeading}</p>
            </div>
          </div>
          <div className="icone-section">
            <div
              className="icone p-2 rounded"
              style={{ backgroundColor: iconeBg }}
            >
              {icone}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
