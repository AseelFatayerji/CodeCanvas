import { useMediaQuery } from "react-responsive";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import ParallaxS from "../components/parallax/ParrallaxService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faDatabase,
  faLaptopCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

function Services() {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false });

  const duration = 1.2;
  const ease = "easeInOut";
  const services = [
    {
      name: "Web Development",
      icon: faLaptopCode,
      disc: "With more than 5 years of full-stack experience I create scalable, and quick web apps with robust back-end architectures and user-friendly front-end interfaces.",
    },
    {
      name: "UI/UX",
      icon: faUikit,
      disc: "I have 2 years of practical experience and formal UI/UX training to support my design of simple, user-centered interfaces.",
    },
    {
      name: "App Development",
      icon: faMobileScreenButton,
      disc: "With 3 years of experience as a self-taught developer I create top-notch cross-platform and mobile apps with an emphasis on usability and maintainability.",
    },
    {
      name: "Database Management",
      icon: faDatabase,
      disc: "I guarantee that your data is organized, safe, and extremely effective thanks to my 5 years of self taught of database design, optimization, and administration experience.",
    },
    {
      name: "3D Modeling",
      icon: faCubes,
      disc: "With 3 years of experience and self-taught 3D modeling skills, my area of expertise is producing cartoonish and low-poly assets for games, and interactive experiences.",
    },
  ];
  return (
    <section
      ref={sectionRef}
      id="Services"
      className="w-full min-h-screen text-center inset-0 relative"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isInView ? "0%" : "-100%" }}
        transition={{ duration, ease }}
        className="relative z-10"
      >
        <h2 className="text-center text-3xl md:text-5xl pt-16 select-none">Services</h2>
        <div className="flex md:justify-evenly w-full gap-10 md:px-10 px-5 md:py-10 py-5 select-none">
          <div className="w-[50%] space-y-5">
            {services.map((items) => {
              return (
                <div className="card flex-1 grow ml-10" key={items.name}>
                  <FontAwesomeIcon icon={items.icon} />
                  <div className="card_content py-5 px-4">
                    <p className="m-0 md:text-2xl text-xl text-gray-300 font-bold">
                      {items.name}
                    </p>
                    <p className="md:text-sm text-xs text-gray-400 text-pretty">
                      {items.disc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {isMobile ? <></> : <div className="flex-1"></div>}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
