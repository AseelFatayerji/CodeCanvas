import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="bg-gray-600 w-[70px] h-[80px] rounded-[10px] text-4xl">
          <div className="w-full h-full flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faFolderOpen} />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <p className="text-xl font-bold">
            Level {index + 1}: {title}
          </p>
          <div className="flex gap-3 mt-1 text-base">
            <button
              onClick={() => window.open(link, "_blank")}
              className="rounded-lg"
            >
              GitHub
            </button>
            <button
              onClick={() => window.open(demo, "_blank")}
              className="rounded-lg"
            >
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;
