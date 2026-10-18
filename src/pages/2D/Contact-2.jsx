import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CV from "../../assets/Aseel Fatayerji - CV.pdf";
import {
  faPaperPlane,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SOCIALS = [
  { icon: faEnvelope, label: "fatayerjiaseel@email.com" },

  {
    icon: faLinkedinIn,
    label: "linkedin.com/in/your-name",
    href: "https://www.linkedin.com/in/aseel-f-7a1b49235/",
  },
  {
    icon: faDownload,
    label: "Resume",
    href: CV,
  },
];

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
      <div className="relative z-10 flex flex-col md:flex-row ">
        <div className=" md:w-full">
          <div className="flex gap-2  px-10 pt-16 md:pl-16">
            <div className="select-none w-[80%]">
              <h2 className="text-5xl md:text-6xl font-black leading-none">
                LET'S CREATE
              </h2>
              <h2 className="sedgwick-ave-regular -rotate-3 text-4xl md:text-5xl text-pink-400 underline decoration-4 underline-offset-8 mt-3 w-fit">
                SOMETHING GREAT!
              </h2>
            </div>
            <div>
              <p className="text-sm text-pretty">
                Have a project in mind? Let's bring your ideas to life.
              </p>
              <ul className="space-y-3 pt-10">
                {SOCIALS.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white">
                      <FontAwesomeIcon icon={item.icon} className="text-sm" />
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-sm">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-300 h-fit text-slate-900 px-8 py-7 md:w-[45%] md:pl-[10%] md:pr-16 md:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
          <form
            className="w-full flex flex-col space-y-3"
            onSubmit={onSubmit}
          >
            <span className="w-fit self-center md:self-start rounded-full border-2 border-slate-900 px-4 py-1 text-xs font-bold tracking-widest">
              CONTACT ME
            </span>
            <div className="space-y-3">
              <fieldset className="text-start border-2 border-slate-900 rounded-lg p-2">
                <legend className="px-1">Email</legend>
                <input
                  name="email"
                  type="email"
                  className="w-full h-full outline-none text-lg bg-transparent placeholder:text-slate-700"
                  placeholder="Enter your email"
                  required
                />
              </fieldset>
              <fieldset className="text-start border-2 border-slate-900 rounded-lg p-2">
                <legend className="px-1">Discription</legend>
                <textarea
                  name="message"
                  placeholder="Project Discription"
                  className="w-full h-max outline-none text-lg bg-transparent placeholder:text-slate-700"
                  required
                />
              </fieldset>
            </div>
            <div className="flex justify-center md:justify-start md:scale-100 scale-75">
              <button
                type="submit"
                className="send bg-[#141414] text-white py-4 px-5 gap-2 flex items-center rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer active:scale-95 outline-none"
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
          {result == "" ? (
            <></>
          ) : (
            <Popup msg={result} closePreview={() => setHidden(false)} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact2D;
