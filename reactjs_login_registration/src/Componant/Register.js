import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigation = useNavigate();
  const [info, setInfo] = useState({});
  const changValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/anamul/React_projects/reactjs_login_registration/api/registration.php",
        info
      )
      .then((res) => {
        if (res.data) {
          // console.log(res.data);
          alert(res.data);
          navigation("/Login");
        }
      });
  };

  return (
    <div className="container">
      <h1> Registration Form</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3 mt-3">
          <label for="name" className="form-label">
            FastName:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={changValue}
            placeholder="Enter FastName"
            name="fname"
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="name" className="form-label">
            LastName:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={changValue}
            placeholder="Enter name"
            name="lname"
          />
        </div>

        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            onChange={changValue}
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            onChange={changValue}
            placeholder="Enter password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
    </div>
  );
}
