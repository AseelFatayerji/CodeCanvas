import { Html } from "@react-three/drei";
import Clock from "./clock";

function AboutText(props) {
  return (
    <Html>
      <div
        className={`inset-0 fixed text-white text-sm flex self-center justify-self-center ${
          props.screenSize ? "w-90 h-60 p-4" : "w-95 h-68 mb-37 p-3"
        }`}
      >
        <div>
          <img
            src="src\assets\backgrounds\character.png"
            className={`mb-2 rounded-lg h-50 w-45`}
          />
        </div>
        <div className="p-3 font-bold text-pretty w-full">
          I'm Aseel Fatayerji, an artist specializing in concept art, and 3D
          modeling. I create colorful worlds and unique characters, by blending
          traditional techniques with digital tools. Let’s collaborate to bring
          your vision to life!.
        </div>
      </div>
      <Clock size={props.screenSize}/>
    </Html>
  );
}

export default AboutText;
