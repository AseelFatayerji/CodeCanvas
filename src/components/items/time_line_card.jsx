function TimeCard({ index, title, demo, link }) {
  return (
    <div
      className="w-full rounded-[30px] p-6 bg-blue-950 border-[1px]"
      style={{
        borderColor: "var(--c)",
        boxShadow: `
          0 0 20px var(--c),
          0 0 40px var(--c),
          0 0 60px var(--c)
        `,
      }}
    >
      <div className="flex gap-4 items-center">
        <div className="bg-gray-600 w-[70px] h-[80px] rounded-[10px]"></div>
        <div className="flex flex-col gap-2 text-left">
          <p className="text-xl font-bold">
            Level {index + 1}: {title}
          </p>
          <div className="flex gap-3 mt-1 text-base">
            <a
              href={link}
              className="rounded-lg border-2 border-yellow-300 text-yellow-300 px-3 py-1 hover:bg-yellow-400 hover: transition"
            >
              GitHub
            </a>
            <a
              href={demo}
              className="rounded-lg border-2 border-yellow-300 text-yellow-300 px-3 py-1 hover:bg-yellow-400 hover: transition"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;
