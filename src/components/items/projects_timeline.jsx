import { useEffect, useState, useRef } from "react";
import "../../css/timeline.css";
import { Html } from "@react-three/drei";
import { motion, useMotionValue } from "framer-motion";
import TimeCard from "../items/time_line_card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [dragLimits, setDragLimits] = useState({ top: 0, bottom: 0 });

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const y = useMotionValue(0);

  const prjs = Array.from({ length: 11 }, (_, i) => ({
    Name: `Project ${i + 1}`,
  }));

  const total = prjs.length;

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

  useEffect(() => {
    y.set(-currentIndex * 180);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") prevProject();
      if (event.key === "ArrowDown") nextProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  return (
    <Html transform center>
      <div className="font-bold h-[50svh]" ref={containerRef}>
        <div className="text-center text-7xl text-yellow-300 ">
          <FontAwesomeIcon icon={faGamepad} />
        </div>
        <div className="ml-80 -z-1 absolute w-fit text-6xl text-transparent rounded-[15px] border-15 border-yellow-300 border-r-0 border-t-0">
          r
        </div>
        <div className="overflow-hidden text-white h-full pt-14">
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
                <TimeCard index={index} title={project.Name} />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Html>
  );
}

export default Timeline;
