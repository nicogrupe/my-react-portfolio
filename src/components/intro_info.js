import React from "react";

class IntroInfo extends React.Component {
  render() {
    return (
      <div className="white-text text-center pt-5">
        <h1 className="display-2 mb-4 dark-grey-text wow fadeIn">
          I am <strong>Nicolas Grupe</strong>
        </h1>
        <h5
          className="text-uppercase font-weight-bold wow fadeIn"
          data-wow-delay="0.4s"
        >
          <mark>Full stack developer</mark>
        </h5>
        <a
          href="#about"
          className="btn btn-floating btn-large wow fadeIn"
          data-wow-delay="0.4s"
          data-offset={100}
        >
          <i className="fas fa-angle-down" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default IntroInfo;
