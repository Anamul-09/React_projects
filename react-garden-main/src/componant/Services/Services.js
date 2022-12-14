import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="btn btn-sm">
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
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="assets/img/service-1.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="assets/img/icon/icon-3.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Landscaping</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>

                  <Link to="/ServiceDetails1" className="btn btn-sm">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="assets/img/service-2.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="assets/img/icon/icon-6.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Pruning plants</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <Link to="/ServiceDetails2" className="btn btn-sm">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="assets/img/service-3.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="assets/img/icon/icon-5.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Irrigation & Drainage</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <Link to="/ServiceDetails3" className="btn btn-sm">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="assets/img/service-4.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="assets/img/icon/icon-4.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Garden Maintenance </h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <Link to="/ServiceDetails4" className="btn btn-sm">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="assets/img/service-5.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="assets/img/icon/icon-8.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Green Technology</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <Link to="/ServiceDetails5" className="btn btn-sm">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="assets/img/service-6.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="assets/img/icon/icon-2.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Urban Gardening</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <Link to="/ServiceDetails6" className="btn btn-sm">
                    <i className="fa fa-plus text-primary me-2"></i>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
