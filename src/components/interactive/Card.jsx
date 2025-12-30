import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { delay } from "motion";
import { useEffect, useState } from "react";

function Card(prop) {
  const [wait, setWait] = useState(false);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setWait(true);
      }, 1000);
    };
    delay();
    return () => clearTimeout(delay());
  }, [delay]);
  return prop.img && !prop.text ? (
    <motion.div
      whileHover={{ scale: 1.3 }}
      drag
      dragConstraints={prop.ref}
      dragElastic={1}
      className={`absolute text-5xl cursor-grab active:cursor-grabbing`}
      style={prop.style}
      // animate={wait ? prop.style : {}}
      // transition={{
      //   type: "spring",
      //   stiffness: 150,
      //   damping: 20,
      // }}
    >
      <FontAwesomeIcon icon={prop.img} />
    </motion.div>
  ) : (
    <motion.div
      whileHover={{ scale: 1.3 }}
      drag
      dragConstraints={prop.ref}
      dragElastic={1}
      className="absolute px-4 py-4 text-xl text-center rounded-full ring-gray-700 font-extralight bg-[#323661] w-fit h-fit cursor-grab active:cursor-grabbing"
      style={prop.style}
    >
      {prop.text}
    </motion.div>
  );
}

export default Card;
