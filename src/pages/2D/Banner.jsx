import React from "react";

function Banner() {
  return (
    <div className="w-full flex bg-[#C7FF2F] p-15 justify-between">
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
            Check Out The{" "}
            <b className="text-purple-500 font-extrabold">3D Mode </b>of this
            this Portfolio
          </h2>
        </div>
      </div>
      <div className="justify-center align-middle flex flex-col">
        <span
          href="#Hero3D"
          className="bg-[#141414] px-4 py-4 text-center rounded-full hover:bg-black/50 transition-all duration-300"
        >
          Coming Soon
        </span>
      </div>
    </div>
  );
}

export default Banner;
