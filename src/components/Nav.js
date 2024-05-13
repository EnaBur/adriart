import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const logo = require("../images/Adriart_negativ_bijeli.png");

  return (
    <div>
      <ul>
        <img alt="logo" src={logo}></img>
        <h2>Adriart</h2>
        <li>
          <a
            href="https://www.instagram.com/villa.adriart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://web.facebook.com/villa.adriart/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="#gallery">GALLERY</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
