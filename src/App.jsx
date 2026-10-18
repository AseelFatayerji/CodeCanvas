import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/App.css";
import "./css/animated.css";

import { Hero2D, Services2D, Projects2D, Contact2D, Banner } from "./pages";
import Navbar from "./components/navbar";

import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  const year = new Date().getFullYear();

  return (
    <main className="overflow-x-clip">
      <Navbar isMobile={isMobile} />

      <Hero2D isMobile={isMobile} />
      <Services2D isMobile={isMobile} />
      <div className="relative">
        <svg
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
          className="absolute -left-10 -top-10 -translate-y-1/2 -rotate-12 z-30 w-44 md:w-56"
        >
          <polygon
            points="125,45 141.82323793166384,62.21482129121056 165,55.7179676972449 170.9619407771256,79.03805922287441 194.28203230275508,85 187.78517870878943,108.17676206833615 205,125 187.78517870878943,141.82323793166384 194.2820323027551,165 170.9619407771256,170.9619407771256 165.00000000000003,194.28203230275508 141.82323793166387,187.78517870878943 125,205 108.17676206833617,187.78517870878943 85.00000000000001,194.2820323027551 79.03805922287444,170.96194077712562 55.717967697244916,165.00000000000003 62.214821291210576,141.8232379316639 45,125.00000000000001 62.214821291210555,108.17676206833617 55.71796769724487,85.00000000000006 79.03805922287441,79.03805922287441 84.99999999999997,55.717967697244916 108.1767620683361,62.214821291210576"
            className="fill-teal-300 stroke-black"
            strokeWidth="2"
            transform="translate(0 0) rotate(0 125 125) scale(1)"
          />
          <text
            x="125"
            y="127"
            textAnchor="middle"
            className="sedgwick-ave-regular fill-black"
            fontSize="40"
            fontWeight="900"
          >
            100%
          </text>
          <text
            x="125"
            y="156"
            textAnchor="middle"
            className="sedgwick-ave-regular fill-black"
            fontSize="26"
            fontWeight="900"
          >
            HUMAN
          </text>
        </svg>
        <FontAwesomeIcon
          icon={faAsterisk}
          className="absolute -rotate-10 -right-10 bottom-5 z-20 text-9xl text-blue-300"
        />
      </div>
      <Projects2D isMobile={isMobile} />
      <Contact2D isMobile={isMobile} />
      <Banner isMobile={isMobile} />
      <footer className="w-full h-20 bg-black/30 flex items-center justify-center">
        <p className="text-gray-400 text-sm">
          &copy; {year} Aseel Fatayerji. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
export default App;
