import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

const ImageCard = ({ src, onClick, animate = "" }) => {
  return (
    <>
      <motion.div className={`min-w-fit ${animate}`}>
        <div
          className="rounded-lg ml-3 border-4 border-gray-800/50 shadow-[7px_7px_0px_0px_rgba(0,_0,_0,_0.2)]"
          id="card"
        >
          <div className="content text-right relative">
            <img
              src={src}
              className="max-w-md h-auto w-48 ms:w-20 rounded-lg cursor-pointer"
              onClick={onClick}
            />
              <FontAwesomeIcon
                icon={faUpRightAndDownLeftFromCenter}
                className=" absolute cursor-pointer bottom-2 right-2 text-center bg-gray-800/50  text-gray-300 text-lg border border-gray-300 font-medium overflow-hidden py-1 px-2 mt-2 rounded-md transition-all ease-in-out duration-300 hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#ffffff] hover:brightness-150 active:translate-x-[3px] active:shadow-nonemt-2.5 active:translate-y-[3px] active:shadow-none active:opacity-75 outline-none group"
                onClick={onClick}
              />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ImageCard;
