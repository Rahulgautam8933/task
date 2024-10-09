import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const OverviewCard = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="border rounded shadow-lg p-5 overflow-auto  ">
          <div className="flex justify-between items-center">
            <p className="text-2xl text-blue-gray-500">Overview Card</p>
            <p className="">
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
            </p>
          </div>
          <div className="my-3">
            <table className="w-full">
              <thead className="">
                <tr className=" text-sm text-neutral-300  border-b">
                  <th className=" p-3 font-[500]"> On The Way</th>
                  <th className=" p-3 font-[500]">Unloading</th>
                  <th className=" p-3 font-[500]">Loading</th>
                  <th className=" p-3 font-[500]">Waiting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left flex gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    On The Way
                  </td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-red-100 rounded-3xl px-3  text-red-500 text-sm">
                      Inactive
                    </span>
                  </td>
                  <td className="text-gray-500 p-3 text-left">2hr 10min</td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left flex gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    On The Way
                  </td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-red-100 rounded-3xl px-3  text-red-500 text-sm">
                      Inactive
                    </span>
                  </td>
                  <td className="text-gray-500 p-3 text-left">2hr 10min</td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left flex gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    On The Way
                  </td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-red-100 rounded-3xl px-3  text-red-500 text-sm">
                      Inactive
                    </span>
                  </td>
                  <td className="text-gray-500 p-3 text-left">2hr 10min</td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left flex gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    On The Way
                  </td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-red-100 rounded-3xl px-3  text-red-500 text-sm">
                      Inactive
                    </span>
                  </td>
                  <td className="text-gray-500 p-3 text-left">2hr 10min</td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left flex gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    On The Way
                  </td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-red-100 rounded-3xl px-3  text-red-500 text-sm">
                      Inactive
                    </span>
                  </td>
                  <td className="text-gray-500 p-3 text-left">2hr 10min</td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left flex gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    On The Way
                  </td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-red-100 rounded-3xl px-3  text-red-500 text-sm">
                      Inactive
                    </span>
                  </td>
                  <td className="text-gray-500 p-3 text-left">2hr 10min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
