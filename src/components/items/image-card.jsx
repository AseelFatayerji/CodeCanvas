import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../css/carousal.css";

const ImageCard = ({ src }) => {
    return (
        <motion.div className='min-w-1/3'>
            <div className="card bg-gray-800/50 rounded-lg p-2 ml-2" id="card">
                <div className="content">
                    <img src={src} className='h-30 w-25 rounded-lg' />
                    <div className='pt-1 justify-center text-center'>
                        Expand Button
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ImageCard;
