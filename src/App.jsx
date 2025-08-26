import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import "./css/animation.css";
import "./css/backgrounds.css";
import "./css/shapes.css";
import { Home, About3D, Contact3D, Gallery3D, Projects3D, Services3D } from "./pages";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="bg-slate">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="3D/About" element={<About3D />} />
        <Route path="3D/Services" element={<Services3D />} />
        <Route path="3D/Gallery" element={<Gallery3D />} />
        <Route path="3D/Projects" element={<Projects3D />} />
        <Route path="3D/Contact" element={<Contact3D />} />
      </Routes>
    </main>
  );
}

export default App;
