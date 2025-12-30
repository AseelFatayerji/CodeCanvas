import { useEffect, useState } from "react";


export default function AboutText() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = `I'm Aseel Fatayerji, an artist specializing in concept art, and 3D modeling. I create colorful worlds and unique characters, blending traditional techniques with digital tools. Let’s collaborate to bring your vision to life!`;

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
    <>
      <div className="text-white text-sm flex gap-1">
        <div>
          <img
            src="src/assets/backgrounds/character.png"
            className="rounded-lg max-w-md h-auto w-48"
          />
        </div>
        <div className="font-bold w-80 text-wrap px-5 text-lg">
          <p>
            {displayedText}
            <span className="blinking-cursor"></span>
          </p>
        </div>
      </div>
    </>
  );
}

