import { faX, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Image({ src, desc, setShowImage }) {
    return (
        <div className={`fixed inset-0 z-10  bg-white/30`} onClick={() => { setShowImage(false) }}>

            <div class="relative border-3 border-black shadow-[12px_12px_0px_#000000] overflow-hidden transition-all ease-in-out duration-300 transform -translate-x-6 -translate-y-6 bg-blue-600 w-fit h-fit p-3 self-center justify-self-center rounded-2xl mt-20 text-right">
                <div >
                    <FontAwesomeIcon icon={faXmark} className='text-lg text-white border-3 bg-gray-400 cursor-pointer p-2 m-1 rounded-md border-black shadow-[3px_3px_0px_#000000] font-extrabold transition-all ease-in-out duration-300 hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#000000] hover:bg-gray-800 active:translate-x-[3px] active:shadow-nonemt-2.5 active:translate-y-[3px] active:shadow-none' onClick={() => { setShowImage(false) }} />
                </div>
                <div class="content">
                    <img src={src} className='h-100 w-80 rounded-2xl' />
                    <h1>{desc}</h1>
                </div>
            </div>
        </div>
    );
}
export default Image;