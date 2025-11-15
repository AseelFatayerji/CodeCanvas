import React from "react";

function Projects() {
  return (
    <section id="Projects" className="w-full h-screen text-center pt-16 border inset-0">
      <h2 className="text-center text-4xl pt-16">Projects</h2>
      <div className="flex w-full gap-10 px-10">
        <div className="flex-1">Model</div>
        <div className="flex-1 grid grid-cols-1 gap-4 justify-evenly py-10 overflow-hidden">
          <div className="flex items-end grid-default-color">Project</div>
          <div className="flex items-end grid-default-color">Project</div>
          <div className="flex items-end grid-default-color">Project</div>
          <div className="flex items-end grid-default-color">Project</div>
          <div className="flex items-end grid-default-color">Project</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
