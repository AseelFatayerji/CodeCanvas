import React from "react";

function Services() {
  return (
    <section id="Services" className="w-full h-screen text-center inset-0 -z-50 border">
      <h2 className="text-center text-4xl pt-16">Services</h2>
      <div className="flex w-full gap-10 px-10">
        <div className="flex-1 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[15rem] py-10">
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
          <div className="flex items-end grid-default-color">Service</div>
        </div>
        <div className="flex-1">Model</div>
      </div>
    </section>
  );
}

export default Services;
