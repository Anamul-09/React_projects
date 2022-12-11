import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const logOut = () => {
    sessionStorage.clear();
    navigate("/Login");
  };

  return (
    <div>
      <div className="p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap 5 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link active">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link active">
                Register
              </Link>
            </li>
          </ul>
          <span className="navbar-text"></span>
          {email ? (
            <a onClick={logOut} className="nav-link active text-white" href="">
              Logout
            </a>
          ) : (
            <a className="nav-link active text-white" href="/Login">
              Login
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}
