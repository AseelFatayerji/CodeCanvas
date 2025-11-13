import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import { Home} from "./pages";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="bg-slate">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
