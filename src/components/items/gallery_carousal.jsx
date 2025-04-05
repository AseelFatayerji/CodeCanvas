
// import { Html } from "@react-three/drei";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// function Carousal(props) {
//   const refs = useRef(null);
//   const imgs = ["src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png"];

//   return (
//     <Html className="">
//       <div className={`fixed w-90 justify-center items-center ${props.screenSize ? "top-90" : "top-35 left-110"}`} ref={refs}>
//         <motion.div className="overflow-hidden relative" ref={refs}>
//           <motion.div drag="x" dragConstraints={{ right: 0, left: -(imgs.length * 100) }} className={`flex min-w bg-black `}>
//             {imgs.map((img, index) => (
//               <motion.div className="min-w-1/3 p-2" key={index}>
//                 <img src={img} className="h-45 w-35 rounded-lg" />
//               </motion.div>))}
//           </motion.div>
//         </motion.div>

//       </div>

//     </Html >
//   );
// }

// export default Carousal;

import { Html } from "@react-three/drei";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Carousal(props) {
  const refs = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgs = [
    "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png",
    "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png",
    "src/assets/backgrounds/wooden.png", "src/assets/backgrounds/character.png",
    "src/assets/backgrounds/character.png", "src/assets/backgrounds/character.png"
  ];

  const totalImages = imgs.length;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const x = useMotionValue(0);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleMouseDown = () => {
    setIsMouseDown(true);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    x.set(-currentIndex * (100 - 2));
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, x]);

  return (
    <Html className="">
      <div className={`fixed w-85 justify-center items-center ${props.screenSize ? "top-90" : "top-35 left-130"}`} ref={refs}>
        <motion.div className={`overflow-hidden relative`} >
          <motion.div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -((totalImages) * (100-2)),
              right: 0
            }}
            className={`flex min-w ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            {imgs.map((img, index) => (
              <motion.div className="min-w-1/3 p-2" key={index}>
                <img src={img} className="h-45 w-35 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="flex justify-between">
        <div>
          <button
            onMouseDown={prevImage}
            className="bg-black text-white rounded-full shadow-md"
          >
            Prev
          </button>
        </div>

        <div>
          <button
            onMouseDown={nextImage}
            className="bg-black text-white rounded-full shadow-md"
          >
            Next
          </button>
        </div>
        </div>
      </div>
    </Html>
  );
}

export default Carousal;
