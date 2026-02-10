import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState } from "react";

import "./css/App.css";
import "./css/animated.css";

import { Hero, About, Contact, Projects, Services } from "./pages";
import Navbar from "./components/navbar";

import GlobalModel from "./components/GlobalModel";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [modelReady, setModelReady] = useState(false);
  const sections = [Hero, About, Services, Projects, Contact];
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });
  useLayoutEffect(() => {
    if (isMobile) {
      setModelReady(true);
      gsap.set(".panel", {
        clearProps: "all",
        opacity: 1,
        display: "block",
        pointerEvents: "auto",
      });

      ScrollTrigger.getAll().forEach((st) => st.kill());
      return;
    }

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      const zSpacing = 100;
      const totalScroll = panels.length * zSpacing * 50;

      panels.forEach((panel, i) => {
        gsap.set(panel, {
          z: -i * zSpacing,
          opacity: i === 0 ? 1 : 0,
        });
      });

      gsap.to(panels, {
        z: (i) => (panels.length - i) * zSpacing,
        ease: "none",
        scrollTrigger: {
          trigger: ".scene",
          start: "top top",
          end: "+=" + totalScroll,
          scrub: 1,
          pin: true,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.3, max: 0.5 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const step = 1 / panels.length;

            panels.forEach((panel, i) => {
              const start = i * step;
              const end = i === panels.length - 1 ? 1 : (i + 1) * step;

              gsap.to(panel, {
                opacity: progress >= start && progress <= end ? 1 : 0,
                display:
                  progress >= start && progress <= end ? "block" : "none",
                pointerEvents:
                  progress >= start && progress <= end ? "auto" : "none",
                overwrite: "auto",
              });
            });
          },
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main>
      <Navbar />
      <GlobalModel
        sectionCount={sections.length}
        isMobile={isMobile}
        onReady={() => setModelReady(true)}
      />
      <div className="scene">
        {sections.map((Component, i) => (
          <section key={i} className="panel">
            <Component modelReady={modelReady} isMobile={isMobile} />
          </section>
        ))}
      </div>
    </main>
  );
}

export default App;
