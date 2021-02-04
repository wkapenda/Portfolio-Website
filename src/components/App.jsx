import React, { useState } from "react";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {

  return (

    <div>
      <Header />
    <div className="container-fluid">
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />  
   </div>
      <Footer />
   </div>
  );
}

export default App;
