import "./css/App.css";
import "./css/animated.css";
import { Hero } from "./pages";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

function App() {
  return (
    <main > 
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects/>
    </main>
  );
}

export default App;
