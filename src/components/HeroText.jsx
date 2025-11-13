import React from "react";
import { FlipWords } from "./FlipWords";

function HeroText() {
  const words = ["Secure", "Inovative", "Unique", "Scalable"];
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text md:px-16 sm:px-10">
      <div className="flex-col hidden md:flex text-neutral-300 font-medium">
        <h1 className="text-3xl">Hi, I'm Aseel</h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl ">
            A Software Developer <br /> Dedicated to Creating
          </p>
          <div className="text-8xl">
            <FlipWords words={words} />
          </div>
          <p className="text-4xl ">Coding Solutions</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-6 md:hidden">
        <h2 className="text-3xl">Hi, I'm Aseel</h2>
        <div className="flex flex-col ">
          <p className="text-6xl ">Building</p>
          <div className="text-7xl text-center pl-4">
            <FlipWords words={words} />
          </div>
          <p className="text-4xl ">Coding Solutions</p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
