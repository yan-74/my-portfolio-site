import "./style.css";
import Navbar from "./components/NavBar";
import CSLanding from "./components/CSLanding";
import ArtLanding from "./components/ArtLanding";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cs" element={<CSLanding />} />
        <Route path="/art" element={<ArtLanding />} />
      </Routes>
    </div>
  );
}

export default App;