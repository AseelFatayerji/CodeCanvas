import React, { useEffect, useState } from 'react';
import "../../css/timeline.css"
import { Html } from '@react-three/drei';
import { motion, useMotionValue } from 'framer-motion';
import TimeCard from './time_line_card';

function Timeline() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const prjs = [{ "Disc": "Random discription text dasghdadfgashjkdgf hjd gfhjasdbgf", "Name": "Title" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }]
    const total = prjs.length;

    const y = useMotionValue(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
    };
    const handleMouseDown = () => {
        setIsMouseDown(true);
    };
    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    useEffect(() => {
        y.set(-currentIndex * (110));
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    prevProject();
                    break;
                case "ArrowDown":
                    nextProject();
                    break;
                default:
                    break;
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex, y]);
    return (
        <Html>
            <div className="inset-x-0 h-130 -translate-y-25 fixed justify-center items-center flex flex-col font-bold z-10">
                <div className="overflow-hidden scale-35 text-white">
                    <motion.ul className={`time-container w-fit p-0 m-0 grid content-center list-none ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`} drag="y"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        style={{ y }}
                        dragConstraints={{
                            top: (-total * (110)),
                            bottom: 0,
                        }}>
                        {prjs.map((project, index) => {
                            return <li key={index} className='time-line text-pretty relative h-fit p-4 rounded-[70px] grid col-span-2 text-center font-bold text-2xl border-[20px] border-solid border-transparent'>
                                <TimeCard disc={project.Disc} title={project.Name}/></li>
                        })}

                    </motion.ul>
                </div>
            </div>
        </Html >);
}

export default Timeline;