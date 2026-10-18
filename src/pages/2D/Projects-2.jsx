import axios from "axios";
import { memo, useEffect, useState } from "react";
import Project2D from "../../components/Project-2";
import {
  faBookAtlas,
  faBurger,
  faCloudSun,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Ticks from "../../components/shapes/Ticks";
import Arrow from "../../components/shapes/Arrow";

const EXCLUDED = ["CodeCanvas", "Hotel Comission"];

function Projects2D({ isMobile }) {
  const [prjs, setPrjs] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "AseelFatayerji";
  const icons = [faBurger, faCloudSun, faBookAtlas];

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos?type=public`)
      .then((res) => {
        setPrjs(
          res.data
            .map((repo) => ({
              name: repo.name.replace(/-/g, " "),
              repo: repo.name,
              link: repo.html_url,
              disc: repo.description,
              demo: "https://aseelfatayerji.github.io/" + repo.name,
            }))
            .filter((project) => !EXCLUDED.includes(project.name)),
        );
      })
      .catch((err) => console.error("Error fetching repos:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="Projects" className="bg-pink-400 py-5">
      <div className="relative ">
        <h2 className=" font-bold text-center text-3xl select-none mr-15 md:text-[6.5rem] ">
          SELECTED WORK
        </h2>
        <Ticks
          className="absolute rotate-40 right-[15%] top-0 z-20 h-30 w-30"
          color="#fff"
          strokeWidth="3"
          innerRadius="12"
        />
        <div className="absolute top-0 right-10 text-ms -rotate-8 w-fit  flex flex-col items-center justify-center sedgwick-ave-regular">
          <h3 className="bg-[#141414] py-2 px-4 rounded-xl -mb-1 w-fit text-center">
            A Few Projects
          </h3>
          <h3 className="bg-[#141414] py-2 px-3 rounded-xl w-fit text-center">
            Im Proud of.
          </h3>
          <div className="absolute z-10 top-5 -right-20 rotate-55">
            <Arrow direction="left" flipY="true" flipX="true" curves={1} size={200} />
          </div>
        </div>
      </div>
      <div className="w-full justify-center px-10">
        <div className="flex">
          {prjs.map((project, index) => (
            <Project2D
              key={project.name}
              name={project.name}
              repo={project.repo}
              link={project.link}
              disc={project.disc}
              demo={project.demo}
              icon={icons[index]}
            />
          ))}
          <Project2D
            name={"Beadazzle Studio"}
            repo={"//"}
            link={"//"}
            disc={
              "A fully funstional e-commerce website for a handmade bead charm business, built with React, Tailwind CSS, and Firebase."
            }
            demo={"//"}
            icon={faMoneyBill}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(Projects2D);
