import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowRoundUp } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="m-auto">
        <div className="flex justify-between items-center ">
          <div className="logo w-[40%] py-5 text-3xl font-bold">YD Logo</div>
          <div className="btns  py-5 w-[60%] ">







            <div className="items-end menubar">
            <GiHamburgerMenu />
            </div>
            <div className="flex nav-main justify-end gap-20 items-center">
              <div className="text-lg font-semibold" role="button">
                About
              </div>
              <div className="text-lg font-semibold" role="button">
                Services
              </div>
              <div className="text-lg font-semibold" role="button">
                FAQ's
              </div>
              <div
                className="p-2 bg-[#0079FF] text-white rounded-lg header-button shadow-lg active:scale-95  flex items-start"
                role="button"
              >
                <span className="rotate-45 font-bold">
                  <IoIosArrowRoundUp size={30} />
                </span>{" "}
                <span className="text-lg"> Get In Touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
