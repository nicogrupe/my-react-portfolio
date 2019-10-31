import React from "react";

class Title extends React.Component {
  render() {
    return (
      <h2
        className="text-center text-uppercase my-5 pt-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        About <strong>me</strong>
      </h2>
    );
  }
}

export default Title;
