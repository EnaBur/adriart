import React from "react";
import Nav from "./Nav";

const Banner = ({ setShowForm }) => {
  const handleForm = () => {
    setShowForm(true);
    scrollToForm();
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("formScroll");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="banner">
        <h3>WELCOME TO</h3>
        <h1>RURAL VILLA ADRIART</h1>
        <button className="button-23" onClick={handleForm}>
          BOOK NOW
        </button>
      </div>
    </>
  );
};

export default Banner;
