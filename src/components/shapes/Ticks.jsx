function Ticks({ className = "", color = "#FF2E93", strokeWidth = 4 }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    >
      <path d="M8.8 18.2L10.9 6.4M17.3 22.7L25.8 14.2M21.8 31.2L33.6 29.1" />
    </svg>
  );
}

export default Ticks;