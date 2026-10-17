import axios from "axios";
import { memo, useEffect, useState } from "react";
import Project2D from "../../components/Project-2";
import {
  faBookAtlas,
  faBurger,
  faCloudSun,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

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
    <section id="Projects" className="bg-pink-400">
      <h2 className=" font-bold text-center text-3xl select-none sm:px-10 md:text-8xl md:pt-10 md:pl-20 lg:px-15">
        SELECTED WORK
      </h2>
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
              disc={"A fully funstional e-commerce website for a handmade bead charm business, built with React, Tailwind CSS, and Firebase."}
              demo={"//"}
              icon={faMoneyBill}
            />
        </div>
      </div>
    </section>
  );
}

export default memo(Projects2D);
