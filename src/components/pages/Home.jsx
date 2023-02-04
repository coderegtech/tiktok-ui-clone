import React, { useEffect, useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import vid1 from "../../assets/videos/vid1.mp4";
import vid2 from "../../assets/videos/vid2.mp4";
import vid3 from "../../assets/videos/vid3.mp4";
import Header from "../Utils/Header";
import SideMenu from "../Utils/SideMenu";
const Home = () => {
  const videoRef = useRef();
  const [isPause, setPause] = useState(true);

  useEffect(() => {
    const handleVideoEvent = () => {
      if (isPause === true) videoRef.current.pause();
      else videoRef.current.play();
    };
    handleVideoEvent();
  });

  return (
    <div className="relative w-full h-screen bg-primary overflow-x-hidden ">
      <div className="fixed w-full bg-primary border-b border-white/10 z-50">
        <Header />
      </div>
      <div className="w-screen pt-16">
        <div className="lg:max-w-6xl mx-auto relative w-full flex gap-16 md:gap-0 justify-center  ">
          <div className="relative w-auto md:w-[50%]">
            <SideMenu />
          </div>
          {/* Videos Container*/}
          <div className="relative w-full h-full px-3 py-5">
            {/* videos */}
            {/* start */}
            <div className=" py-8 max-w-5xl w-full flex justify-center items-start gap-2 md:gap-3 border-b border-white/20">
              <span className="w-12 md:w-14 h-full shrink-0">
                <img
                  className="w-full h-12 md:h-14 rounded-full bg-white shrink-0 object-cover"
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d069366a9ef9dd3915011b2a3ab0953c.jpeg?x-expires=1675386000&x-signature=gYP8B3w3aURaVirzLxJlwoQUmbk%3D"
                  alt=""
                />
              </span>
              <div className="max-w-xl w-full flex flex-col gap-y-3">
                <header className="md:max-w-sm w-full">
                  <span className="flex flex-col md:flex-row gap-0 md:gap-2 items-start justify-start md:items-center">
                    <h2 className="font-bold text-white text-lg">codereg</h2>
                    <p className="text-sm text-white/50">John Reygun Danag</p>
                  </span>
                  <span className="hidden md:flex gap-x-2 flex-wrap items-center">
                    <p className="text-white ">
                      Bakery E-commerce Website using Reactjs & TailwindCss{" "}
                    </p>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #programming
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #coding
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #codinglife
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #webdevelopment
                    </span>
                  </span>
                </header>
                <div className="h-full w-full px-3 md:px-0 relative -left-[70px] md:left-0 top-0 md:relative flex items-end gap-1 md:gap-5">
                  <div
                    onClick={() => setPause(!isPause)}
                    className="lg:max-w-[300px] max-w-[230px] max-h-[500px] h-full rounded-xl bg-white overflow-hidden shrink-0"
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover bg-white"
                      autoPlay
                      loop
                    >
                      <source src={vid2} />
                    </video>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <AiFillHeart className="text-2xl md:text-2xl text-pink" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">345</p>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <BsFillChatDotsFill className="text-xl md:text-2xl text-white" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">642</p>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <RiShareForwardFill className="text-xl md:text-2xl text-white" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">8428</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="text-pink font-semibold border border-pink px-5 bg-white/5 rounded-md">
                  Follow
                </button>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className=" py-8 max-w-5xl w-full flex justify-center items-start gap-2 md:gap-3 border-b border-white/20">
              <span className="w-12 md:w-14 h-full shrink-0">
                <img
                  className="w-full h-12 md:h-14 rounded-full bg-white shrink-0 object-cover"
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d069366a9ef9dd3915011b2a3ab0953c.jpeg?x-expires=1675386000&x-signature=gYP8B3w3aURaVirzLxJlwoQUmbk%3D"
                  alt=""
                />
              </span>
              <div className="max-w-xl w-full flex flex-col gap-y-3">
                <header className="md:max-w-sm w-full">
                  <span className="flex flex-col md:flex-row gap-0 md:gap-2 items-start justify-start md:items-center">
                    <h2 className="font-bold text-white text-lg">codereg</h2>
                    <p className="text-sm text-white/50">John Reygun Danag</p>
                  </span>
                  <span className="hidden md:flex gap-x-2 flex-wrap items-center">
                    <p className="text-white ">
                      Image Gallery using HTML/SCSS/JS{" "}
                    </p>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #programming
                    </span>

                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #webdevelopment
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #webdeveloper
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #fullstackdeveloper
                    </span>
                  </span>
                </header>
                <div className="h-full w-full px-3 md:px-0 relative -left-[70px] md:left-0 top-0 md:relative flex items-end gap-1 md:gap-5">
                  <div
                    onClick={() => setPause(!isPause)}
                    className="lg:max-w-[300px] max-w-[230px] max-h-[500px] h-full rounded-xl bg-white overflow-hidden shrink-0"
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover bg-white"
                      autoPlay
                      loop
                    >
                      <source src={vid3} />
                    </video>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <AiFillHeart className="text-2xl md:text-2xl text-pink" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">345</p>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <BsFillChatDotsFill className="text-xl md:text-2xl text-white" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">642</p>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <RiShareForwardFill className="text-xl md:text-2xl text-white" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">8428</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="text-pink font-semibold border border-pink px-5 bg-white/5 rounded-md">
                  Follow
                </button>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className=" py-8 max-w-5xl w-full flex justify-center items-start gap-2 md:gap-3 border-b border-white/20">
              <span className="w-12 md:w-14 h-full shrink-0">
                <img
                  className="w-full h-12 md:h-14 rounded-full bg-white shrink-0 object-cover"
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d069366a9ef9dd3915011b2a3ab0953c.jpeg?x-expires=1675386000&x-signature=gYP8B3w3aURaVirzLxJlwoQUmbk%3D"
                  alt=""
                />
              </span>
              <div className="max-w-xl w-full flex flex-col gap-y-3">
                <header className="md:max-w-sm w-full">
                  <span className="flex flex-col md:flex-row gap-0 md:gap-2 items-start justify-start md:items-center">
                    <h2 className="font-bold text-white text-lg">codereg</h2>
                    <p className="text-sm text-white/50">John Reygun Danag</p>
                  </span>
                  <span className="hidden md:flex gap-x-2 flex-wrap items-center">
                    <p className="text-white ">My 5 years old project😂</p>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #programming
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #htmlcss
                    </span>
                    <span className="text-white/80 text-sm md:text-base font-[500]">
                      #webdevelopment
                    </span>
                  </span>
                </header>
                <div className="h-full w-full px-3 md:px-0 relative -left-[70px] md:left-0 top-0 md:relative flex items-end gap-1 md:gap-5">
                  <div
                    onClick={() => setPause(!isPause)}
                    className="lg:max-w-[300px] max-w-[230px] max-h-[500px] h-full rounded-xl bg-white overflow-hidden shrink-0"
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover bg-white"
                      autoPlay
                      loop
                    >
                      <source src={vid1} />
                    </video>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <AiFillHeart className="text-2xl md:text-2xl text-pink" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">345</p>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <BsFillChatDotsFill className="text-xl md:text-2xl text-white" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">642</p>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                      <span className=" p-3 rounded-full bg-white/10">
                        <RiShareForwardFill className="text-xl md:text-2xl text-white" />
                      </span>
                      <p className="text-white/80 text-xs md:text-sm">8428</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="text-pink font-semibold border border-pink px-5 bg-white/5 rounded-md">
                  Follow
                </button>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
