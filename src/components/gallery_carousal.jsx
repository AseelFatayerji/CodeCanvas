import { Html } from "@react-three/drei";

function Carousal(props) {
  return (
    <Html>
      <div
        className={`inset-0 fixed text-white text-sm flex self-center justify-self-center ${
          props.screenSize ? "" : "mb-40 p-3"
        }`}
      >
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="src\assets\backgrounds\character.png"
            className={`rounded-lg ${
              props.screenSize ? "h-45 w-25" : "h-55 w-35 "
            }`}
          />
        </div>
      </div>
    </Html>
  );
}

export default Carousal;
