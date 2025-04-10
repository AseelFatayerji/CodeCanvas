import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

const ImageCard = ({ src, onClick, animate="" }) => {
    return (
        <>
            <motion.div className={`min-w-1/3 ${animate}`}>
                <div className="card bg-gray-800/50 rounded-lg p-2 ml-3 shadow-[7px_7px_0px_0px_rgba(0,_0,_0,_0.2)]" id="card">
                    <div className="content text-right">
                        <img src={src} className='h-30 w-25 rounded-lg -z-1' />

                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='cursor-pointer text-center bg-transparent text-gray-300 text-lg border border-gray-300 shadow-[2px_2px_0px_#ffffff] font-medium overflow-hidden relative py-1 px-2 mt-2 rounded-md transition-all ease-in-out duration-300 hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#ffffff] hover:brightness-150 active:translate-x-[3px] active:shadow-nonemt-2.5 active:translate-y-[3px] active:shadow-none active:opacity-75 outline-none group' onClick={onClick} />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ImageCard;
