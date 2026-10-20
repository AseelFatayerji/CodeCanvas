import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faCubes,
  faDatabase,
  faLaptopCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services2D({ isMobile }) {
  const root = useRef(null);

  const services = [
    {
      name: "Websites",
      icon: faLaptopCode,
      disc: "Scalable, and quick web apps with robust back-end architectures and user-friendly front-end interfaces.",
      color: "text-blue-300",
    },
    {
      name: "UI/UX",
      icon: faUikit,
      disc: "Simple, user-centered interfaces.",
      color: "text-[#C7FF2F]",
    },
    {
      name: "Apps",
      icon: faMobileScreenButton,
      disc: "Cross-platform and mobile apps with an emphasis on usability and maintainability.",
      color: "text-pink-300",
    },
    {
      name: "Database",
      icon: faDatabase,
      disc: "Database design, optimization, and administration experience.",
      color: "text-purple-300",
    },
    {
      name: "3D Modeling",
      icon: faCubes,
      disc: "Creatingcartoonish and low-poly assets for games, and interactive experiences.",
      color: "text-[#2F6BFF]",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(".service-title", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
      }).from(
        ".service-item",
        {
          y: 80,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.2",
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="Services"
      ref={root}
      className="w-screen p-10 flex justify-evenly select-none flex-col md:flex-row"
    >
      <div className="flex gap-2 justify-center md:flex-col md:justify-start">
        <h2 className="service-title text-center text-5xl md:text-9xl select-none">
          WHAT
        </h2>
        <h2 className="service-title text-center text-5xl md:text-9xl select-none">
          I DO
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        {services.map((service) => (
          <div className="service-item md:w-[20%]" key={service.name}>
            <div className="m-4 p-4 justify-center text-center">
              <FontAwesomeIcon
                icon={service.icon}
                className={`text-5xl mb-4 ${service.color}`}
              />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-neutral-500 text-pretty text-sm">
                {service.disc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services2D;