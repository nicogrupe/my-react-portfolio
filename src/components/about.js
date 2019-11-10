import React from "react";
import '../App.scss';

class About extends React.Component {
  render() {
    return (
      <section id="about" className="section feature-box mb-5">
        
        <h2
          className="text-center text-uppercase my-5 pt-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          About <strong>me</strong>
        </h2>
        <p
          className="text-center w-responsive mx-auto wow fadeIn my-5"
          data-wow-delay="0.2s"
        >
          I am 23 years old. I am an almost Systems Engineer (I am on my last university year), 
          also a web Developer and I enjoy designing. I speek English, Spanish and German. 
          I live in Cordoba, Argentina but I lived in Boston, US for 2 months and in Frankfurt, 
          Germany for 6 months.
        </p>
        
        <div
          className="row features-big text-center wow fadeIn"
          data-wow-delay="0.4s"
        >
          <div className="col-md-4 mb-5">
            
            <div className="card card-body hoverable">
              <i className="fas fa-laptop fa-3x mb-4" aria-hidden="true" />
              <h5 className="font-weight-bold text-uppercase mb-4">Freelancer</h5>
              {/* <p className="dark-grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p> */}
            </div>
            
          </div>
          <div className="col-md-4 mb-5">
            
            <div className="card card-body lblue hoverable">
              <i className="fas fa-code fa-3x mb-4" aria-hidden="true" />
              <h5 className="font-weight-bold text-uppercase mb-4">Developer</h5>
              {/* <p className="dark-grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p> */}
            </div>
            
          </div>
          <div className="col-md-4 mb-5">
          
          <div className="card card-body hoverable">
            <i className="fas fa-pencil-alt fa-3x mb-4" aria-hidden="true" />
            <h5 className="font-weight-bold text-uppercase mb-4">Designer</h5>
            {/* <p className="dark-grey-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p> */}
          </div>
          
        </div>
          
        </div>
        
      </section>
    );
  }
}

export default About;
