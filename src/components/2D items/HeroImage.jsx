import {
  faAsterisk,
  faCircleNotch,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Decor from "../shapes/Decor";
import DotShape from "../shapes/DotShape";
import TerminalBadge from "../shapes/TerminalBadge";
import Ticks from "../shapes/Ticks";
import Squiggle from "../shapes/Squiggle";

const PERSON_IMG = "src/assets/temp.png";

function HeroIMage() {
  return (
    <div className="relative flex h-screen min-h-112 w-[80] items-center justify-center overflow-clip">
      <motion.div
        className="absolute h-[90%] w-[77%] -rotate-8 rounded-[58%_42%_46%_54%/48%_52%_48%_52%] bg-[#AD8DFF]"
        initial={{ scale: 0.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          scale: { type: "spring", stiffness: 120, damping: 14 },
          opacity: { duration: 0.3 },
        }}
      />

      <Decor className="absolute rotate-45 right-25 top-25" loop="bob" delay={0.5}>
        <DotShape className="h-24 w-24" dot="#fff" dotSize="2px" gap="14px" />
      </Decor>
      <Decor
        className="absolute bottom-24 left-0 z-2"
        loop="bob"
        delay={0.6}
        duration="5s"
      >
        <DotShape className="h-28 w-27" dot="#2F6BFF" dotSize="2px" gap="14px" />
      </Decor>

      <div className="relative z-1 aspect-3/4 w-[150%] -top-5 ">
        <img src={PERSON_IMG} alt="" className="h-full w-full object-contain" />
      </div>

      <Decor
        className="absolute bottom-16 right-3 z-20 -rotate-6"
        loop="bob"
        delay={0.8}
        duration="4.5s"
      >
        <TerminalBadge className="w-64" />
      </Decor>

      <Decor
        className="absolute rotate-25 bottom-20 right-16 z-20"
        loop="rotate"
        delay={0.9}
      >
        <FontAwesomeIcon icon={faPlus} className="text-2xl text-[#FB64B6]" />
      </Decor>
      <Decor
        className="absolute rotate-25 left-16 top-1/3 z-20"
        loop="rotate"
        delay={1}
        duration="5s"
      >
        <FontAwesomeIcon icon={faCircleNotch} className="text-6xl text-white" />
      </Decor>
      <Decor
        className="absolute rotate-25 right-1/2 top-18 z-20"
        loop="rotate"
        delay={1.1}
        duration="3s"
      >
        <FontAwesomeIcon icon={faAsterisk} className="text-3xl text-white" />
      </Decor>

      <Decor
        className="absolute left-[25%] rotate-270 top-[20%] z-20"
        loop="bounce"
        delay={1.2}
      >
        <Ticks className="h-16 w-16" color="#2F6BFF" />
      </Decor>
      <Decor
        className="absolute right-22 top-[58%] z-20"
        loop="bounce"
        delay={1.3}
        duration="2.8s"
      >
        <Ticks className="h-12 w-12" color="#75fffd" />
      </Decor>

      <Decor
        className="absolute right-12 rotate-45 top-16 z-20"
        loop="bob"
        delay={1.4}
        duration="3.5s"
      >
        <Squiggle className="h-6 w-14" color="#FB64B6" />
      </Decor>
      <Decor
        className="absolute right-22 -rotate-45 top-1/2 z-20"
        loop="bob"
        delay={1.5}
        duration="4.2s"
      >
        <Squiggle className="h-6 w-14" color="#fff" />
      </Decor>
    </div>
  );
}

export default HeroIMage;