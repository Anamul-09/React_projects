import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function MyModal() {
  const [info, setInfo] = useState({ modal: false, name: "", city: "" });

  function toggle() {
    setInfo({ modal: !info.modal });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(info);
    toggle();
    dataSubmit();
  }
  function changValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function dataSubmit() {
    axios
      .post(
        "http://localhost/anamul/React_projects/reactjsbootstrapmodal/api/post.php",
        { info }
      )
      .then((res) => {
        alert(res.data.msg);
      });
  }

  return (
    <div>
      <h1 className="header">My Modal Button</h1>
      <button onClick={toggle} className="btn btn-success">
        Click Here
      </button>

      <Modal isOpen={info.modal}>
        <ModalHeader>This is a Modal</ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              onChange={changValue}
              name="name"
            />

            <label>City: </label>
            <input
              type="text"
              className="form-control"
              onChange={changValue}
              name="city"
            />
          </ModalBody>
          <ModalFooter>
            <input type="submit" className="btn btn-info" />
            <Button onClick={toggle} className="btn btn-danger">
              Close
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
