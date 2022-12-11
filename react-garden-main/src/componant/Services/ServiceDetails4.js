import React from "react";
import { Link } from "react-router-dom";

export default function ServiceDetails() {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">
            ServiceDetails
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/Home" className="btn btn-sm">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Services" className="btn btn-sm">
                  Services
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="fs-5 fw-bold text-primary">Our Services</p>
            <h1 className="display-5 mb-5">Services That We Offer For You</h1>
          </div>
          <hr />
          <div className="row g-4">
            <div className="col-lg-3">
              <img
                className="img-fluid"
                src="assets/img/service-4.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h1 className="mb-3">Garden Maintenance</h1>
              <p className="mb-4">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.Erat ipsum justo amet duo et elitr
                dolor, est duo duo eos lorem sed diam stet diam sed stet.Erat
                ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
                diam stet diam sed stet.
              </p>

              {/* <Link to="/Services" className="btn btn-sm">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Details
                  </Link> */}
            </div>

            <div className="col-lg-3 info">
              <p className="price">TK 5000</p>
              <Link to="/USLogin" className="btn btn-primary order">
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
