import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="col-lg-3 bg-primary sbar">
        <ul className="nav nav-pills flex-column ulmenu">
          <li className="nav-item smenu ">
            <Link to="/admin" className="nav-link text-white ">
              Home
            </Link>
          </li>
          <li className="nav-item smenu">
            <Link to="Users" className="nav-link text-white">
              Users
            </Link>
          </li>
          <li className="nav-item smenu">
            <Link to="Products" className="nav-link text-white">
              Products
            </Link>
          </li>

          <li className="nav-item smenu">
            <Link to="Cars" className="nav-link text-white">
              Cars
            </Link>
          </li>
          <li className="nav-item smenu">
            <Link to="colors" className="nav-link text-white">
              Colors
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
