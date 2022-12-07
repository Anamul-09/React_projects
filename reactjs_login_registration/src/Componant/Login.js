import React from "react";

export default function Login() {
  return (
    <div>
      <div className="container mt-3">
        <h2>Stacked form</h2>
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
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
              placeholder="Enter password"
              name="pswd"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
