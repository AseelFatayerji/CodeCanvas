import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const [prjs, setPrjs] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "AseelFatayerji";

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        const projects = res.data.map((repo) => ({
          name: repo.name.replace(/-/g, " "),
          link: repo.html_url,
          demo: "https://aseelfatayerji.github.io/" + repo.name,
        }));
        setPrjs(projects);
      })
      .catch((err) => console.error("Error fetching repos:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="Projects"
      className="relativ w-full min-h-screen text-center pt-16 border inset-0"
    >
      <h2 className="text-center font-bold text-3xl select-none sm:px-10 md:text-4xl md:pt-26 lg:px-15">
        Projects
      </h2>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h[1px] w-full mt-12" />
      <div className="flex w-full gap-10 px-10">
        {isMobile ? <></> : <div className="flex-1">Model</div>}
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
