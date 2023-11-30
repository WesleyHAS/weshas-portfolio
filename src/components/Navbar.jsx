import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");

    const handleNavbarToggle = () => {
      const targetId = navbarToggler.getAttribute("data-target");
      const targetElement = document.getElementById(targetId.slice(1));

      if (targetElement) {
        const expanded = targetElement.classList.contains("show");
        targetElement.classList.toggle("show", !expanded);
      }
    };

    navbarToggler.addEventListener("click", handleNavbarToggle);

    return () => {
      navbarToggler.removeEventListener("click", handleNavbarToggle);
    };
  }, []);

  return (
    <header className="navbarHeader">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Wesley H. Alcantara Silva
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${currentPage === "/" && "active"}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Work"
                  className={`nav-link ${currentPage === "/Work" && "active"}`}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Contact"
                  className={`nav-link ${
                    currentPage === "/Contact" && "active"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Resume"
                  rel="noopener noreferrer"
                  className={`nav-link ${
                    currentPage === "/Resume" && "active"
                  }`}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
