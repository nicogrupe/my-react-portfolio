import React from "react";
import Cards from "./cards";

class Works extends React.Component {
  render() {
    return (
      <section id="works" className="section mb-5">
        
        <h2
          className="text-center text-uppercase my-5 pt-5 wow zoomIn"
          data-wow-delay="0.2s"
        >
          My <strong>projects</strong>
        </h2>
        
        <p className="text-center w-responsive mx-auto wow fadeIn my-5" data-wow-delay="0.4s">
          Some of the porjects I made are Balloon Storage Dapp, invertirsemilla.com and my react portfolio.
        </p> 
        
        <div className="row">
          
          <Cards></Cards>
          
        </div>
        
      </section>
    );
  }
}

export default Works;
