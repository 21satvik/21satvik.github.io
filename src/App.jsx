import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./global.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Impact from "./pages/Impact.jsx";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/work"     element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/impact"      element={<Impact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}