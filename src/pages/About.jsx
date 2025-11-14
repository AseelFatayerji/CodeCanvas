import React from "react";

function About() {
  return (
    <section id="About" className="w-full h-screen text-center">
      <h2 className="text-center text-4xl pt-5">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[15rem] py-10 md:px-36 px-10">
        <div className="flex items-end grid-default-color grid-1">Model</div>
        <div className="flex items-end grid-default-color grid-2">
          CODE IS ART
        </div>
        <div className="flex items-end grid-black-color grid-3">
          {/* <img src="" className="absolute " /> */}
          <div className="z-10 text-left items-start">
            <p className="text-md">Hi I'm Aseel Fatayerji</p>
            <p className="text-xs text-neutral-400 text-pretty">
              Over the last 5 years, I've developed my coding skills in
              frontend, backend, design and security to deliver secure, dynamic
              and responsive web and software applications
            </p>
          </div>
        </div>  
        <div className="flex items-end grid-special-color grid-4">Stacks</div>
        <div className="flex items-end grid-default-color grid-5">
          CV Download
        </div>
      </div>
    </section>
  );
}

export default About;
