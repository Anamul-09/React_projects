import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2020</h5>
            <div className="fakeimg">Fake Image</div>

            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
