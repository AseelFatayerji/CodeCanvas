import React from 'react';
import "../../css/timeline.css"
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

function Timeline() {
    const prjs = [{ "Disc": "Random discription text dasghdadfgashjkdgf hjd gfhjasdbgf", "Name": "Title" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }]
    const total = prjs.length;
    return (
        <Html>
            <div className="inset-0 fixed justify-center items-center flex flex-col font-bold z-10">
                <div className="overflow-hidden h-fit w-fit scale-55 mb-40 text-white">
                    <motion.ul className="time-container p-0 m-0 grid content-center list-none" drag="y"
                        dragConstraints={{
                            top:(-total*(120)),
                            bottom: 0,
                        }}>
                        {prjs.map((project, index) => {
                            return <li key={index} className='time-line text-pretty relative h-fit p-4 rounded-[70px] grid col-span-2 text-center font-bold text-2xl border-[20px] border-solid border-transparent'>
                                    <discription>{project.Name}</discription>{project.Disc}</li>
                        })}

                    </motion.ul>
                </div>
            </div>
        </Html >);
}

export default Timeline;