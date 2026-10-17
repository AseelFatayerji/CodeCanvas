import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/App.css";
import "./css/animated.css";

import { Hero2D } from "./pages";
import Navbar from "./components/navbar";

import GlobalModel from "./components/GlobalModel";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // const sections = [Hero2D];
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
 
  return (
    <main>
      <Navbar isMobile={isMobile} />
      {/* <div className="scene">
        {sections.map((Component, i) => (
          <section key={i} className="panel"/>
        ))}
      </div> */}
      <Hero2D isMobile={isMobile} />
    </main>
  );
}

export default App;
