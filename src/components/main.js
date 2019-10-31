import React from "react";
import About from "./about";
import Skills from "./skills";
import Creating from "./creating";
import Streak from "./streak";
import Works from "./works";
import Contact from "./contact";
import Footer from "./footer";

class Main extends React.Component {
  render() {
    return (
      <main>
        {}
        <div className="container">
          {}
          <About></About>
          {}
        </div>
        {}
        {}
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#f3f3f5"
          }}
        >
          <div className="container py-4 pt-4">
            {}
            <Skills></Skills>
            {}
          </div>
        </div>
        {}
        {}
        <div className="container">
          {}
          <Creating></Creating>
          {}
        </div>
        {}
        {}
        <Streak></Streak>
        {}
        {}
        <div className="container">
          {}
          <Works></Works>
          {}
          <hr />
        </div>
        {}
        {}
        <Contact></Contact>
        {}
        <Footer></Footer>
        {}
      </main>
    );
  }
}

export default Main;
