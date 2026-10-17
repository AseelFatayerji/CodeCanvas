function Squiggle({ className = "", color = "#fff", strokeWidth = 4 }) {
  return (
    <svg
      viewBox="0 0 60 20"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12c6-10 10-10 14 0s8 10 14 0 10-10 14 0" />
    </svg>
  );
}

export default Squiggle;
