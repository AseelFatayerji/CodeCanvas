import { useAnimations, useGLTF } from "@react-three/drei";
import controller from "../assets/models/JoyStick.glb";
import { Html } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

function Carousal(props) {
  const ref = useRef();
  const { animations } = useGLTF(controller);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          actions["left"].play();
          break;
        case "ArrowRight":
          actions["right"].play();
          break;
        default:
          break;
      }
    };
    const handleKeyUp = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          actions["left"].stop();
          break;
        case "ArrowRight":
          actions["right"].stop();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <Html>
      <div
        className={`inset-0 fixed text-white text-sm flex self-center justify-self-center ${
          props.screenSize ? "" : "mb-40 p-3"
        }`}
      >
        <div className="w-full h-full flex justify-evenly gap-5 items-center">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="transition ease-in-out delay-50 text-3xl hover:text-sky-950"
          />
          <img
            src="src\assets\backgrounds\character.png"
            className={`rounded-lg h-55 w-35`}
          />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="transition ease-in-out delay-50 text-3xl hover:text-sky-950"
          />
        </div>
      </div>
    </Html>
  );
}

export default Carousal;
