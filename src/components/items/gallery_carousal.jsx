import { Html } from "@react-three/drei";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ImageCard from "./image-card";

function Carousal(props) {
  const refs = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgs = [];
  for (var i = 16; i >=1; i--) {
    imgs.push("src/assets/gallery-images/image-" + i+".png")
  }
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
    x.set(-currentIndex * (120-3));
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
      <div className={`fixed justify-center items-center ${props.screenSize ? "w-87 top-80 left-10" : "w-90 top-35 left-125"}`} ref={refs}>
        <motion.div className={`overflow-hidden relative`} >
          <motion.div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ x }}
            drag="x"
            dragConstraints={{              
              left: (-totalImages*(120-3)),
              right: 0
            }}
            className={`flex ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            {imgs.map((img, index) => (
              <ImageCard key={index} src={img} desc={""} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Html>
  );
}

export default Carousal;
