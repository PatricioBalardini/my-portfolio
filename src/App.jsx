import ".App.css";

import React from "react";
import About from "./componets/About.jsx";
import Projects from "./componets/Projects.jsx";
import Skills from "./componets/Skills.jsx";
import Testimonials from "./componets/Testimonials.jsx";
import Contact from "./componets/Contact.jsx";
import Navbar from "./componets/Navbar.jsx";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font quicksand">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
