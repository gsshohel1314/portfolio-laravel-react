import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Portfolio />
        <Resume />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;