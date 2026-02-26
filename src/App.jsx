import "./style.css";
import Navbar from "./components/NavBar";
import CSLanding from "./components/CSLanding";
import ArtLanding from "./components/ArtLanding";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cs" element={<CSLanding />} />
        <Route path="/art" element={<ArtLanding />} />
      </Routes>
    </main>
  );
}

export default App;