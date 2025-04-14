import React from 'react';
import "../../css/timeline.css"
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

function Timeline() {
    const prjs = [{ "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }, { "Disc": "name", "Name": "name" }]
    const total = prjs.length;
    return (
        <Html>
            <div className="inset-0 fixed justify-center items-center flex flex-col font-bold z-10">
                <div className="overflow-hidden h-fit w-fit scale-54 mb-35">
                    <motion.ul drag="y"
                        dragConstraints={{
                            top:(-total*(120)),
                            bottom: 0,
                        }}>
                        {prjs.map((project, index) => {
                            return <li key={index}>
                                    <discription>{project.Name}</discription>{project.Disc}</li>
                        })}

                    </motion.ul>
                </div>
            </div>
        </Html >);
}

export default Timeline;