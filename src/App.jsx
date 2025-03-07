import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/home";
import Services from "./screens/services";
import Gallery from "./screens/gallery";
import Projects from "./screens/projects";
import Contact from "./screens/contact";
import Navbar from "./assets/navbar";
import About from "./screens/about";

function App() {
  return (
    <main className="bg-slate">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
