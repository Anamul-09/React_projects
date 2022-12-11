import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/anamul/React_projects/reactjs_login_registration/api/login.php",
        user
      )
      .then((response) => {
        if (response.data.success) {
          // alert(response.data.success);
          console.log(response.data.user.email);
          sessionStorage.setItem("email", response.data.user.email);
          navigate("/Dashboard");
        } else {
          alert(response.data.user.error);
        }
      });
  };

  return (
    <div>
      <div className="container mt-3">
        <h2>Stacked form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={handleChange}
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
              onChange={handleChange}
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
