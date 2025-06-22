import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import Clock from "../functional/clock";

function AboutText(props) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = `I'm Aseel Fatayerji, an artist specializing in concept art, and 3D modeling.
I create colorful worlds and unique characters, blending traditional techniques with digital tools.
Let’s collaborate to bring your vision to life!`;

    let i = 0;
    let timeoutId;

    const type = () => {
      setDisplayedText(fullText.substring(0, i + 1));
      i++;
      if (i < fullText.length) {
        timeoutId = setTimeout(type, 35);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Html>
      <div className="inset-0 fixed text-white text-sm flex gap-3 self-center justify-self-center sm:w-90 sm:h-60 sm:p-4 md:w-l md:h-68 md:mt-5 lg:w-lg lg:max-h lg:px-7 lg:mb-64">
        <div>
          <img
            src="src/assets/backgrounds/character.png"
            className="rounded-lg max-w-md h-auto w-40"
          />
        </div>
        <div className="font-bold  w-full lg:px-5 lg:text-lg sm:text-s">
          <p>{displayedText}<span className="blinking-cursor"></span></p>
        </div>
      </div>
      <Clock size={props.screenSize} />
    </Html>
  );
}

export default AboutText;
