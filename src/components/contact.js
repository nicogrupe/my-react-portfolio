import React from "react";
import ContactForm from "./contact_form";
import Button from "./button";
import ContactInfo from "./contact_info";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="container">
        {}
        <section className="section contact-section mt-4 mb-5">
          {}
          <h2
            className="text-center text-uppercase my-5 pt-5 wow fadeIn"
            data-wow-delay="0.2s"
          >
            Contact <strong>me</strong>
          </h2>
          {}
          <p
            className="text-center w-responsive mx-auto mb-5 pb-4 wow fadeIn"
            data-wow-delay="0.2s"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur accusamus
            veniam.{" "}
          </p>
          <div className="row wow fadeIn" data-wow-delay="0.4s">
            {}
            <div className="col-md-8 mb-5">
              <ContactForm></ContactForm>
              <Button></Button>
            </div>
            {}
            {}
            <ContactInfo></ContactInfo>
            {}
          </div>
        </section>
        {}
      </div>
    );
  }
}

export default Contact;
