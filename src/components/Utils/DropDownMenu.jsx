import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CgKeyboard } from "react-icons/cg";
import { FiMoon } from "react-icons/fi";
import { RiLiveLine, RiSettings3Line } from "react-icons/ri";
import { TbMessageLanguage } from "react-icons/tb";
const DropDownMenu = ({ active }) => {
  return (
    <div
      className={`${
        active ? "block" : "hidden"
      } duration-300 absolute -right-6 top-12 min-w-[230px] max-h-96  bg-secondary rounded-xl dropdown z-50`}
    >
      <ul className="py-2">
        <li className="flex items-center gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <BsPerson className="text-white text-xl" />
          <span className="text-white text-base">View profile</span>
        </li>
        <li className="flex items-center gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <RiLiveLine className="text-white text-xl" />
          <span className="text-white text-base">LIVE Studio</span>
        </li>
        <li className="flex items-center gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <RiSettings3Line className="text-white text-xl" />
          <span className="text-white text-base">Settings</span>
        </li>
        <li className="flex items-center gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <TbMessageLanguage className="text-white text-xl" />
          <span className="text-white text-base">English</span>
        </li>
        <li className="flex items-center gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <AiOutlineQuestionCircle className="text-white text-xl" />
          <span className="text-white text-base">Feedback and help</span>
        </li>
        <li className="flex items-center gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <CgKeyboard className="text-white text-xl" />
          <span className="text-white text-base">Keboard shortcut</span>
        </li>
        <li className=" flex items-center justify-between gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <span className="flex items-center gap-2">
            <FiMoon className="text-white text-xl" />
            <span className="text-white text-base">Dark mode</span>
          </span>
          <button className="darkmode-btn relative bg-emerald-400 w-10 h-6 rounded-xl p-1"></button>
        </li>
        <li className="flex items-center gap-2 py-2 px-3 w-full hover:bg-white/5 cursor-pointer ">
          <BiLogOut className="text-white text-xl" />
          <span className="text-white text-base">Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
