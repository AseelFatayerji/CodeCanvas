import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";
import { useState } from "react";
const ProjectDetails = ({
  index,
  repo,
  title,
  demo,
  disc,
  link,
  stacks,
  closePreview,
  icons,
}) => {
  const isApp = stacks.some((stack) =>
    ["Swift", "Kotlin", "Dart", "Objective-C"].includes(stack)
  );
  const links = isApp ? link : demo;

  const getIcon = (stack) => {
    const temp = icons.find((item) => item.name === stack);
    return temp || { icon: faHtml5, color: "#f06529", name: stack };
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative max-w-2xl border border-white/10 shadow-sm rounded-2xl bg-linear-to-l from-[#06091f] to-[#161a31]"
      >
        <button
          className="absolute px-2 py-1 rounded-sm top-5 right-5 bg-[#06091f] hover:bg-[#323661] cursor-pointer"
          onClick={closePreview}
        >
          <FontAwesomeIcon icon={faClose} className="text-md" />
        </button>
        <img
          src="src/assets/backgrounds/test-preview.png"
          alt={title}
          className="w-full rounded-t-2xl "
        />
        <div className="p-5 text-left bg-linear-to-b from-[#191b30] to-indigo-950 rounded-b-2xl">
          <h5 className="mb-2 text-2xl font-bold">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{disc}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1 text-4xl">
              {stacks.map((stack, index) => {
                const iconObj = getIcon(stack);
                return iconObj.img ? (
                  <img
                    key={index}
                    src={iconObj.img}
                    alt={stack}
                    className="h-12 w-12"
                  />
                ) : (
                  <FontAwesomeIcon
                    key={index}
                    icon={iconObj.icon}
                    style={{ color: iconObj.color }}
                  />
                );
              })}
            </div>
            <a
              onClick={() => window.open(links, "_blank")}
              className="w-fit select-none cursor-pointer hover-animation"
            >
              {isApp ? "View Repo" : "View Demo"}{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
