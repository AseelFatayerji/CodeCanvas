import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../css/carousal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

const ImageCard = ({ src }) => {
    return (
        <motion.div className='min-w-1/3'>
            <div className="card bg-gray-800/50 rounded-lg p-2 ml-2" id="card">
                <div className="content text-right">
                    <img src={src} className='h-30 w-25 rounded-lg' />
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='mt-1 p-1 rounded-lg text-s hover:bg-white hover:text-gray-800' />
                </div>
            </div>
        </motion.div>
    );
};

export default ImageCard;
