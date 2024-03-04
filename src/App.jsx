import "./app.css";

import React from "react";
import About from "./componets/About.jsx";
import Projects from "./componets/Projects.jsx";
import Skills from "./componets/Skills.jsx";
import Testimonials from "./componets/Testimonials.jsx";
import Contact from "./componets/Contact.jsx";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font ">
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
