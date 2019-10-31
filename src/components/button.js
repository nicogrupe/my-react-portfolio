import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="text-center text-md-left mt-4">
        {" "}
        <a className="btn btn-primary" href="#home">Send</a>{" "}
      </div>
    );
  }
}

export default Button;
