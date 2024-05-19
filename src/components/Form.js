import React from "react";

const Form = ({ setShowForm }) => {
  const closeForm = () => {
    setShowForm(false);
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
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
        <input type="hidden" name="access_key" value={process.env.ACCESS_KEY} />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <br />
        <input
          type="text"
          className="input-form"
          placeholder="Enter Email"
          name="email"
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
          required
        />
        <br />
        <label htmlFor="date">
          <b>Date</b>
        </label>
        <br />
        <input
          type="date"
          className="input-form"
          placeholder="Choose date"
          name="date"
          required
        />
        <br />
        <label htmlFor="message">
          <b>Leave a message for us</b>
        </label>
        <br />
        <input
          type="textarea"
          placeholder="Leave a message for us"
          className="input-form"
          name="message"
          required
        />
        <br />
        <label htmlFor="number">
          <b>How many people will be staying?</b>
        </label>
        <br />
        <input
          type="number"
          placeholder="0"
          className="input-form"
          name="number"
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
