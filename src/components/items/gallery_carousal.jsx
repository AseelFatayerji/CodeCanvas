import { Html } from "@react-three/drei";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ImageCard from "./image-card";
import Image from "./image_discription";
import "../../css/carousal.css";

function Carousal(props) {
  const refs = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const imgs = [];
  for (var i = 16; i >= 1; i--) {
    imgs.push("src/assets/gallery-images/image-" + i + ".png");
  }
  const discription = ["Gouache Paint", "Graphite Pencils", "Ink", "Graphite Pencils", "Graphite Pencils", "Mixed Media (Gouache Paint with Gold Leaf)", "Mixed Media (Gouache Paint with Colored Pencils)", "Graphite Pencil", "Alchole Markers", "Gouache Paint", "Gouache Paint", "Gouache Paint", "Gouache Paint", "Graphite Pencil", "Graphite Pencil", "Digital Art", "Digital Art"];
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
    x.set(-currentIndex * (100 - 3));
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

  useEffect(() => {
    const unsubscribe = x.onChange((latestX) => {
      const index = Math.round(-latestX / (100 - 3));
      setCurrentIndex(index);
    });

    return () => unsubscribe();
  }, [x]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowImage(true);
  };

  return (
    <Html className="">
      <div className={`fixed justify-center items-center ${props.screenSize ? "w-87 top-80 left-10" : "w-90 top-30 left-125"}`} ref={refs}>
        <motion.div className={`overflow-hidden relative p-3`}>
          <motion.div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -totalImages * (100 - 3),
              right: 0,
            }}
            className={`flex max-h-fit ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            {imgs.map((img, index) => (
              <ImageCard src={img} key={index} desc={""}  animate={index === (currentIndex) ? 'floating' : ''} setShowImage={setShowImage} onClick={() => handleImageClick(index)} />
            ))}
          </motion.div>
          <div className="flex justify-center space-x-2 mt-5">
            {imgs.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
                  ${index === currentIndex ? 'bg-gray-600 scale-110' : 'bg-white hover:bg-gray-400'}`}
              ></div>
            ))}
          </div>

        </motion.div>

        {showImage && selectedImageIndex !== null && (
          <Image
            src={imgs[selectedImageIndex]}
            desc={discription[totalImages - selectedImageIndex]}
            showImage={showImage}
            setShowImage={setShowImage}
          />
        )}
      </div>
    </Html >
  );
}

export default Carousal;
