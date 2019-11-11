import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="container">
        
        <section className="section contact-section mt-4 mb-5">
          
          <h2
            className="text-center text-uppercase my-5 pt-5 wow fadeIn"
            data-wow-delay="0.2s"
          >
            Contact <strong>me</strong>
          </h2>
          
          <p
            className="text-center w-responsive mx-auto mb-5 pb-4 wow fadeIn"
            data-wow-delay="0.2s"
          >
            If you need or want any web service you can contact me and we can discuse about it.{" "}
          </p>
          <div className="row">
            
            <div className="col-md-6 text-center wow fadeInRight" data-wow-delay="0.4s">
              <i className="fas fa-map-marker-alt fa-2x" />
              <p>Córdoba, Córdoba, ARG</p>
            </div>
            <div className="col-md-6 text-center wow fadeInLeft" data-wow-delay="0.4s">
              <i className="fas fa-envelope fa-2x" />
              <p>nico.grupe@gmail.com</p>
            </div>
            
          </div>
        </section>
        
      </div>
    );
  }
}

export default Contact;
