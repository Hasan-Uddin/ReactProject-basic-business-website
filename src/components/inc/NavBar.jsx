import { React } from "react";
import { Link, useLocation as urlPath } from "react-router-dom";

function NavBar() {
  function _isActive(n = 0) {
    return currentPage() == n ? "active" : ""; //css class
  }

  const currentPage = () => {
    switch (urlPath().pathname) {
      case "/About":
        return 1;
      case "/Contact":
        return 2;
      default:
        return 0;
    }
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark  navbar-dark shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to="/">
            <img src="" alt="Logo-Here" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={"nav-link " + _isActive(0)}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className={"nav-link " + _isActive(1)}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className={"nav-link " + _isActive(2)}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                id="searchBar" //CSS specified, APP.CSS
                className="form-control  text-light me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
