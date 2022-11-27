import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  const [prodinfo, prodinfoSet] = useState({
    name: "",
    details: "",
    price: "",
  });
  console.log(prodinfo);

  const onChangeValue = (e) => {
    prodinfoSet({ ...prodinfo, [e.target.name]: e.target.value });
  };
  const SuubmitValue = async (e) => {
    // alert("Submitted")
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/api/addproduct.php",
        {
          pname: prodinfo.name,
          pdetails: prodinfo.details,
          pprice: prodinfo.price,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        navigate(`/Product`);
      });
  };

  return (
    <div className="container">
      <h1>Product entry form</h1>
      <hr />

      <form onSubmit={SuubmitValue}>
        <div className="form-group">
          <label>
            <strong>Name:</strong>{" "}
          </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={onChangeValue}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>
            <strong>Details:</strong>{" "}
          </label>
          <br />
          <textarea
            placeholder="Enter some message "
            onChange={onChangeValue}
            name="details"
            col="10"
          ></textarea>
        </div>

        <div className="form-group">
          <label>
            <strong>Price:</strong>
          </label>
          <br />
          <input
            type="text"
            name="price"
            onChange={onChangeValue}
            placeholder="Enter price"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
