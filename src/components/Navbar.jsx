import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <h1>Wesley H. Alcantara Silva</h1>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className={
                currentPage === "/About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Work"
              className={
                currentPage === "/Work" ? "nav-link active" : "nav-link"
              }
            >
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
