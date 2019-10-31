import React from "react";
import Title from "./title";
import Field from "./field";

class MyExperience extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
        {}
        <Title></Title>
        {}
        <Field></Field>
        <Field></Field>
        <Field></Field>
      </div>
    );
  }
}

export default MyExperience;
