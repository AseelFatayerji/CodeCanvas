import axios from "axios";
import { memo, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion, useInView } from "framer-motion";

import Project from "../components/Project";
import ParallaxP from "../components/parallax/ParrallaxProject";

function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const [prjs, setPrjs] = useState([]);
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false });

  const duration = 1.2;
  const ease = "easeInOut";
  const [loading, setLoading] = useState(true);
  const username = "AseelFatayerji";

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_git_token}`,
        },
      })
      .then((res) => {
        setPrjs((prev) => {
          return res.data.map((repo) => ({
            name: repo.name.replace(/-/g, " "),
            repo: repo.name,
            link: repo.html_url,
            disc: repo.description,
            demo: "https://aseelfatayerji.github.io/" + repo.name,
          }));
        });
      })
      .catch((err) => console.error("Error fetching repos:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Projects"
      className="w-full min-h-screen text-center inset-0 relative"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isInView ? "0%" : "100%" }}
        transition={{ duration, ease }}
        className="relative z-10"
      >
        <h2 className="text-center font-bold text-3xl select-none sm:px-10 md:text-5xl md:pt-30 lg:px-15">
          Projects
        </h2>
        <div className="bg-linear-to-r from-transparent via-neutral-200 to-transparent h-px mt-8" />
        <div className="flex w-full gap-10 px-10">
          {isMobile ? <></> : <div className="flex-1"></div>}
          <div className="flex-1 grid grid-cols-1 h-120 mt-10 gap-4 justify-evenly py-2 overflow-y-auto scroll-smooth">
            {prjs.map((project, index) => (
              <Project
                key={index}
                index={index}
                repo={project.repo}
                title={project.name}
                demo={project.demo}
                link={project.link}
                disc={project.disc}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Projects);
