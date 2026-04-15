import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Experience from "./component/Experience";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}