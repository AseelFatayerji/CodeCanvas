import {
  faCss3,
  faDartLang,
  faHtml5,
  faJava,
  faJs,
  faPhp,
  faPython,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faC } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectDetails from "./interactive/ProjectDetails";
import { createPortal } from "react-dom";

const Project = ({ index, repo, title, demo, disc, link }) => {
  const [stacks, setStacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const username = "AseelFatayerji";
  const icons = [
    { name: "Swift", icon: faSwift, color: "#ff3e30" },
    { name: "PHP", icon: faPhp, color: "#8892be" },
    { name: "CSS", icon: faCss3, color: "#2965f1" },
    { name: "Java", icon: faJava, color: "#ED8B00" },
    { name: "JavaScript", icon: faJs, color: "#f0db4f" },
    { name: "HTML", icon: faHtml5, color: "#f06529" },
    { name: "Python", icon: faPython, color: "#FFE873" },
    { name: "Dart", icon: faDartLang, color: "#5420dd" },
    { name: "C", icon: faC, color: "#2965f1" },
    { name: "C++", img: "src/assets/icons/cpp.png" },
    { name: "CMake", img: "src/assets/icons/CMake.png" },
    { name: "Kotlin", img: "src/assets/icons/Kotlin.png" },
    { name: "Objective-C", img: "src/assets/icons/Objective-C.png" },
  ];
  const getIcon = (stack) => {
    const temp = icons.find((item) => item.name === stack);
    return temp || { icon: faHtml5, color: "#f06529", name: stack };
  };
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${username}/${repo}/languages`, {})
      .then((res) => {
        setStacks(Object.keys(res.data));
      })
      .catch((err) => console.error("Error fetching repos:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="flex-wrap items-end justify-between px-3 py-5 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl text-left">{title}</p>
          <div className="flex gap-5 mt-2 text-[#d6995c] text-4xl">
            {stacks.map((stack, index) => (
              <span key={index} className="items-center justify-center">
                {getIcon(stack).img ? (
                  <img
                    key={index}
                    src={getIcon(stack).img}
                    alt=""
                    className="h-10 w-10"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={getIcon(stack).icon}
                    alt={stack}
                    style={{ color: getIcon(stack).color }}
                  />
                )}
              </span>
            ))}
          </div>
        </div>
        <button
          className="flex gap-1 cursor-pointer items-center hover-animation "
          onClick={() => setHidden(true)}
        >
          Read More
          <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
        </button>
      </div>
      <div className="bg-linear-to-r from-transparent via-neutral-200 to-transparent h-px w-full mt-2" />
      {hidden &&
        createPortal(
          <ProjectDetails
            index={index}
            repo={repo}
            title={title}
            demo={demo}
            link={link}
            stacks={stacks}
            disc={disc}
            icons={icons}
            closePreview={() => setHidden(false)}
          />,
          document.body
        )}
    </>
  );
};

export default Project;
