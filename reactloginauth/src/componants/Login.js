import React, { useState } from "react";
import PropTypes from "prop-types";

//axios er thake data aner jonno ai function
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <div className="container">
      <h1 className="text-center bg-success text-white mt-3">Login Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
