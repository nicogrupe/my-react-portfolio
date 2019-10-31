import React from "react";
import Title from "./title";
import Card from "./card";

class About extends React.Component {
  render() {
    return (
      <section id="about" className="section feature-box mb-5">
        {}
        <Title></Title>
        <p
          className="text-center w-responsive mx-auto wow fadeIn my-5"
          data-wow-delay="0.2s"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          quas, eos officia maiores ipsam ipsum dolores reiciendis ad voluptas,
          animi obcaecati adipisci sapiente mollitia.
        </p>
        {}
        <div
          className="row features-big text-center wow fadeIn"
          data-wow-delay="0.4s"
        >
          {}
          <Card></Card>
          {}
          {}
          <Card></Card>
          {}
          {}
          <Card></Card>
          {}
        </div>
        {}
      </section>
    );
  }
}

export default About;
