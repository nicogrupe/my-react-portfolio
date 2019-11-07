import React from "react";

class DevelopmentSkills extends React.Component {
  render() {
    return (
      <div
        className="col-lg-5 offset-lg-1 col-md-12 mb-4 wow fadeIn"
        data-wow-delay="0.4s"
      >
        
        <h2
          className="text-center text-uppercase my-5 pt-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          Development <strong>skills</strong>
        </h2>
        
        <p
          className="black-text text-uppercase font-weight-bold wow fadeIn"
          align="justify"
        >
          Java Script
        </p>
        <div className="md-progress wow fadeIn">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: "90%"
            }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <p
          className="black-text text-uppercase font-weight-bold pt-3 wow fadeIn"
          align="justify"
        >
          CSS3
        </p>
        <div className="md-progress wow fadeIn">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: "65%"
            }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <p
          className="black-text text-uppercase font-weight-bold pt-3 wow fadeIn"
          align="justify"
        >
          HTML5
        </p>
        <div className="md-progress wow fadeIn">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: "75%"
            }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <p
          className="black-text text-uppercase font-weight-bold pt-3 wow fadeIn"
          align="justify"
        >
          Bootstrap
        </p>
        <div className="md-progress wow fadeIn">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: "45%"
            }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <p
          className="black-text text-uppercase font-weight-bold pt-3 wow fadeIn"
          align="justify"
        >
          SOLIDITY
        </p>
        <div className="md-progress wow fadeIn">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: "53%"
            }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    );
  }
}

export default DevelopmentSkills;
