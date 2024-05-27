import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Form = ({ setShowForm }) => {
  const [result, setResult] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    checkin_date: "",
    checkout_date: "",
    message: "",
    number: "",
  });

  useEffect(() => {
    const formElement = document.getElementById("formScroll");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const closeForm = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData();
    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);
    formData.append("email", formState.email);
    formData.append("name", formState.name);
    formData.append(
      "checkin_date",
      format(new Date(formState.checkin_date), "dd-MM-yyyy")
    );
    formData.append(
      "checkout_date",
      format(new Date(formState.checkout_date), "dd-MM-yyyy")
    );
    formData.append("message", formState.message);
    formData.append("number", formState.number);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormState({
        email: "",
        name: "",
        checkin_date: "",
        checkout_date: "",
        message: "",
        number: "",
      });
      setShowForm(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="formDiv" id="formScroll">
      <form
        id="form"
        onSubmit={onSubmit}
        action=""
        method="POST"
        className="form-container"
      >
        <h1>BOOK VILLA ADRIART</h1>
        <input
          type="hidden"
          name="access_key"
          value={process.env.REACT_APP_ACCESS_KEY}
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <br />
        <input
          type="email"
          className="input-form"
          placeholder="Enter Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />

        <br />
        <label htmlFor="name">
          <b>Name and Surname</b>
        </label>
        <br />
        <input
          type="text"
          placeholder="Name and Surname"
          className="input-form"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <input type="hidden" name="subject" value={`$name`} />
        <br />
        <label htmlFor="checkin_date" className="dateLabelCheckIn">
          <b>Check-in Date</b>
        </label>
        <br />
        <div className="date-calendar-div">
          <input
            type="date"
            className="input-form"
            name="checkin_date"
            value={formState.checkin_date}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <label htmlFor="checkout_date" className="dateLabelCheckOut">
          <b>Check-out Date</b>
        </label>
        <br />
        <div className="date-calendar-div">
          <input
            type="date"
            className="input-form"
            name="checkout_date"
            value={formState.checkout_date}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <label htmlFor="message">
          <b>Leave a message for us</b>
        </label>
        <br />
        <textarea
          placeholder="Leave a message for us"
          className="input-form"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="number">
          <b>How many people will be staying?</b>
        </label>
        <br />
        <input
          type="number"
          className="input-form"
          name="number"
          value={formState.number}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn submit">
          Submit
        </button>
        <button type="button" className="btn cancel" onClick={closeForm}>
          Cancel
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Form;
