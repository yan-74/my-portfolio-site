import "./style.css";
import Navbar from "./components/NavBar";
import CSLanding from "./components/CSLanding";
import ArtLanding from "./components/ArtLanding";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <main className={theme}>
      <ScrollToTop />
      <Navbar />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cs" element={<CSLanding />} />
        <Route path="/art" element={<ArtLanding />} />
      </Routes>
    </main>
  );
}

export default App;