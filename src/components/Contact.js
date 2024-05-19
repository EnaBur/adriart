import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>CONTACT US</h2>

      <div className="emailSection">
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <span> info@villa-adriart.com</span>
        </div>
        <div className="number">
          <FontAwesomeIcon icon={faMobile} />
          <span> +385 95 822 1730</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
