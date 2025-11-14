import React from "react";

function About() {
  return (
    <section id="About" className="w-full h-screen text-center">
      <h2 className="text-center text-4xl pt-5">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[15rem] py-10 md:px-36 px-10">
        <div className="flex items-end grid-default-color grid-1">Model</div>
        <div className="flex items-end grid-default-color grid-2">
          Code is Craft
        </div>
        <div className="flex items-end grid-black-color grid-3">
          {/* <img src="" className="absolute " /> */}
          Intro
        </div>
        <div className="flex items-end grid-special-color grid-4">Stacks</div>
        <div className="flex items-end grid-default-color grid-5">CV Download</div>
      </div>
    </section>
  );
}

export default About;
