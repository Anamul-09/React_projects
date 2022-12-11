import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  const auth = sessionStorage.getItem("email");
  useEffect(() => {
    if (auth == null) {
      navigate("/Login");
    }
  }, []);
  return (
    <>
      <div className="container">
        <h1>Welcome {sessionStorage.getItem("email")} to Dashboard</h1>
      </div>
    </>
  );
}
