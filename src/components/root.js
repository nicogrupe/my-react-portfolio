import React from "react";
import Header from "./header";
import Main from "./main";

class Root extends React.Component {
  render() {
    return (
      <div>
        {}
        <Header></Header>
        {}
        {}
        <Main></Main>
        {}
        {}
        <div className="dotted-scrollspy clearfix d-none d-sm-block">
          <ul className="nav smooth-scroll flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <span />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <span />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <span />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">
                <span />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <span />
              </a>
            </li>
          </ul>
        </div>
        {}
        {}
        {}
        {}
        {}
      </div>
    );
  }
}

export default Root;
