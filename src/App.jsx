import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div class="absolute h-full overflow-y-auto overflow-x-hidden items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <main className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
