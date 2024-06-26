import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Hamburger from "./Hamburger";

const Nav = () => {
  const logo = require("../images/Adriart_negativ_bijeli.png");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = (e) => {
    e.stopPropagation();
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      if (hamburgerOpen) {
        setHamburgerOpen(false);
      }
    };

    document.body.addEventListener("click", handleDocumentClick);

    return () => {
      document.body.removeEventListener("click", handleDocumentClick);
    };
  }, [hamburgerOpen]);

  return (
    <div>
      <ul className={hamburgerOpen ? "darken" : ""}>
        <img alt="logo" src={logo}></img>
        <h2>Adriart</h2>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger />
        </div>
        <div className="nav-mobile">
          <li className={hamburgerOpen ? "open" : ""}>
            <a
              href="https://www.instagram.com/villa.adriart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className={hamburgerOpen ? "open" : ""}>
            <a
              href="https://web.facebook.com/villa.adriart/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className={hamburgerOpen ? "open" : ""}>
            <a href="#map">
              <FontAwesomeIcon icon={faLocationDot} />
            </a>
          </li>
          <li className={hamburgerOpen ? "open" : ""}>
            <a href="#contact">CONTACT</a>
          </li>
          <li className={hamburgerOpen ? "open" : ""}>
            <a href="#gallery">GALLERY</a>
          </li>
          <li className={hamburgerOpen ? "open" : ""}>
            <a href="#about">ABOUT</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
