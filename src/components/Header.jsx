import React, { Component, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";


function Header(){

  const scrollToTop = () => scroll.scrollToTop();

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  return(
  
    <nav class="Nav navbar navbar-light bg-light container-fluid sticky-top navbar-expand-lg">
      <Link
            className="logo navbar-brand btn"
            alt="Logo"
            onClick={scrollToTop}
            // type="button"
            
        >
        <img src={require("./images/wklogo.png")} class="wklogo"></img>
      </Link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" aria-expanded={isNavCollapsed ? true : false} aria-label="Toggle navigation" 
      onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span></button>
      <div className= {`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <Link
                className="nav-link btn"
                activeClass="active"
                to="section1"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                HOME
          </Link>
          </li>
          <li class="nav-item">
          <Link
                className="nav-link btn"
                activeClass="active"
                to="section2"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                SKILLS
          </Link>
          </li>
          <li class="nav-item">
          <Link
                className="nav-link btn"
                activeClass="active"
                to="section3"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                PROJECTS
          </Link>
          </li>
          <li class="nav-item">
          <Link
                className="nav-link btn"
                activeClass="active"
                to="section4"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                ABOUT
          </Link>
          </li>
          <li class="nav-item nav-btn">
          <Link
                className="nav-link btn btn-primary"
                type="button"
                // activeClass="active"
                to="section5"
                // spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT ME
          </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Header;