import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import "./css/animation.css";
import "./css/backgrounds.css";
import { Home, About, Contact, Gallery, Projects, Services } from "./pages";
import Navbar from "./components/navbar";

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
