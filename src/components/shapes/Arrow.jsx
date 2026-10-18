import React, { useId } from "react";

const ROTATIONS = { right: 0, down: 90, left: 180, up: 270 };

const PATHS = {
  1: "M250 248Q550 248 550 548",
  2: "M250 247.97836303710938Q532 258.9783630371094 400 397.9783630371094Q243 576.9783630371094 550 547.9783630371094",
};

function Arrow({
  className = "",
  color = "#000000",
  size,
  strokeWidth = 10,
  direction = "right",
  rotate = 0,
  flipX = false,
  flipY = false,
  curves = 2,
}) {
  const markerId = useId();
  const deg = (ROTATIONS[direction] ?? 0) + rotate;
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className={className}
      style={{
        width: dimension,
        height: dimension,
        transform: `rotate(${deg}deg) scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
      }}
    >
      <g
        strokeWidth={strokeWidth}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={PATHS[curves] ?? PATHS[2]} markerEnd={`url(#${markerId})`} />
      </g>
      <defs>
        <marker
          markerWidth="7"
          markerHeight="7"
          refX="3.5"
          refY="3.5"
          viewBox="0 0 7 7"
          orient="auto"
          id={markerId}
        >
          <polyline
            points="0,3.5 3.5,1.75 0,0"
            fill="none"
            strokeWidth="1.1666666666666667"
            stroke={color}
            strokeLinecap="round"
            transform="matrix(1,0,0,1,1.1666666666666667,1.75)"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
    </svg>
  );
}

export default Arrow;