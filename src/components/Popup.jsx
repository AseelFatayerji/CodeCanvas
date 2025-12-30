import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function Popup({ msg }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      {msg == "Success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative max-w-4xl  border text-left border-white/10 shadow-sm rounded-2xl bg-linear-to-l from-[#06091f] to-[#161a31]"
        >
          <div className="px-10 py-5 text-left space-y-5 bg-linear-to-b from-lime-600 to-lime-700 rounded-2xl">
            <h2 className="text-4xl"><FontAwesomeIcon icon={faCircleCheck}/>Success - Everything went smoothly!</h2>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative max-w-4xl  border text-left border-white/10 shadow-sm rounded-2xl bg-linear-to-l from-[#06091f] to-[#161a31]"
        >
          <div className="px-10 py-5 text-left bg-linear-to-b from-red-800 to-red-950 rounded-2xl">
            <h2 className="text-4xl"><FontAwesomeIcon icon={faCircleExclamation}/> Error - Something went wrong.</h2>
          </div>
        </motion.div>
      )}
    </div>
  );
}
export default Popup;
