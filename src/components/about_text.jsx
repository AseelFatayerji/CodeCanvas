import { Html } from "@react-three/drei";

function AboutText(props) {
  return (
    <Html>
      <div
        className={`inset-0 fixed text-white text-sm flex self-center justify-self-center ${
          props.screenSize ? "w-80 h-60 p-2" : "w-95 h-68 mb-40 p-3"
        }`}
      >
        <div className="w-full h-full ">
          <div className="w-full flex justify-center items-center">
            <img
              src="src\assets\backgrounds\character.png"
              className={`mb-2 rounded-full ${
                props.screenSize ? "h-25 w-20" : "h-30 w-25 "
              }`}
            />
          </div>
          <div className="text-center font-bold text-pretty w-full">
            I'm Aseel Fatayerji, an artist specializing in concept art, and 3D
            modeling. I create colorful worlds and unique characters, by
            blending traditional techniques with digital tools. Let’s
            collaborate to bring your vision to life!.
          </div>
        </div>
      </div>
    </Html>
  );
}

export default AboutText;
