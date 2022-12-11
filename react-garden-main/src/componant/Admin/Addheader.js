import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Addheader extends Component {
  constructor(props) {
    // console.log(props)
    super(props);
    this.props = {};
  }
  render() {
    return (
      <div>
        <nav className=" row navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="col-sm-9 ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/admin" className="nav-link text-white active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Users" className="nav-link text-white">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Products" className="nav-link text-white">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link to="Cars" className="nav-link text-white">
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link to="colors" className="nav-link text-white">
                  Colors
                </Link>
              </li>

              <li className="nav-item">
                <Link to="search" className="nav-link text-white">
                  Search
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

// function Header(props) {
//   return (
//     <>

//     <div className="p-5 bg-primary text-white text-center">
//   <h1>{props.brand}</h1>
//   <p>{props.slogan}</p>
// </div>

// <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//   <div className="container-fluid">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link active" href="#">Active</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//     </>
//   );
// }

// export default Header;
