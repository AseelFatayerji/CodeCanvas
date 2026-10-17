import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import Model from "../components/Computer";
import Socials from "../components/interactive/Socials";
import Popup from "../components/Popup";
import ParallaxC from "../components/parallax/ParrallaxContact";

function Contact({ isMobile }) {
  const [result, setResult] = useState("");
  const sectionRef = useRef(null);

  const duration = 1.2;
  const ease = "easeInOut";

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
    <section
      ref={sectionRef}
      id="Contact"
      className="w-full md:min-h-screen h-fit inset-0 relative p-10 bg-black/30"
    >
      {isMobile && <ParallaxC isMobile={isMobile} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, ease }}
        className="relative z-10"
      >
        <h2 className="text-center text-3xl md:text-5xl pt-22 pb-6 select-none">
          Contact
        </h2>
        {result == "" ? (
          <></>
        ) : (
          <Popup msg={result} closePreview={() => setHidden(false)} />
        )}
        <div
          className={
            isMobile
              ? "h-fit justify-self-center p-5 space-y-5"
              : "flex w-full h-fit gap-10  justify-center p-4"
          }
        >
          <form
            className="row-span-2 w-fit justify-center h-full flex-col space-y-5 py-5 grid-default-color"
            onSubmit={onSubmit}
          >
            <div className="space-y-5 ">
              <h2 className="md:text-5xl text-4xl md:text-start text-center">
                Get In Touch
              </h2>
              <div className="grow space-y-3">
                <fieldset className="text-start border-2 border-white rounded-lg p-2">
                  <legend className="px-1">Email</legend>
                  <input
                    name="email"
                    type="email"
                    className="w-full h-full outline-none text-lg"
                    placeholder="Enter your email"
                    required
                  />
                </fieldset>
                <fieldset className="text-start border-2 border-white rounded-lg p-2">
                  <legend className="px-1">Discription</legend>
                  <textarea
                    name="message"
                    placeholder="Project Discription"
                    className="w-full h-max outline-none text-lg"
                    required
                  />
                </fieldset>
              </div>
            </div>
            <div className="flex justify-center md:scale-100 scale-75">
              <button
                type="submit"
                className="send bg-[#5c33cc] text-white py-4 px-5 gap-2 flex items-center rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer active:scale-95 outline-none"
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </form>
          <div className="items-center space-y-5">
            {isMobile ? (
              <></>
            ) : (
              <div className="grid-special-color rounded-3xl">
                <Model
                  poseM={[0, -1, 0]}
                  poseD={[0, -1, 0]}
                  rotation={[0, 0, 0]}
                  scale={isMobile ? 1 : 4}
                />
              </div>
            )}
            <Socials />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
