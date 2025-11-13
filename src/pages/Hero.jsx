import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";

function Hero() {
  return (
    <div className="flex justify-center md:justify-start min-h-screen overflow-hidden">
      <HeroText />
      <ParallaxBg />
    </div>
  );
}

export default Hero;
