import { faX, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Image({ src, desc, setShowImage }) {
    return (
        <div className={`fixed inset-0 z-10  bg-white/30`} onClick={() => { setShowImage(false) }}>
            <div className='bg-amber-700 w-fit h-fit p-3 self-center justify-self-center rounded-2xl mt-20 text-right '>
                <FontAwesomeIcon icon={faXmarkCircle} className='rounded-lg text-2xl text-gray-400 hover:text-gray-800 cursor-pointer' onClick={() => { setShowImage(false) }} />
                <img src={src} className='h-100 w-80 rounded-2xl' />
                <h1>{desc}</h1>
            </div> 
        </div>
    );
}
export default Image;