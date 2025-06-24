function TimeCard({ index, title }) {
  return (
    <div
      className="w-full rounded-[30px] p-6 bg-[#111] border-[1px]"
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
        <div className="bg-[#1e1e2f] w-[70px] h-[80px] rounded-[10px] shadow-inner border border-[#333]"></div>
        <div className="flex flex-col gap-2 text-left">
          <p className="text-cyan-300 text-xl font-bold">
            Level {index + 1}: {title}
          </p>
          <div className="flex gap-3 mt-1 text-base">
            <a
              href="#"
              className="rounded-lg border-2 border-yellow-400 text-yellow-300 px-3 py-1 hover:bg-yellow-400 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="#"
              className="rounded-lg border-2 border-yellow-400 text-yellow-300 px-3 py-1 hover:bg-yellow-400 hover:text-black transition"
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