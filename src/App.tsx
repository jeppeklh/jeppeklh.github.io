import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Typewriter from "./components/TypeWriter";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
import GotorzProject from "./pages/GotorzProject";
import ScrollToTop from "./components/ScrollToTop";

function BgShapes() {
  return (
    <div className="bg-shapes">
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />
    </div>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    const st = location.state as { scrollTo?: string } | null;
    if (st?.scrollTo) {
      // wait for DOM/layout
      setTimeout(() => {
        const el = document.getElementById(st.scrollTo!);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        // reflect hash in the URL
        history.replaceState(null, "", `/#${st.scrollTo}`);
      }, 0);
    }
  }, [location.state]);

  return (
    <>
      <BgShapes />
      <Header />
      <Typewriter />
      <main className="container">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-3 bg-dark">
        <p className="mb-0" style={{ color: "#ff4c4c" }}>
          &copy; {new Date().getFullYear()} jeppeklh
        </p>
      </footer>
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projekter/rejsebooking"
          element={
            <>
              <BgShapes />
              <Header />
              <GotorzProject />
              <footer className="text-center py-3 bg-dark">
                <p className="mb-0" style={{ color: "#ff4c4c" }}>
                  &copy; {new Date().getFullYear()} jeppeklh
                </p>
              </footer>
            </>
          }
        />
      </Routes>
    </>
  );
}
