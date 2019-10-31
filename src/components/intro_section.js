import React from "react";
import IntroInfo from "./intro_info";

class IntroSection extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="view jarallax"
        style={{
          backgroundImage:
            'url("https://mdbootstrap.com/img/Photos/Others/forest1.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="mask rgba-white-strong">
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="row smooth-scroll">
              <div className="col-md-12 pt-3">
                <IntroInfo></IntroInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroSection;
