function Ticks({
  className = "",
  color = "#FF2E93",
  strokeWidth = 4,
  count = 3,
  spacing = 35,
  angle = 45,
  innerRadius = 16,
  outerRadius = 28,
  cx = 6,
  cy = 34,
}) {
  const toRad = (deg) => (deg * Math.PI) / 180;

  const d = Array.from({ length: count }, (_, i) => {
    const a = toRad(angle + (i - (count - 1) / 2) * spacing);
    const x1 = cx + innerRadius * Math.cos(a);
    const y1 = cy - innerRadius * Math.sin(a);
    const x2 = cx + outerRadius * Math.cos(a);
    const y2 = cy - outerRadius * Math.sin(a);
    return `M${x1.toFixed(2)} ${y1.toFixed(2)}L${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }).join("");

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      overflow="visible"
    >
      <path d={d} />
    </svg>
  );
}

export default Ticks;