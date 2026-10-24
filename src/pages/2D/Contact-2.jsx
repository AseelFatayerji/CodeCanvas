import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CV from "../../assets/Aseel Fatayerji - CV.pdf";
import {
  faPaperPlane,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Popup from "../../components/Popup";

const SOCIALS = [
  { icon: faEnvelope, label: "fatayerjiaseel@email.com" },

  {
    icon: faLinkedinIn,
    label: "linkedin.com/in/aseel-f-7a1b49235/",
    href: "https://www.linkedin.com/in/aseel-f-7a1b49235/",
  },
  {
    icon: faDownload,
    label: "Resume",
    href: CV,
  },
];

const container = {
  hidden: { x: -160, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.6,
      staggerChildren: 0.12,
    },
  },
};

const wipe = {
  hidden: { opacity: 0, clipPath: "inset(-30% 100% -30% -10%)" },
  visible: {
    opacity: 1,
    clipPath: "inset(-30% -10% -30% -10%)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rise = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fieldClass =
  "shadow-[4px_4px_0_#000] transition-[translate,box-shadow] duration-100 focus-within:translate-x-0.5 focus-within:translate-y-0.5 focus-within:shadow-[2px_2px_0_#000] text-start bg-white border-4 border-black rounded-lg p-2";
const legendClass =
  "px-2 text-sm font-bold bg-blue-300 border-2 border-black rounded-md";

function Contact2D({ isMobile }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", `${import.meta.env.VITE_form_token}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success" : "Error");
    setTimeout(() => setResult(""), 2000);
  };

  return (
    <section id="Contact" className="w-full h-fit">
      <motion.div
        className="relative z-10 flex flex-col md:flex-row "
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className=" md:w-full">
          <div className="flex gap-3 pl-5 px-3 pt-5 md:pt-10 lg:pl-16 lg:px-10 lg:pt-16">
            <div className="select-none md:w-[60%] lg:w-[80%]">
              <motion.h2
                variants={wipe}
                className="text-3xl md:text-5xl lg:text-6xl font-black leading-none"
              >
                LET'S CREATE
              </motion.h2>
              <motion.h2
                variants={wipe}
                className="sedgwick-ave-regular -rotate-3 text-xl md:text-4xl lg:text-5xl text-pink-400 underline decoration-4 underline-offset-8 mt-3 w-fit"
              >
                SOMETHING GREAT!
              </motion.h2>
            </div>
            <div>
              <motion.p
                variants={rise}
                className=" text-pretty select-none px-2 text-xs md:text-sm"
              >
                Have a project in mind? Let's bring your ideas to life.
              </motion.p>
              <ul className="space-y-3 py-4 md:pt-10">
                {SOCIALS.map((item) => (
                  <motion.li
                    variants={rise}
                    key={item.label}
                    className="flex items-center gap-3"
                  >
                    <span className="shadow-[3px_3px_0_#fff] flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-pink-400 text-black">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-xs md:text-sm"
                      />
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm  hover:underline"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-xs md:text-sm ">{item.label}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-300 h-fit text-[#141414] px-8 py-7 md:w-[45%] md:pl-[10%] md:pr-16 md:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
          <form className="w-full flex flex-col space-y-5" onSubmit={onSubmit}>
            <motion.span
              variants={rise}
              className="shadow-[3px_3px_0_#000] w-fit self-center select-none md:self-start rounded-lg border-4 border-black bg-blue-300 px-4 py-1 text-xs font-black tracking-widest"
            >
              CONTACT ME
            </motion.span>
            <div className="space-y-5">
              <motion.fieldset variants={rise} className={fieldClass}>
                <legend className={legendClass}>Email</legend>
                <input
                  name="email"
                  type="email"
                  className="w-full h-full outline-none text-lg bg-transparent placeholder:text-slate-600"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
              </motion.fieldset>
              <motion.fieldset variants={rise} className={fieldClass}>
                <legend className={legendClass}>Description</legend>
                <textarea
                  name="message"
                  placeholder="Project description"
                  className="w-full h-max outline-none text-lg bg-transparent placeholder:text-slate-600"
                  aria-label="Description"
                  required
                />
              </motion.fieldset>
            </div>
            <motion.div
              variants={rise}
              className="flex justify-center md:justify-start md:scale-100 scale-75"
            >
              <button
                type="submit"
                className="send shadow-[5px_5px_0_#fff] transition-[translate,box-shadow] duration-100 hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0_#fff] active:translate-x-1.25 active:translate-y-1.25 active:shadow-none bg-[#141414] text-white font-bold p-2 gap-2 flex items-center rounded-lg border-4 border-black overflow-hidden cursor-pointer outline-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                  </div>
                </div>
                <span>Send</span>
              </button>
            </motion.div>
          </form>
          {result == "" ? (
            <></>
          ) : (
            <Popup msg={result} closePreview={() => setHidden(false)} />
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact2D;
