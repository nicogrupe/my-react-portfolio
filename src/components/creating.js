import React from "react";
import Card from "./card";

class Creating extends React.Component {
  render() {
    return (
      <section className="section feature-box my-5 pb-5">
        {}
        <h2
          className="text-center text-uppercase my-5 pt-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          Process of <strong>creating</strong>
        </h2>
        <p
          className="text-center w-responsive mx-auto wow fadeIn my-5"
          data-wow-delay="0.2s"
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          quas, eos officia maiores ipsam ipsum dolores reiciendis ad voluptas,
          animi obcaecati adipisci sapiente mollitia.
        </p>
        {}
        <ul className="nav md-tabs nav-justified blue" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#panel1"
              role="tab"
            >
              01. Research
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#panel2" role="tab">
              02. Design
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#panel3" role="tab">
              03. Development
            </a>
          </li>
        </ul>
        {}
        <Card></Card>
        {}
      </section>
    );
  }
}

export default Creating;
