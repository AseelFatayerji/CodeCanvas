import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const [prjs, setPrjs] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "AseelFatayerji";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });
  const handleMouseMove = (event) => {
    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_git_token}`,
        },
      })
      .then((res) => {
        const projects = res.data.map((repo) => ({
          name: repo.name.replace(/-/g, " "),
          repo: repo.name,
          link: repo.html_url,
          disc: repo.description,
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
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-center font-bold text-3xl select-none sm:px-10 md:text-4xl md:pt-26 lg:px-15">
        Projects
      </h2>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full mt-12" />
      <div className="flex w-full gap-10 px-10">
        {isMobile ? <></> : <div className="flex-1">Model</div>}
        <div className="flex-1 grid grid-cols-1 gap-4 justify-evenly py-10 overflow-hidden">
          {prjs.map((project, index) => (
            <Project
              key={index}
              index={index}
              repo={project.repo}
              title={project.name}
              demo={project.demo}
              link={project.link}
              disc={project.disc}
              setPreview={setPreview}
            />
          ))}
          {preview && (
            <motion.img
              src={preview}
              className="fixed top-0 left-0 z-50 object-cover h-56 w-80 rounded-lg shadow-lg pointer-events-none"
              style={{ x: springX, y: springY }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
