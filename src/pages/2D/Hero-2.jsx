import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  faEarthAsia,
  faGlobe,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DotShape from "../../components/shapes/DotShape";
import Decor from "../../components/shapes/Decor";
import BouncyView from "../../components/interactive/BouncyText";
import HeroIMage from "../../components/2D items/HeroImage";

function Hero2D({ isMobile }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div
      id="Hero"
      ref={root}
      className="pl-5 pt-33 flex h-screen w-screen border-b-2 border-slate-700 md:pl-10"
    >
      <div className="justify-center flex flex-col ">
        <div className="flex text-7xl font-bold text-pink-400 sedgwick-ave-regular ">
          <h2 className="hero-line">
            <BouncyView text="HELLO, WORLD!" />
          </h2>
          {!isMobile && (
            <Decor
              className="absolute -rotate-5 ml-[33%] -mt-20"
              loop="bob"
              delay={0.7}
              duration="5s"
            >
              <DotShape
                className="w-56 h-40 rounded-[4rem]"
                dot="#FB64B6"
                gap="16px"
              />
            </Decor>
          )}
        </div>
        <div className="text-lg md:text-4xl py-5 font-bold text-white">
          <div className="flex pl-6 md:pl-0 md:flex-row md:gap-8 w-full ">
            <h1 className="hero-line select-none text-center md:text-left"> I'M ASEEL</h1>
            {!isMobile && (
              <Decor
                className="rotate-20"
                loop="bob"
                delay={0.9}
                distance="12px"
              >
                <FontAwesomeIcon
                  icon={faHashtag}
                  className="text-blue-300 text-[8rem]"
                />
              </Decor>
            )}
          </div>
          <h1 className="hero-line relative z-20 pointer-events-none text-pretty select-none mt-4 text-center md:text-left">
            A SOFTWARE DEV
          </h1>
        </div>
        <div className="flex flex-col  md:flex-row">
          <div className="anim-bounce test-sm  -rotate-4 w-fit  flex flex-col items-center mt-5 justify-center sedgwick-ave-regular md:text-lg md:mt-0">
            <h3 className="bg-purple-400 p-3 rounded-xl -mb-1 w-fit text-center select-none">
              I design beautiful & functional web apps
            </h3>
            <h3 className="bg-purple-400 p-3 rounded-xl w-fit text-center select-none">
              that provide seamless UI/UX.
            </h3>
          </div>
          <div className="flex items-center justify-end mr-5 mt-18 gap-2 text-white anim-bob md:justify-start md:ml-6">
            <FontAwesomeIcon icon={faEarthAsia} className="text-4xl" />
            <div className="text-xs select-none">
              <h4>Based in Lebanon </h4>
              <h4>Working World Wide</h4>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="hidden md:block md:w-1/2 pb-10 w-[50%] absolute right-0 z-1 pointer-events-none">
            <HeroIMage />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero2D;
