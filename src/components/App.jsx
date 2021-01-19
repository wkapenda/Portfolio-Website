import React, { useState } from "react";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";


function App() {

  return (

    <div className="container">

    <Header />
    <Home />
    <Skills />
    <About />
    <Projects />







    
      {/* <div className="heading">
        <h1>To-Do List</h1>
      </div> */}

  </div>
  );
}

export default App;
