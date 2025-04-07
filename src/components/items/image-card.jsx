import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../css/carousal.css";

const ImageCard = ({ src }) => {
    return (
        <motion.div className='min-w-1/3 ml-3'>
            <div className="card bg-gray-800 rounded-2xl p-2" id="card">
                <div className="content">
                    <img src={src} className='h-40 w-30 rounded-lg' />
                    <div className='pt-5 justify-center text-center'>
                        Expand Button
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ImageCard;
