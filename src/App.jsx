import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import { Hero } from "./pages";
import Navbar from "./components/navbar";

function App() {
  return (
      <main>
        <Navbar />
        <Hero />
        <section className="h-screen"></section>
      </main>
  );
}

export default App;
