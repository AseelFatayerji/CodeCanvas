import HeroText from "../components/HeroText";
import ParallaxBg from "../components/parallax/ParallaxBg";

function Hero({ modelReady, isMobile }) {
  return (
    <div
      id="Hero"
      className="relative flex justify-center md:min-h-screen md:justify-start bg-black/30"
    >
      {modelReady && (
        <div className="relative overflow-hidden">
          {isMobile && <ParallaxBg isMobile={isMobile} />}
          <HeroText modelReady={modelReady} />
        </div>
      )}
    </div>
  );
}

export default Hero;
