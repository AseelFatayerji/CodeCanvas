import { memo, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faCircleNotch,
  faCompassDrafting,
  faLaptopCode,
  faMagnifyingGlass,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Decor from "../../components/shapes/Decor";
import Squiggle from "../../components/shapes/Squiggle";
import DotShape from "../shapes/DotShape";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    title: "Discover",
    icon: faMagnifyingGlass,
    disc: "We talk about your goals, your users, and what the project needs to do.",
    bg: "bg-[#C7FF2F]",
    tilt: "-rotate-2 md:-rotate-3",
    offset: "",
  },
  {
    title: "Design",
    icon: faCompassDrafting,
    disc: "Wireframes and a clickable prototype, so you see it before it's built.",
    bg: "bg-[#75fffd]",
    tilt: "rotate-2",
    offset: "lg:mt-10",
  },
  {
    title: "Build",
    icon: faLaptopCode,
    disc: "Clean, responsive code with a solid back end behind it.",
    bg: "bg-pink-400",
    tilt: "-rotate-2",
    offset: "",
  },
  {
    title: "Launch",
    icon: faRocket,
    disc: "Testing, deployment, and support for tweaks after it goes live.",
    bg: "bg-white",
    tilt: "rotate-2 md:rotate-3",
    offset: "lg:mt-10",
  },
];

function Process2D({ isMobile }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        })
        .from(".process-title", {
          x: -200,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".process-step",
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
    <section
      id="Process"
      ref={root}
      className="relative w-full select-none px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8"
    >
      <h2 className="process-title text-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
        HOW I WORK
      </h2>

      <Decor
        className="absolute right-4 top-4 z-20 sm:right-[8%] sm:top-10"
        loop="rotate"
        delay={0.5}
        duration="6s"
        inView
        draggable={!isMobile}
      >
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="text-4xl text-pink-400 md:text-7xl"
        />
      </Decor>

      <Decor
        className="absolute left-[6%] top-24 z-20 hidden rotate-12 sm:block"
        loop="bob"
        delay={0.8}
        duration="4s"
        inView
        draggable={!isMobile}
      >
        <DotShape
          className="w-56 h-40 rounded-[4rem]"
          dot="#75fffd"
          gap="16px"
        />
      </Decor>

      <div className="mx-auto mt-10 grid max-w-sm grid-cols-1 gap-6 sm:mt-12 sm:max-w-3xl sm:grid-cols-2 sm:gap-8 lg:max-w-6xl lg:grid-cols-4 lg:gap-6">
        {STEPS.map((step, index) => (
          <div className={`process-step ${step.offset}`} key={step.title}>
            <div
              className={`${step.bg} ${step.tilt} h-full rounded-2xl p-4 text-black transition-transform duration-300 hover:rotate-0 hover:scale-105 sm:p-5`}
            >
              <div className="flex items-start justify-between">
                <span className="sedgwick-ave-regular text-4xl leading-none sm:text-5xl">
                  {index + 1}
                </span>
                <FontAwesomeIcon
                  icon={step.icon}
                  className="text-xl sm:text-2xl"
                />
              </div>
              <h3 className="sedgwick-ave-regular mt-3 text-xl sm:mt-4 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-pretty">{step.disc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(Process2D);
