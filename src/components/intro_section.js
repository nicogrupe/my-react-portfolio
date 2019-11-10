import React from "react";
import IntroInfo from "./intro_info";
import '../App.scss';

class IntroSection extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="view jarallax"
        style={{
          backgroundImage:
            'url("https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg")',
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
