import React from "react";
import Header from "../Utils/Header";
import SideMenu from "../Utils/SideMenu";
const Profile = () => {
  return (
    <div className="relative w-full h-screen bg-primary overflow-x-hidden ">
      <div className="fixed w-full bg-primary border-b border-white/10 z-50">
        <Header />
      </div>
      <div className="w-screen pt-16">
        <div className=" relative w-full flex gap-16 md:gap-0 justify-center  ">
          <div className="relative w-auto md:max-w-72">
            <SideMenu />
          </div>
          {/* Videos Container*/}
          <div className="relative w-full h-full px-3 py-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
