import React from "react";

const PerformanceCard = () => {
  return (
    <>
      <div className="mb-5 shadow-lg  p-5 w-full rounded bg-white">
        <div className="flex justify-between items-start">
          <div className="">
            <p className="text-blue-gray-500 text-2xl">Delivery Performance</p>
            <p className="text-gray-400">subHeading</p>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-7">
          <div className="mt-3 flex justify-between items-end">
            <div className="flex justify-start gap-6 items-center">
              <div className="p-2 bg-gray-300 rounded text-brown-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </div>
              <div className="">
                <p className=" text-brown-600">Packages in transit</p>
                <p className="text-green-500 font-semibold">^ 35.6%</p>
              </div>
            </div>
            <p className="font-semibold">10K</p>
          </div>
        </div>
        <div className="mt-7">
          <div className="mt-3 flex justify-between items-end">
            <div className="flex justify-start gap-6 items-center">
              <div className="p-2 bg-blue-50 rounded text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div className="">
                <p className=" text-brown-600">Packages out for delivery</p>
                <p className="text-green-500 font-semibold">^ 8.6%</p>
              </div>
            </div>
            <p className="font-semibold">5K</p>
          </div>
        </div>
        <div className="mt-7">
          <div className="mt-3 flex justify-between items-end">
            <div className="flex justify-start gap-6 items-center">
              <div className="p-2 bg-green-50 rounded text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="">
                <p className=" text-brown-600">Packages delivered</p>
                <p className="text-green-500 font-semibold">^ 12.4%</p>
              </div>
            </div>
            <p className="font-semibold">15K</p>
          </div>
        </div>
        <div className="mt-7">
          <div className="mt-3 flex justify-between items-end">
            <div className="flex justify-start gap-6 items-center">
              <div className="p-2 bg-orange-50 rounded text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </div>
              <div className="">
                <p className=" text-brown-600">Packages in transit</p>
                <p className="text-green-500 font-semibold">^ 35.6%</p>
              </div>
            </div>
            <p className="font-semibold">10K</p>
          </div>
        </div>
        <div className="mt-7">
          <div className="mt-3 flex justify-between items-end">
            <div className="flex justify-start gap-6 items-center">
              <div className="p-2 bg-gray-200 rounded text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </div>
              <div className="">
                <p className=" text-brown-600">Packages in transit</p>
                <p className="text-green-500 font-semibold">^ 35.6%</p>
              </div>
            </div>
            <p className="font-semibold">10K</p>
          </div>
        </div>
        <div className="mt-7">
          <div className="mt-3 flex justify-between items-end">
            <div className="flex justify-start gap-6 items-center">
              <div className="p-2 bg-red-50 rounded text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </div>
              <div className="">
                <p className=" text-brown-600">Packages in transit</p>
                <p className="text-green-500 font-semibold">^ 35.6%</p>
              </div>
            </div>
            <p className="font-semibold">10K</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceCard;
