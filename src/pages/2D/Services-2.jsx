import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faCubes,
  faDatabase,
  faLaptopCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

function Services2D({ isMobile }) {
  const services = [
    {
      name: "Web Development",
      icon: faLaptopCode,
      disc: "Scalable, and quick web apps with robust back-end architectures and user-friendly front-end interfaces.",
    },
    {
      name: "UI/UX",
      icon: faUikit,
      disc: "Simple, user-centered interfaces.",
    },
    {
      name: "App Development",
      icon: faMobileScreenButton,
      disc: "Cross-platform and mobile apps with an emphasis on usability and maintainability.",
    },
    {
      name: "Database",
      icon: faDatabase,
      disc: "Database design, optimization, and administration experience.",
    },
    {
      name: "3D Modeling",
      icon: faCubes,
      disc: "Creatingcartoonish and low-poly assets for games, and interactive experiences.",
    },
  ];
  return (
    <div
      id="Services"
      className="w-screen p-10 flex justify-evenly select-none "
    >
      <div>
        <h2 className="text-center text-5xl md:text-9xl select-none">WHAT</h2>
        <h2 className="text-center text-5xl md:text-9xl select-none">I DO</h2>
      </div>
      <div className="flex">
        {services.map((service) => (
          <div className="w-[20%]" key={service.name}>
            <div className="m-4 p-4 justify-center text-center">
              <FontAwesomeIcon icon={service.icon} className="text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-pretty text-sm">
                {service.disc}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Services2D;
