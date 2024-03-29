import logo from "./logo.svg";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { About } from "./components/About";
import { AnimatePresence, animate, delay, motion } from "framer-motion";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    var urlActual = window.location.href;
    if (
      !urlActual.includes("projects") ||
      !urlActual.includes("home") ||
      !urlActual.includes("about")
    ) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
