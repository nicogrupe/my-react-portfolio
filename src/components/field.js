import React from "react";

class Field extends React.Component {
  render() {
    return (
      <blockquote className="blockquote bq-warning mb-4">
        <div className="row">
          {" "}
          <i
            className="fas fa-briefcase fa-x mb-1 mr-3 ml-3"
            aria-hidden="true"
          />
          <h5 className="font-weight-bold mb-3">Senior developer</h5>
        </div>
        <p className="font-weight-bold ml-1 dark-grey-text mb-2">
          July, 2013 - Present (4 years)
        </p>
        <p className="mb-0 ml-1 light-grey-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </blockquote>
    );
  }
}

export default Field;
