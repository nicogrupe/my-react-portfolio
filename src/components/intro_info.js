import React from "react";

class IntroInfo extends React.Component {
  render() {
    return (
      <div className="white-text text-center pt-5">
        <h1 className="display-2 mb-4 dark-grey-text wow pulse">
          I am <strong>Nicolás Grupe</strong>
        </h1>
        <h5
          className="text-uppercase font-weight-bold wow fadeInRight"
          data-wow-delay="0.4s"
        >
          <mark>Full stack developer</mark>
        </h5>

        <div className="text-center wow rollIn" 
          id="img-profile-div"
          data-wow-delay="0.6s">
          <img
            id="img-profile"
            src="./img/profile.jpg"
            className="img-fluid "
            alt=""
          />
        </div>

        <a
          href="#about"
          id="to-about"
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
