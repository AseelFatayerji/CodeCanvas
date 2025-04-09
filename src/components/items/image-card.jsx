import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../css/carousal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

const ImageCard = ({ src, desc, onClick }) => {
    return (
        <>
            <motion.div className='min-w-1/3'>
                <div className="card bg-gray-800/50 rounded-lg p-1 ml-3" id="card">
                    <div className="content text-right">
                        <img src={src} className='h-30 w-25 rounded-lg -z-1' />
                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='mt-1 p-1 rounded-lg text-s hover:bg-white hover:text-gray-800 cursor-pointer' onClick={onClick} />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ImageCard;
