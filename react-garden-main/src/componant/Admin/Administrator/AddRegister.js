import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function AddRegister() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function changValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function formSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden-main/Api/AddRegistration.php",
        { info }
      )
      .then((res) => {
        if (res.data.success) {
          navigate("/Addlogin");
        }
        alert(res.data.msg);
      });
  }

  return (
    <div className="container mt-3 form">
      {/* <Modal isOpen={info.modal}> */}
      <h2 className="text-center">Registration Form</h2>
      <form onSubmit={formSubmit} className="col-lg-8 m-auto">
        <div className="mb-3 mt-3">
          <label for="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={changValue}
            placeholder="Enter name"
            name="name"
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={changValue}
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
            onChange={changValue}
            name="password"
          />
        </div>
        <div className="form-check mb-3">
          <Link to="/AddLogin" className="log">
            Already have an account.<a href="">Login</a>
          </Link>
        </div>
        <button
          type="submit"
          className="btn btn-primary "
          style={{ width: "100%" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
