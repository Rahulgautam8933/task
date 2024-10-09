import { Tabs } from "antd";
import React from "react";

const OrderCard = () => {
  return (
    <>
      <div className="mb-5 shadow-lg  w-full rounded bg-white">
        <div className="flex justify-between items-start p-5">
          <div className="">
            <p className="text-blue-gray-500 text-2xl">Order Delivery </p>
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
        <div className="">
          <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `${
                  id == 1 ? "New" : id == 2 ? "Preparing" : "Shipping"
                }`,
                key: id,
                children: (
                  <div style={{ margin: "0 20px" }}>
                    {`Content of Tab Pane ${id}`}
                  </div>
                ),
              };
            })}
          />
        </div>
      </div>
    </>
  );
};

export default OrderCard;
