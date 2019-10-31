import React from "react";

class ContactInfo extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <ul className="contact-icons list-unstyled text-center">
          <li>
            <i className="fas fa-map-marker-alt fa-2x" />
            <p>New York, NY 10012, USA</p>
          </li>
          <li>
            <i className="fas fa-phone fa-2x" />
            <p>+ 01 234 567 89</p>
          </li>
          <li>
            <i className="fas fa-envelope fa-2x" />
            <p>contact@mdbootstrap.com</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactInfo;
