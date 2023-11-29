import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <header className="navbarHeader">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Wesley H. Alcantara Silva
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
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
