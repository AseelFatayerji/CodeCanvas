import { useEffect, useState, useRef, useCallback } from "react";
import "../../css/timeline.css";
import { Html } from "@react-three/drei";
import { motion, useMotionValue } from "framer-motion";
import TimeCard from "../items/time_line_card.jsx";
import axios from "axios";
import PacMan from "../loaders/pacman-loader.jsx";

function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [dragLimits, setDragLimits] = useState({ top: 0, bottom: 0 });

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const y = useMotionValue(0);

  const [loading, setLoading] = useState(true);
  const [prjs, setPrjs] = useState([]);

  const username = "AseelFatayerji";

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) =>
      prjs.length === 0 ? 0 : (prev + 1) % prjs.length
    );
  }, [prjs]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) =>
      prjs.length === 0 ? 0 : (prev - 1 + prjs.length) % prjs.length
    );
  }, [prjs]);

  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

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

  useEffect(() => {
    y.set(-currentIndex * 180);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        prevProject();
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        nextProject();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  useEffect(() => {
    const updateDragConstraints = () => {
      const containerHeight = containerRef.current?.offsetHeight || 0;
      const listHeight = listRef.current?.scrollHeight || 0;
      const maxDrag = Math.max(0, listHeight - containerHeight);

      setDragLimits({
        top: -maxDrag,
        bottom: 0,
      });
    };

    updateDragConstraints();
    window.addEventListener("resize", updateDragConstraints);

    return () => {
      window.removeEventListener("resize", updateDragConstraints);
    };
  }, [prjs]);
  if (loading) {
    return (
      <Html position={[0, 1, 0]} scale={2} transform center>
        <PacMan />
      </Html>
    );
  }

  return (
    <Html transform center>
      <div className="font-bold h-[62svh] " ref={containerRef}>
        <div className="overflow-hidden text-white h-full">
          <motion.ul
            ref={listRef}
            className={`time-container w-fit p-0 m-0 grid content-center list-none ${
              isMouseDown ? "cursor-grabbing" : "cursor-grab"
            }`}
            drag="y"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ y }}
            dragConstraints={dragLimits}
          >
            {prjs.map((project, index) => (
              <li
                key={index}
                className="time-line text-pretty relative h-fit p-4 grid col-span-2 text-center font-bold text-2xl"
                style={{
                  "--c": index % 2 === 0 ? "#ff2de2" : "#00cfff",
                  "--d": index % 2 === 0 ? "90deg" : "-90deg",
                }}
              >
                <TimeCard
                  index={index}
                  title={project.name}
                  demo={project.demo}
                  link={project.link}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Html>
  );
}

export default Timeline;
