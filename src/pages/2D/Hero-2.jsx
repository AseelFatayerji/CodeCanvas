import {
  faEarthAsia,
  faGlobe,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DotShape from "../../components/shapes/DotShape";
import HeroIMage from "../../components/HeroImage";

function Hero2D({ isMobile }) {
  return (
    <div id="Hero" className="pl-10 pt-33 flex h-screen w-screen border-b-2 border-slate-700">
      <div className="justify-center flex flex-col ">
        <div className="flex text-7xl font-bold text-pink-400 sedgwick-ave-regular ">
          <h2>HELLO, WORLD!</h2>
          <DotShape
            className="absolute w-56 h-40 rounded-[4rem] -rotate-5 ml-[33%] -mt-20"
            dot="#FB64B6"
            gap="16px"
          />
        </div>
        <div className="text-2xl md:text-4xl py-5 font-bold text-white">
          <div className="flex flex-row gap-8 ">
            <h1> I'M ASEEL</h1>
            <FontAwesomeIcon
              icon={faHashtag}
              className=" text-blue-300 rotate-20 text-[8rem]"
            />
          </div>
          <h1>A SOFTWARE DEV</h1>
        </div>
        <div className="flex">
          <div className="text-lg -rotate-4 w-fit  flex flex-col items-center justify-center sedgwick-ave-regular">
            <h3 className="bg-purple-400 p-3 rounded-xl -mb-1 w-fit text-center">
              I design beautiful & functional web apps
            </h3>
            <h3 className="bg-purple-400 p-3 rounded-xl w-fit text-center">
              that provide seamless UI/UX.
            </h3>
          </div>
          <div className="flex items-center ml-6 mt-18 gap-2 text-white">
            <FontAwesomeIcon icon={faEarthAsia} className="text-4xl" />
            <div className="text-xs">
              <h4>Based in Lebanon </h4>
              <h4>Working World Wide</h4>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="hidden md:block md:w-1/2 pb-10 w-[50%] absolute right-0 -z-1">
            <HeroIMage />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero2D;
