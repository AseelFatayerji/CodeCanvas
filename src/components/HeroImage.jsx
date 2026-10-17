import {
  faAsterisk,
  faCircleNotch,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DotShape from "./shapes/DotShape";
import TerminalBadge from "./shapes/TerminalBadge";
import Ticks from "./shapes/Ticks";
import Squiggle from "./shapes/Squiggle";


const PERSON_IMG = "src/assets/temp.png";

function HeroIMage() {
  return (
    <div className="relative flex h-screen min-h-112 w-[80] items-center justify-center overflow-clip">
      <div className="absolute h-[90%] w-[77%] -rotate-8 rounded-[58%_42%_46%_54%/48%_52%_48%_52%] bg-[#AD8DFF]" />

      <DotShape
        className="absolute rotate-45 right-25 top-25 h-24 w-24"
        dot="#fff"
        dotSize="2px"
        gap="14px"
      />
      <DotShape
        className="absolute bottom-24 left-0 h-28 w-27 z-2"
        dot="#2F6BFF"
        dotSize="2px"
        gap="14px"
      />

      <div className="relative z-1 aspect-3/4 w-[150%] -top-5 ">
        <img src={PERSON_IMG} alt="" className="h-full w-full object-contain" />
      </div>

      <TerminalBadge className="absolute bottom-16 right-3 z-20 w-64 -rotate-6 " />

      <FontAwesomeIcon icon={faPlus} className="absolute rotate-25 bottom-20 right-16 z-20 text-2xl text-[#FB64B6]" />
      <FontAwesomeIcon icon={faCircleNotch} className="absolute rotate-25 left-16 top-1/3 z-20 text-6xl text-white" />
      <FontAwesomeIcon icon={faAsterisk} className="absolute rotate-25  right-1/2 top-18 z-20 text-3xl text-white" />

      <Ticks className="absolute left-[25%] rotate-270 top-[20%] z-20 h-16 w-16" color="#2F6BFF" />
      <Ticks className="absolute right-22 top-[58%] z-20 h-12 w-12" color="#75fffd" />
      <Squiggle className="absolute right-12 rotate-45 top-16 z-20 h-6 w-14" color="#FB64B6" />
      <Squiggle className="absolute right-22 -rotate-45 top-1/2 z-20  h-6 w-14" color="#fff" />
    </div>
  );
}

export default HeroIMage;
