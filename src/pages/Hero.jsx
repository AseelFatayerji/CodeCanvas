import HeroText from "../components/HeroText";

function Hero({ modelReady }) {
  return (
    <div
      id="Hero"
      className="flex justify-center md:justify-start min-h-screen relative bg-black/30"
    >
      {modelReady && (
        <div className="relative overflow-hidden">
          <HeroText modelReady={modelReady} />
        </div>
      )}
    </div>
  );
}

export default Hero;
