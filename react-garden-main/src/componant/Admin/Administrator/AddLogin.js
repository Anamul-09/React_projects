import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function AddLogin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);

    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden-main/Api/Addlogin.php",
        user
      )
      .then((res) => {
        // alert(res.data.msg);
        console.log(res.data);

        if (res.data.status === 200) {
          localStorage.setItem("email", res.data.email);
          navigate("/admin");
        } else {
          alert("Try with another password");
        }
      });
  }

  return (
    <div className="container mt-3 form">
      <h2 className="text-center">Login Form</h2>
      <form onSubmit={handleSubmit} className="col-lg-8 m-auto">
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
            name="password"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{" "}
            Remember me
          </label>

          <Link to="/AddRegister" className="log ">
            Registration first
          </Link>
        </div>
        <Button
          type="submit"
          className="btn btn-primary "
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
