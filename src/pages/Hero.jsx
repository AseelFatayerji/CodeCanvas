import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";

function Hero() {
  return (
    <div className="flex justify-center md:justify-start min-h-screen overflow-hidden">
      <HeroText />
      <ParallaxBg />
      <figure className="absolute inset-0 w-[90vw] h-[100vw]"></figure>
    </div>
  );
}

export default Hero;
