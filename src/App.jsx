import "./css/App.css";
import { Hero } from "./pages";
import Navbar from "./components/navbar";
import About from "./pages/About";

function App() {
  return (
      <main>
        <Navbar />
        <Hero />
        <About/>
      </main>
  );
}

export default App;
