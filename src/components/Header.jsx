import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import * from 'react-router';


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const sign = "<Portfolio />";
    return (

      <nav class="Nav navbar navbar-light bg-light container-fluid sticky-top navbar-expand-lg">
      <Link
            className="logo navbar-brand"
            alt="Logo"
            onClick={this.scrollToTop}
        >
        {sign}
      </Link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <Link
                className="nav-link"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
          </Link>
          </li>
          <li class="nav-item">
          <Link
                className="nav-link"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SKILLS
          </Link>
          </li>
          <li class="nav-item">
          <Link
                className="nav-link"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PROJECTS
          </Link>
          </li>
          <li class="nav-item">
          <Link
                className="nav-link"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
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
                spy={true}
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
}