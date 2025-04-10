import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

const ImageCard = ({ src, onClick, animate="" }) => {
    return (
        <>
            <motion.div className={`min-w-1/3 ${animate}`}>
                <div className="card bg-gray-800/50 rounded-lg p-2 h-fit ml-3 shadow-[7px_7px_0px_0px_rgba(0,_0,_0,_0.2)]" id="card">
                    <div className="content text-right">
                        <img src={src} className='h-30 w-25 rounded-lg -z-1' />

                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='cursor-pointer bg-transparent text-gray-300 text-lg border border-gray-300 border-b-4 font-medium overflow-hidden relative p-1 pl-2 pr-2 mt-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group' onClick={onClick} />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ImageCard;
