import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="col-md-4 mb-5">
        {}
        <div className="card card-body hoverable">
          <i className="fas fa-laptop fa-3x mb-4" aria-hidden="true" />
          <h5 className="font-weight-bold text-uppercase mb-4">Freelancer</h5>
          <p className="dark-grey-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {}
      </div>
    );
  }
}

export default Card;
