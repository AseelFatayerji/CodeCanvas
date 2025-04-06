import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../css/carousal.css";

const ImageCard = ({ src }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div className='min-w-1/2'>
            <div className="card rounded-2xl p-2" id="card">
                <div className="content">
                    <div style={{backgroundImage:`url(${src})`}} className='h-45 w-35 rounded-lg bg-cover bg-center'/>
                </div>
            </div>
        </motion.div>
    );
};

export default ImageCard;
