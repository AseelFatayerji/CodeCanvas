import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";
import { Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<App />} />
      
      {/* <Route path="/3D/Hero" element={<App />} />
      <Route path="/3D/Hero" element={<App />} />
      <Route path="/3D/Hero" element={<App />} />
      <Route path="/3D/Hero" element={<App />} />
      <Route path="/3D/Hero" element={<App />} /> */}
    </Routes>
  </Router>,
);
