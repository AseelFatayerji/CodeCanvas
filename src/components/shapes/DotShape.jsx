
function DotShape({
  className = "",
  dot = "rgba(255,255,255,0.5)",
  dotSize = "2px",
  gap = "30px",
  offset = "-5px",
  style = {},
}) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `radial-gradient(${dot} ${dotSize}, transparent 0)`,
        backgroundSize: `${gap} ${gap}`,
        backgroundPosition: `${offset} ${offset}`,
        ...style,
      }}
    />
  );
}

export default DotShape;
