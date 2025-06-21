import { Html } from "@react-three/drei";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ImageCard from "./image-card";
import Image from "./image_discription";
import "../../css/carousal.css";

function Carousal(props) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const imageWidth = 200; 
  const gap = 16; 

  const imgs = [];
  for (var i = 16; i >= 1; i--) {
    imgs.push("src/assets/gallery-images/image-" + i + ".png");
  }

  const discription = [
    "Gouache Paint",
    "Graphite Pencils",
    "Ink",
    "Graphite Pencils",
    "Graphite Pencils",
    "Mixed Media (Gouache Paint with Gold Leaf)",
    "Mixed Media (Gouache Paint with Colored Pencils)",
    "Graphite Pencil",
    "Alchole Markers",
    "Gouache Paint",
    "Gouache Paint",
    "Gouache Paint",
    "Gouache Paint",
    "Graphite Pencil",
    "Graphite Pencil",
    "Digital Art",
    "Digital Art",
  ];

  const totalImages = imgs.length;
  const trackWidth = totalImages * (imageWidth + gap);

  const x = useMotionValue(0);

  const nextImage = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalImages - 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowImage(true);
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [props.screenSize]);

  useEffect(() => {
    const centerOffset = containerWidth / 2 - (imageWidth / 2);
    const newX = -currentIndex * (imageWidth + gap) + centerOffset;
    x.set(newX);

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") prevImage();
      else if (event.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, containerWidth]);

  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      const centerOffset = containerWidth / 2 - (imageWidth / 2);
      const index = Math.round((-latestX + centerOffset) / (imageWidth + gap));
      if (index >= 0 && index < totalImages) {
        setCurrentIndex(index);
      }
    });
    return () => unsubscribe();
  }, [x, containerWidth]);

  return (
    <Html>
      <div
        className={`inset-0 fixed justify-self-center self-center flex flex-row ${
          props.screenSize ? "top-2 w-75 mr-3" : "w-md bottom-44 mr-2"
        }`}
      >
        <motion.div className="overflow-hidden relative p-3" ref={containerRef}>
          <motion.div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -(trackWidth - containerWidth),
              right: 0,
            }}
            className={`flex gap-[${gap}px] max-h-fit ${
              isMouseDown ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {imgs.map((img, index) => (
              <ImageCard
                src={img}
                key={index}
                desc={""}
                animate={index === currentIndex ? "floating" : ""}
                setShowImage={setShowImage}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </motion.div>

          <div className="flex justify-center space-x-2 mt-5">
            {imgs.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-600 scale-110"
                    : "bg-white hover:bg-gray-400"
                }`}
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
    </Html>
  );
}

export default Carousal;
