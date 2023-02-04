import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { users } from "./users";
const SideMenu = () => {
  return (
    <div className="lg:max-w-sm h-screen fixed top-10  px-1 lg:px-1 pt-3 lg:pt-10 pb-14 bg-primary border-r border-white/10 lg:border-none overflow-y-auto  scroll">
      <ul className="w-full flex flex-col py-2 ">
        <li className="flex gap-3 items-center justify-center lg:justify-start p-3 lg:px-4 lg:py-2 hover:bg-secondary/30 duration-200 rounded-md cursor-pointer">
          <AiFillHome className="text-pink text-2xl" />
          <span className="text-pink text-lg font-semibold hidden lg:block">
            For You
          </span>
        </li>
        <li className="flex gap-3 items-center justify-center lg:justify-start p-3 lg:px-4 lg:py-2 hover:bg-secondary/30 duration-200 rounded-md cursor-pointer">
          <FaUserFriends className="text-white text-2xl" />
          <span className="text-white text-lg font-semibold hidden lg:block">
            Following
          </span>
        </li>
        <li className="flex gap-3 items-center justify-center lg:justify-start p-3 lg:px-4 lg:py-2 hover:bg-secondary/30 duration-200 rounded-md cursor-pointer">
          <MdOutlineOndemandVideo className="text-white text-2xl" />
          <span className="text-white text-lg font-semibold hidden lg:block">
            LIVE
          </span>
        </li>
      </ul>
      {/* =========Suggested Accounts=========== */}
      <span className="block w-full border-b border-white/10 lg:py-2"></span>
      <p className="text-white/60 font-semibold py-1 px-4 text-sm hidden lg:block">
        Suggested accounts
      </p>
      <ul className="w-full flex flex-col py-2 ">
        {users[0].map(({ id, imgUrl, username, fullname }) => {
          return (
            <li
              key={id}
              className="flex gap-3 items-center justify-center lg:justify-start py-2 px-3 lg:px-4 lg:py-2 hover:bg-secondary/30 duration-200 rounded-md cursor-pointer"
            >
              <div className="w-8 h-8 shrink-0 ">
                {/* user profile */}
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={imgUrl}
                  alt=""
                />
              </div>
              <div className="leading-[15px] hidden lg:block">
                <div className="flex gap-1 items-center">
                  <p className="text-white text-base font-bold">{username}</p>
                  <BsCheckCircleFill className="text-[#0ff] text-sm" />
                </div>
                <span className="text-white/80 text-[12px] ">{fullname}</span>
              </div>
            </li>
          );
        })}

        <p className="text-pink text-sm px-4 cursor-pointer hidden lg:block">
          See all
        </p>
      </ul>
      {/* =========Following Accounts=========== */}
      <span className="block w-full border-b border-white/10 lg:py-2"></span>
      <p className="text-white/60 font-semibold py-1 px-4 text-sm hidden lg:block">
        Following accounts
      </p>
      <ul className="w-full flex flex-col py-2 ">
        {users[1].map(({ id, imgUrl, username, fullname }) => {
          return (
            <li
              key={id}
              className="flex gap-3 items-center justify-center lg:justify-start py-2 px-3 lg:px-4 lg:py-2 hover:bg-secondary/30 duration-200 rounded-md cursor-pointer"
            >
              <div className="w-8 h-8 shrink-0 ">
                {/* user profile */}
                <img
                  className="w-full h-full rounded-full object-cover object-center"
                  src={imgUrl}
                  alt=""
                />
              </div>
              <div className="leading-[15px] hidden lg:block">
                <div className="flex gap-1 items-center">
                  <p className="text-white text-base font-bold">{username}</p>
                  <BsCheckCircleFill className="text-[#0ff] text-sm" />
                </div>
                <span className="text-white/80 text-[12px] ">{fullname}</span>
              </div>
            </li>
          );
        })}

        <p className="text-pink text-sm px-4 cursor-pointer hidden lg:block">
          See all
        </p>
      </ul>
      {/* =========Discover section=========== */}
      <span className="hidden lg:block w-full border-b border-white/10 lg:py-2"></span>
      <p className="text-white/60 font-semibold py-1 px-4 text-sm hidden lg:block">
        Discover
      </p>

      <ul className="w-full px-4 py-2 lg:flex flex-wrap gap-2 hidden ">
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <HiHashtag className="text-sm" />
          </span>
          <p className="text-sm">seagames31</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <HiHashtag className="text-sm" />
          </span>
          <p className="text-sm">askteamph</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <HiHashtag className="text-sm" />
          </span>
          <p className="text-sm">labanpilipinas</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <IoIosMusicalNotes className="text-sm" />
          </span>
          <p className="text-sm">
            Feels (feat. Pharrell Williams, Katy Perry & Bi...)
          </p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <IoIosMusicalNotes className="text-sm" />
          </span>
          <p className="text-sm">DARARI - ondu</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <IoIosMusicalNotes className="text-sm" />
          </span>
          <p className="text-sm">Wasted Challenge - Leonard Ford Lique</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <HiHashtag className="text-sm" />
          </span>
          <p className="text-sm">blowitout</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <HiHashtag className="text-sm" />
          </span>
          <p className="text-sm">letstokadolescentmh</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <IoIosMusicalNotes className="text-sm" />
          </span>
          <p className="text-sm">Touch X Dougie Remix Challenge - Joshua ...</p>
        </li>
        <li className="px-2 py-1 text-white/80 text-sm bg-secondary flex gap-1 items-center rounded-full">
          <span>
            <IoIosMusicalNotes className="text-sm" />
          </span>
          <p className="text-sm">Serve - Zae</p>
        </li>
      </ul>
      <span className="hidden lg:block w-full border-b border-white/10 lg:py-2"></span>
      <ul className="lg:flex flex-wrap hidden px-4 shrink-0">
        <ul className="flex flex-wrap gap-1 py-2">
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>About</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Newsroom</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Contact</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Careers</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>ByteDance</p>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-1 py-2">
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Tiktok for Good</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Advertise</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Developers</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Transparency</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Tiktok Rewards</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Tiktok Browse</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Tiktok Embeds</p>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-1 py-2">
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Help</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Safety</p>
          </li>

          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Terms</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Privacy</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Creator Portal</p>
          </li>
          <li className="text-white/50 text-[12px] hover:underline cursor-pointer">
            <p>Community Guidelines</p>
          </li>
        </ul>
      </ul>
      <span className="text-white/50 text-[12px] px-4 hidden lg:block ">
        &copy; 2022 CoderegTech
      </span>
    </div>
  );
};

export default SideMenu;
