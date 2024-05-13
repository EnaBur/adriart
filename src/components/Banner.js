import React from "react";
import Popup from "reactjs-popup";
import Nav from "./Nav";

/* const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); 
  
    // Use fetch or another method to send the form data to your server
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // Handle success (e.g., show a success message)
      } else {
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };*/

const Banner = () => {
  const Modal = () => (
    <Popup trigger={<button className="button-23"> Book now </button>} modal>
      <div>
        <form
          action="/.netlify/functions/SendEmail"
          method="POST"
          className="form-container"
        >
          <h1>Book Villa Adriart</h1>

          <label for="email">
            <b>Email</b>
          </label>
          <br></br>
          <input type="text" placeholder="Enter Email" name="email" required />
          <br></br>
          <label for="name">
            <b>Name and Surname</b>
          </label>
          <br></br>
          <input
            type="text"
            placeholder="Name and Surname"
            name="name"
            required
          />
          <br></br>
          <label for="date">
            <b>Date</b>
          </label>
          <br></br>
          <input type="date" placeholder="Choose date" name="date" required />
          <br></br>
          <label for="message">
            <b>Leave a message for us</b>
          </label>
          <br></br>
          <input
            type="textarea"
            placeholder="Leave a message for us"
            name="message"
            required
          />
          <br></br>
          <label for="number">
            <b>How many people will be staying?</b>
          </label>
          <br></br>
          <input type="number" placeholder="0" name="number" required />

          <button type="submit" class="btn">
            Submit
          </button>
          <button type="button" class="btn cancel" onclick="closeForm()">
            Cancel
          </button>
        </form>
      </div>
    </Popup>
  );

  return (
    <>
      <Nav></Nav>
      <div className="banner">
        <h3>WELCOME TO</h3>
        <h1>RURAL VILLA ADRIART</h1>
      </div>
    </>
  );
};

export default Banner;
