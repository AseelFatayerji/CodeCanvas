import React from "react";
import { useMediaQuery } from "react-responsive";

function Banner({ isMobile }) {
  
  const medium = useMediaQuery({ query: "(min-height: 750px)" });
  console.log(medium);
  return (
    <div className="w-full flex bg-[#C7FF2F] p-12 justify-between select-none md:p-15">
      {isMobile ? (
        <>
          <div className="flex">
            <div className=" text-black">
              <h6 className="captilize">Your browser can do so much more!</h6>
              <h2 className="text-3xl">
                Check Out The
                <b className="text-purple-500 font-extrabold"> 3D Mode </b>of
                this Portfolio
              </h2>
            </div>
            <div className="flex flex-col justify-between">
              <div className={`scale-50 mt-5`}>
                {/* <!-- From Uiverse.io by pasha43 -->  */}
                <div className="loader">
                  <div className="loader-cube">
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                  </div>
                </div>
              </div>
              {medium && (<div className="sm:h-25 md:h-15"/>)}
              <div className="justify-end align-middle flex flex-col">
                <span
                  href="/3D/Hero"
                  className="bg-[#141414] px-5 py-2 w-full text-sm text-center rounded-full hover:bg-black/50 transition-all duration-300"
                >
                  Soon...
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-4">
            <div className="relative px-5 mr-16 scale-70">
              {/* <!-- From Uiverse.io by pasha43 -->  */}
              <div className="loader">
                <div className="loader-cube">
                  <div className="face"></div>
                  <div className="face"></div>
                  <div className="face"></div>
                  <div className="face"></div>
                  <div className="face"></div>
                  <div className="face"></div>
                </div>
              </div>
            </div>

            <div className=" text-black">
              <h6 className="captilize">Your browser can do so much more!</h6>
              <h2 className="text-5xl">
                Check Out The
                <b className="text-purple-500 font-extrabold">3D Mode </b>of
                this Portfolio
              </h2>
            </div>
          </div>
          <div className="justify-center align-middle flex flex-col">
            <span
              href="#Hero3D"
              className="bg-[#141414] px-4 py-4 text-center rounded-full hover:bg-black/50 transition-all duration-300"
            >
              Soon...
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
