import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Form = ({ setShowForm }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    console.log(ranges.selection);
    setState([ranges.selection]);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    // Format dates to DD-MM-YYYY
    const formattedStartDate = format(state[0].startDate, "dd-MM-yyyy");
    const formattedEndDate = format(state[0].endDate, "dd-MM-yyyy");

    formData.append("startDate", formattedStartDate);
    formData.append("endDate", formattedEndDate);

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
        <div>
          <DateRangePicker
            ranges={state}
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="forwards"
            showDateDisplay={false}
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
