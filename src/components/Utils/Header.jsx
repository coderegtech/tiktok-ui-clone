import React, { useState } from "react";
import { BiMessageAltMinus } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import DropDownMenu from "./DropDownMenu";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className=" min-h-min lg:max-w-6xl w-full mx-auto py-2 px-2 flex justify-between items-center z-50">
      {/* tiktok logo */}
      <a href="/">
        <img
          className="w-[100px] lg:w-[115px] object-cover invert"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2019%2F08%2Ftiktok-logo-9.png&f=1&nofb=1&ipt=ea84dddc01eaa87b717af09ddb7baa09b77a93b7a918637fc498cad923fb7161&ipo=images"
          alt=""
        />
      </a>
      {/* search bar */}
      <div className="hidden w-[370px] bg-secondary  lg:flex items-center px-2 py-3 rounded-full">
        <input
          className="w-full bg-transparent px-2 border-r text-white border-white/30 focus:outline-none placeholder:text-white/30
          "
          type="text"
          placeholder="Search accounts and videos"
        />
        <span className="px-3">
          <FiSearch className="text-white/50 text-xl" />
        </span>
      </div>
      {/* Navigation */}
      <div className="flex gap-4 lg:gap-5 items-center">
        <div className="flex gap-2 items-center cursor-pointer bg-secondary py-1 px-3 lg:px-5 shrink-0">
          <MdAdd className="text-white" />
          <span className="text-white text-base  ">Upload</span>
        </div>
        <div>
          <FaRegPaperPlane className="text-white text-xl rotate-12" />
        </div>
        <div>
          <BiMessageAltMinus className="text-white text-2xl" />
        </div>
        <div
          className="relative "
          onMouseOver={() => setActiveMenu(true)}
          onMouseLeave={() => setActiveMenu(false)}
        >
          <img
            className="profile-img w-8 h-8 object-cover rounded-full"
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d069366a9ef9dd3915011b2a3ab0953c.jpeg?x-expires=1675386000&x-signature=gYP8B3w3aURaVirzLxJlwoQUmbk%3D"
            alt=""
          />
          <DropDownMenu active={activeMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
