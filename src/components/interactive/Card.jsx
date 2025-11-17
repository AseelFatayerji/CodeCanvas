import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function Card(prop) {
  return prop.img && !prop.text ? (
    <motion.div
      whileHover={{ scale: 1.5 }}
      drag
      dragConstraints={prop.ref}
      dragElastic={1}
      className={`absolute text-5xl cursor-grab active:cursor-grabbing`}
      style={prop.style}
    >
      <FontAwesomeIcon icon={prop.img} />
    </motion.div>
  ) : (
    <motion.div
      whileHover={{ scale: 1.5 }}
      drag
      dragConstraints={prop.ref}
      dragElastic={1}
      className="absolute px-1 py-4 text-xl text-center rounded-full ring-gray-700 font-extralight bg-[#323661] w-48 h-fit cursor-grab active:cursor-grabbing"
      style={prop.style}
    >
      {prop.text}
    </motion.div>
  );
}

export default Card;
