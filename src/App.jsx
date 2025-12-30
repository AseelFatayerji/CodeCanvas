import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import "./css/App.css";
import "./css/animated.css";

import { Hero, About, Contact, Projects, Services } from "./pages";
import Navbar from "./components/navbar";

import GlobalModel from "./components/GlobalModel";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");
      const zSpacing = 100;
      const totalScroll = sections.length * zSpacing * 50;

      sections.forEach((panel, i) => {
        gsap.set(panel, {
          z: -i * zSpacing,
          opacity: i === 0 ? 1 : 0,
          scale: 1,
        });
      });

      gsap.to(sections, {
        z: (i) => (sections.length - i) * zSpacing,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".scene",
          start: "top top",
          end: "+=" + totalScroll,
          scrub: 1,
          pin: true,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.3, max: 0.5 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const progress = self.progress;
            sections.forEach((panel, i) => {
              const panelProgress = 1 / sections.length;
              const start = i * panelProgress;
              const end =
                i === sections.length - 1 ? 1 : (i + 1) * panelProgress;

              if (progress >= start && progress <= end) {
                gsap.to(panel, {
                  opacity: 1,
                  display: "block",
                  pointerEvents: "auto",
                  overwrite: "auto",
                });
              } else {
                gsap.to(panel, {
                  opacity: 0,
                  display: "none",
                  pointerEvents: "none",
                  overwrite: "auto",
                });
              }
            });
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const sections = [Hero, About, Services, Projects, Contact];

  return (
    <main>
      <Navbar />
      <GlobalModel sectionCount={sections.length} />
      <div className="scene">
        {sections.map(
          (Component, i) => (
            (
              <section key={i} className="panel">
                <Component />
              </section>
            )
          )
        )}
      </div>
    </main>
  );
}

export default App;
