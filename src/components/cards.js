import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div className="col-md-12 mb-5">
        
        <div id="mdb-lightbox-ui" />
        <div className="mdb-lightbox">
          <figure className="col-md-4">
            <a
              href="https://github.com/nicogrupe"
              data-size="1600x1067"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="./img/BalloonFE.PNG"
                className="img-fluid z-depth-1"
                alt=""
              />
            </a>
          </figure>
          <figure className="col-md-4">
            <a
              href="http://invertirsemilla.com"
              data-size="1600x1067"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="./img/invertirsemilla.PNG"
                className="img-fluid z-depth-1"
                alt=""
              />
            </a>
          </figure>
          <figure className="col-md-4">
            <a
              href="https://github.com/nicogrupe/my-react-portfolio"
              data-size="1600x1067"
            >
              <img
                src="./img/portfolio.PNG"
                className="img-fluid z-depth-1"
                alt=""
                target="_blank" 
                rel="noopener noreferrer"
              />
            </a>
          </figure>
        </div>
        
      </div>
    );
  }
}

export default Cards;
