import { Html } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousal(props) {
  return (
    <Html>
      <div
        className={`inset-0 fixed text-white text-sm flex self-center justify-self-center ${
          props.screenSize ? "" : "mb-40 p-3"
        }`}
      >
        <div className="w-full h-full flex justify-evenly gap-5 items-center">
          <FontAwesomeIcon icon={faCircleArrowLeft} className="transition ease-in-out delay-50 text-3xl hover:text-sky-950"/>
          <img
            src="src\assets\backgrounds\character.png"
            className={`rounded-lg h-55 w-35`}
          />
          <FontAwesomeIcon icon={faCircleArrowRight} className="transition ease-in-out delay-50 text-3xl hover:text-sky-950" />
        </div>
      </div>
    </Html>
  );
}

export default Carousal;
