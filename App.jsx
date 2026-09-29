import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavComponen from "./components/header.jsx";
import FooterComponen from "./components/footer.jsx";

import Home from "./pagess/home.jsx";
import About from "./pagess/about.jsx";
import Education from "./pagess/education.jsx";
import Skills from "./pagess/skill.jsx";
import Contact from "./pagess/contact.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="website">

        <NavComponen />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <FooterComponen />

      </div>
    </BrowserRouter>
  );
}

export default App;