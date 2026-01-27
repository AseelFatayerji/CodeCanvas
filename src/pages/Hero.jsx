import HeroText from "../components/HeroText";

function Hero({ modelReady }) {
  return (
    <div
      id="Hero"
      className="flex justify-center md:justify-start min-h-screen relative bg-black/30"
    >
      <HeroText modelReady={modelReady} />
    </div>
  );
}

export default Hero;
