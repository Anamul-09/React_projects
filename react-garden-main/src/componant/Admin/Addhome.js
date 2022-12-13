import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Addhome() {
  let navigate = useNavigate();
  const auth = sessionStorage.getItem("email");
  useEffect(() => {
    if (auth == null) {
      navigate("/AddLogin");
    }
  }, []);

  return (
    <div className="col-sm-8">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2020</h5>
      <div className="fakeimg">Fake Image</div>

      <h2 className="mt-5">TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2020</h5>
      <div className="fakeimg">Fake Image</div>
    </div>
  );
}

export default Addhome;
