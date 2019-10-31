import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Nicolas Grupe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" data-offset={100}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" data-offset={100}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works" data-offset={100}>
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" data-offset={100}>
                  Contact
                </a>
              </li>
            </ul>
            {}
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com">
                  <i className="fab fa-facebook-f light-green-text-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com">
                  <i className="fab fa-twitter light-green-text-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com">
                  <i className="fab fa-instagram light-green-text-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
