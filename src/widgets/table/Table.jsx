// "use client"
import React from "react";
import { BiAbacus, BiTrash, BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Button, Modal } from "antd";

const Table = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className="m-2 rounded shadow-lg bg-white overflow-auto">
        <div className="p-5">
          <p className="font-semibold text-lg text-gray-500 mb-3">Filters</p>
          <div className="flex justify-evenly items-center gap-2">
            <div className="border w-full max-w-sm  p-3 rounded-md">
              <select className="w-full  text-gray-500 focus:outline-none">
                <option disabled selected>
                  Select Role
                </option>
                <option>Maintaiber</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="border w-full max-w-sm  p-3 rounded-md">
              <select className="w-full  text-gray-500 focus:outline-none">
                <option disabled selected>
                  Select Role
                </option>
                <option>Maintaiber</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5">
          <div className="">
            <div className="p-3 mb-5">
              <div className="block sm:flex justify-end items-center gap-4 mx-3">
                <div className="border px-3 py-1 rounded-md mb-2 md:mb-0">
                  <input
                    type="text"
                    placeholder="Search User"
                    className="focus:outline-none"
                  />
                </div>
                <div className="border rounded-md px-3 text-white bg-[#8C57FF] font-[800]">
                  {/* <button > */}
                  <Button onClick={showLoading} ghost className="border-none">
                    Add New User
                  </Button>
                  {/* </button> */}
                </div>
              </div>
            </div>
            <table className="w-full">
              <thead className="">
                <tr className="bg-[#F6F7FB] text-sm text-neutral-500 uppercase">
                  <th className=" p-3 text-left ">
                    <input type="checkbox" />
                  </th>
                  <th className=" p-3 text-left font-[500]">Name</th>
                  <th className=" p-3 text-left font-[500]">Role</th>
                  <th className=" p-3 text-left font-[500]">Email</th>
                  <th className=" p-3 text-left font-[500]">Phone</th>
                  <th className=" p-3 text-left font-[500]">Status</th>
                  <th className=" p-3 text-left font-[500]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left">
                    <input type="checkbox" />
                  </td>
                  <td className="text-gray-500 p-3 text-left">John Doe</td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    john.doe@example.com
                  </td>
                  <td className="text-gray-500 p-3 text-left">1234567890</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-red-100 rounded-3xl px-3  text-red-500 text-sm">
                      Inactive
                    </span>
                  </td>
                  <td className="text-gray-500 p-3 text-left">
                    <div className="flex gap-2">
                      <BiTrash role="button" size={25} />
                      <BiEdit role="button" size={25} />
                      <FaEye role="button" size={25} />
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-gray-500 p-3 text-left">
                    <input type="checkbox" />
                  </td>
                  <td className="text-gray-500 p-3 text-left">John Doe</td>
                  <td className="text-gray-500 p-3 text-left">Maintaiber</td>
                  <td className="text-gray-500 p-3 text-left">
                    john.doe@example.com
                  </td>
                  <td className="text-gray-500 p-3 text-left">1234567890</td>
                  <td className="text-gray-500 p-3 text-left">
                    <span className="bg-green-100 rounded-3xl px-3  text-green-500 text-sm">
                      Active
                    </span>
                    {/* <div className="btn">button</div> */}
                  </td>
                  <td className="text-gray-500 p-3 text-left">
                    <div className="flex gap-2">
                      <BiTrash role="button" size={25} />
                      <BiEdit role="button" size={25} />
                      <FaEye role="button" size={25} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          title={<p>Add User</p>}
          footer={
            <span className="border rounded-md px-3 text-white bg-[#8C57FF] font-[800] py-2">
              <Button
                ghost
                onClick={() => setOpen(false)}
                className="border-none "
              >
                Add
              </Button>
            </span>
          }
          loading={loading}
          open={open}
          onCancel={() => setOpen(false)}
        >
          <div className="my-5 space-y-4">
            <div className="">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 w-full focus:outline-[#8C57FF] border rounded-md"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="p-3 w-full focus:outline-[#8C57FF] border rounded-md"
              />
            </div>
            <div className="">
              <input
                type="number"
                placeholder="Mobile"
                className="spinButton p-3 w-full focus:outline-[#8C57FF] border rounded-md"
              />
            </div>
            <div className="">
              <select className="p-3 w-full focus:outline-[#8C57FF] active:outline-[#8C57FF] border rounded-md text-gray-400">
                <option disabled selected>
                  Select Role
                </option>
                <option>Maintaiber</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Table;
