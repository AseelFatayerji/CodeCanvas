import { useState } from "react";

function Image({ src, desc, setShowImage }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${xPercent}% ${yPercent}%`);
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className="left-0 w-screen h-screen z-50 flex items-center justify-center pixel bg-white/30 cursor-pointer"
      onClick={() => {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          setShowImage(false);
        }
      }}
    >
      <div
        className="p-4 rounded-2xl border-4 border-black shadow-[12px_12px_0px_#000000] bg-blue-900 max-w-[90vw] max-h-[90vh] mb-10 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt="Zoomable"
          onClick={handleImageClick}
          className="rounded-2xl transition-transform duration-300 cursor-zoom-in max-h-[80vh] object-contain"
          style={{
            transform: isZoomed ? "scale(3)" : "scale(1)",
            transformOrigin: transformOrigin,
            cursor: isZoomed ? "zoom-out" : "zoom-in",
          }}
        />
        <p className="text-white text-center mt-2">Medium Used: {desc}</p>
      </div>
    </div>
  );
}

export default Image;
