import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from "../../assets/Aseel Fatayerji - CV.pdf";

function Socials() {
  return (
    <div className="flex items-center px-4 gap-4 grid-default-color">
      <button
        className="flex cursor-pointer select-none p-2 rounded-xl w-18 bg-[#323661] text-white justify-center items-center md:scale-100 scale-75  hover:w-60 hover:rounded-lg ease-in duration-300"
        onClick={() =>
          window.open("hhttps://github.com/AseelFatayerji", "_blank")
        }
      >
        <FontAwesomeIcon icon={faGithub} className="text-5xl px-2 ml-1" />
        <span className=" text-white overflow-hidden text-center w-fit ml-1 p-0 hover:visible">
          AseelFatayerji
        </span>
      </button>
      <button
        className="flex cursor-pointer select-none p-2 rounded-xl w-18 bg-[#323661] text-[#3cb3eb] justify-center items-center md:scale-100 scale-75  hover:w-50 hover:rounded-lg ease-in duration-300"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/aseel-f-7a1b49235/",
            "_blank"
          )
        }
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-5xl px-2 ml-1" />

        <span className=" text-white overflow-hidden text-center w-fit ml-1 p-0 hover:visible">
          in/aseel-f
        </span>
      </button>
      <a href={CV} download="Aseel Fatayerji CV" target="_blank">
        <div className="flex cursor-pointer select-none p-2 rounded-xl w-18 text-lime-300 bg-[#323661] justify-center items-center  md:scale-100 scale-75 hover:w-50 hover:rounded-lg ease-in duration-300">
          <FontAwesomeIcon icon={faDownload} className="text-5xl px-2 ml-1" />
          <span className=" text-white overflow-hidden text-left w-fit ml-1 p-0 hover:visible">
            Résumé
          </span>
        </div>
      </a>
    </div>
  );
}
export default Socials;
