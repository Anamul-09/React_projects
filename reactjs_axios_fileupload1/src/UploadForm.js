import axios from "axios";
import React, { useState } from "react";

export default function UploadForm() {
  const [info, setinfo] = useState({
    username: "",
    name: "",
  });

  const [photoInfo, setPhotoInfo] = useState({
    file: "",
  });

  const changeValue = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value });
  };
  const changePhoto = (e) => {
    setPhotoInfo({ file: e.target.files[0] });
  };
  //   console.log(info);
  //   console.log(photoInfo);

  const submitHandle = (e) => {
    e.preventDefault();
    fileUpload();
    // console.log(datas);
  };

  const fileUpload = () => {
    const datas = new FormData();
    datas.append("mydata", JSON.stringify(info));
    datas.append("mydata1", photoInfo.file);

    axios
      .post(
        "http://localhost/anamul/React_projects/reactjs_axios_fileupload/api/newupload.php",
        datas,
        {
          header: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1 className="pt-3 bg-primary text-white text-center">
        Form with photo
      </h1>
      <div className="container m-auto">
        <form onSubmit={submitHandle}>
          <label>Username: </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={changeValue}
          />
          <br />
          <label>name: </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter tour name"
            onChange={changeValue}
          />
          <br />
          <label>Photo: </label>
          <br />
          <input type="file" name="photo" onChange={changePhoto} />
          <br />
          <br />

          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
