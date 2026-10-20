import axios from "axios";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Project2D from "../../components/2D items/Project-2";
import {
  faBookAtlas,
  faBurger,
  faCloudSun,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Ticks from "../../components/shapes/Ticks";
import Arrow from "../../components/shapes/Arrow";
import Decor from "../../components/shapes/Decor";

gsap.registerPlugin(ScrollTrigger);

const EXCLUDED = ["CodeCanvas", "Hotel Comission"];

function Projects2D({ isMobile }) {
  const [prjs, setPrjs] = useState([]);
  const [loading, setLoading] = useState(true);
  const grid = useRef(null);
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

  useLayoutEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      if (!cards.length) return;

      const box = grid.current.getBoundingClientRect();
      const centerX = box.left + box.width / 2;
      const topY = cards[0].getBoundingClientRect().top;

      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        gsap.set(card, {
          x: centerX - (r.left + r.width / 2),
          y: topY - r.top,
          rotation: gsap.utils.random(-12, 12),
          scale: 0.92,
        });
      });

      gsap.to(cards, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: grid.current,
          start: "top 80%",
          once: true,
        },
      });
    }, grid);

    return () => ctx.revert();
  }, [loading]);

  return (
    <section id="Projects" className="bg-pink-400 py-5 ">
      <div className="relative ">
        {!isMobile && (
          <>
            <motion.h2
              className="font-bold text-center text-3xl select-none mr-15 md:text-[6.5rem] md:block hidden "
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              SELECTED WORK
            </motion.h2>

            <Decor
              className="absolute right-[15%] top-0 z-20"
              loop="pulse"
              origin="15% 85%"
              min={0.55}
              duration="2.4s"
              inView
              delay={0.5}
            >
              <Ticks
                className="rotate-40 h-30 w-30"
                color="#fff"
                strokeWidth={3}
                innerRadius={12}
              />
            </Decor>
          </>
        )}

        <Decor
          className="absolute top-0 right-5 -rotate-8 w-fit scale-70 md:scale-100 md:right-10"
          loop="bob"
          inView
          delay={0.8}
          duration="4.5s"
        >
          <div className="relative flex flex-col items-center justify-center sedgwick-ave-regular">
            <h3 className="bg-[#141414] py-2 px-4 rounded-xl -mb-1 w-fit text-center">
              A Few Projects
            </h3>
            <h3 className="bg-[#141414] py-2 px-3 rounded-xl w-fit text-center">
              Im Proud of.
            </h3>
            <div className="absolute z-10 top-5 -right-20 rotate-55">
              <Arrow direction="left" flipY flipX curves={1} size={200} />
            </div>
          </div>
        </Decor>
      </div>

      <div className="w-full justify-center pt-10 md:px-10 md:pt-0">
        <div className="flex overflow-y-scroll justify-evenly" ref={grid}>
          {prjs.map((project, index) => (
            <div className="project-card" key={project.name}>
              <Project2D
                name={project.name}
                repo={project.repo}
                link={project.link}
                disc={project.disc}
                demo={project.demo}
                icon={icons[index]}
              />
            </div>
          ))}
          <div className="project-card">
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
      </div>
      {isMobile && (
        <motion.div
          className="w-full py-2 text-center overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="font-bold text-4xl select-none w-full"
            variants={{
              hidden: { x: -200, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            SELECTED WORK
          </motion.h2>
        </motion.div>
      )}
    </section>
  );
}

export default memo(Projects2D);
