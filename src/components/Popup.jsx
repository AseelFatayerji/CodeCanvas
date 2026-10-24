import { createPortal } from "react-dom";
import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const STATES = {
  Success: {
    icon: faCircleCheck,
    text: "Success - Everything went smoothly!",
    bg: "bg-[#C7FF2F]",
  },
  Error: {
    icon: faCircleExclamation,
    text: "Error - Something went wrong.",
    bg: "bg-pink-400",
  },
};

function Popup({ msg }) {
  const { icon, text, bg } = STATES[msg] ?? STATES.Error;

  return createPortal(
    <div
      role="alert"
      className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-black/60 p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: -1 }}
        className={`${bg} flex max-w-4xl items-center gap-4 rounded-lg border-4 border-black px-6 py-5 text-black shadow-[8px_8px_0_#000] md:px-10`}
      >
        <FontAwesomeIcon icon={icon} className="text-3xl md:text-4xl" />
        <h2 className="text-xl font-black md:text-4xl">{text}</h2>
      </motion.div>
    </div>,
    document.body,
  );
}

export default Popup;