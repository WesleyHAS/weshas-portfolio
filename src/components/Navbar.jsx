import React from "react";

function Navbar() {
  return (
    <header>
      <h1>Wesley H. Alcantara Silva</h1>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#about-me">About Me</a>
          </li>
          <li class="nav-item">
            <a href="#work">Work</a>
          </li>
          <li class="nav-item">
            <a href="#contact-me">Contact Me</a>
          </li>
          <li class="nav-item">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
