import React from "react";
import { useMediaQuery } from "react-responsive";

function Banner({ isMobile }) {
  const medium = useMediaQuery({ query: "(min-height: 750px)" });

  return (
    <div className="w-full flex bg-[#C7FF2F] p-12 justify-between select-none border-y-4 border-black md:p-15">
      {isMobile ? (
        <>
          <div className="flex">
            <div className=" text-black">
              <h6 className="capitalize font-bold">
                Your browser can do so much more!
              </h6>
              <h2 className="text-3xl font-black">
                Check Out The{" "}
                <b className="text-purple-600 font-black">3D Mode </b>of this
                Portfolio
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
              {medium && <div className="sm:h-25 md:h-15" />}
              <div className="justify-end align-middle flex flex-col">
                <span
                  className={`shadow-[5px_5px_0_#000] transition-[translate,box-shadow] duration-100 hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0_#000] active:translate-x-1.25 active:translate-y-1.25 active:shadow-none bg-[#141414] text-white border-4 border-black rounded-lg font-bold select-none px-6 py-4 text-center`}
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
              <h6 className="capitalize font-bold">
                Your browser can do so much more!
              </h6>
              <h2 className="text-5xl font-black">
                Check Out The
                <b className="text-purple-600 font-black">3D Mode </b>of this
                Portfolio
              </h2>
            </div>
          </div>
          <div className="justify-center align-middle flex flex-col">
            <span
              className={`shadow-[5px_5px_0_#000] transition-[translate,box-shadow] duration-100 hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0_#000] active:translate-x-1.25 active:translate-y-1.25 active:shadow-none bg-[#141414] text-white border-4 border-black rounded-lg font-bold select-none px-6 py-4 text-center`}
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
