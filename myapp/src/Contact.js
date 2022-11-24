import React from "react";
import { useState } from "react";

export default function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    // console.log(inputs)
  };
  return (
    <div className="col-sm-8">
      <h1>Contact with us</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">
            <strong>Full Name</strong>
          </label>
          <input
            type="name"
            class="form-control"
            name="name"
            // value={inputs.name}
            id="exampleFormControlInput1"
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">
            <strong>Email address</strong>
          </label>
          <input
            type="email"
            name="email"
            // value={inputs.email}
            class="form-control"
            id="exampleFormControlInput1"
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            <strong>Example textarea</strong>
          </label>
          <textarea
            class="form-control"
            name="message"
            // value={inputs.message}
            id="exampleFormControlTextarea1"
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      You have submited: {inputs.name},{inputs.email},{inputs.message}
    </div>
  );
}
