import React, { useEffect, useState } from "react";
import "../../css/backgrounds.css";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = `Hi, I'm Aseel Fatayerji \nA Software Engineer Welcome to my website!`;

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
    <div className="h-screen w-screen flex flex-col justify-center temp ">
      <div className="h-screen w-[50%] flex flex-col justify-center  pl-20 box ">
        <p className="text-5xl h-72 font-bold w-[33rem] text-white text-pretty ">
          {displayedText}
          <span className="blinking-cursor"></span>
        </p>
        <div>SOCIALS</div>
      </div>
    </div>
  );
}
