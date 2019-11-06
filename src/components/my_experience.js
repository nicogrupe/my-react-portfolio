import React from "react";

class MyExperience extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
        
        <h2
          className="text-center text-uppercase my-5 pt-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          My <strong>experience</strong>
        </h2>
        
        <blockquote className="blockquote bq-primary mb-4">
          <div className="row">
            {" "}
            <i
              className="fas fa-briefcase fa-x mb-1 mr-3 ml-3"
              aria-hidden="true"
            />
            <h5 className="font-weight-bold mb-3">Full Stack Developer</h5>
          </div>
          <p className="font-weight-bold ml-1 dark-grey-text mb-2">
            April, 2019 - October 2019 (7 months)
          </p>
          <p className="mb-0 ml-1 light-grey-text">
            Checkbox Inovations.{" "}
          </p>
        </blockquote>

        <blockquote className="blockquote bq-primary mb-4">
          <div className="row">
            {" "}
            <i
              className="fas fa-briefcase fa-x mb-1 mr-3 ml-3"
              aria-hidden="true"
            />
            <h5 className="font-weight-bold mb-3">Full Stack Developer</h5>
          </div>
          <p className="font-weight-bold ml-1 dark-grey-text mb-2">
            March 2019 - Present (8 months) 
          </p>
          <p className="mb-0 ml-1 light-grey-text">
            Balloon Storage Dapp (Blockchain).{" "}
          </p>
        </blockquote>

        <blockquote className="blockquote bq-primary mb-4">
          <div className="row">
            {" "}
            <i
              className="fas fa-briefcase fa-x mb-1 mr-3 ml-3"
              aria-hidden="true"
            />
            <h5 className="font-weight-bold mb-3">Developer Pasant</h5>
          </div>
          <p className="font-weight-bold ml-1 dark-grey-text mb-2">
            October 2014 (1 Month)
          </p>
          <p className="mb-0 ml-1 light-grey-text">
            Clarika.{" "}
          </p>
        </blockquote>
      </div>
    );
  }
}

export default MyExperience;
