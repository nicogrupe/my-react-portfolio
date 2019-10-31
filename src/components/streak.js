import React from "react";

class Streak extends React.Component {
  render() {
    return (
      <div
        className="streak streak-photo streak-md"
        style={{
          backgroundImage:
            'url("https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2811%29.jpg")'
        }}
      >
        <div className="mask flex-center rgba-indigo-strong">
          <div className="white-text smooth-scroll mx-4">
            <h2 className="h2-responsive wow fadeIn mb-5">
              <i className="fas fa-quote-left" aria-hidden="true" /> Design is
              not just what it looks like and feels like. Design is how it
              works. <i className="fas fa-quote-right" aria-hidden="true" />
            </h2>
            <h5
              className="text-center font-italic wow fadeIn"
              data-wow-delay="0.2s"
            >
              ~ Steve Jobs
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Streak;
