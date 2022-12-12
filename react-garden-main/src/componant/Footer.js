import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, Kakrail
                ,Dhaka
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+01847309892
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>mdanamulislam09@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.facebook.com/anamul1702"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.linkedin.com/in/anamul-islam-045a19250"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Services</h4>

              <Link to="/ServiceDetails1" className="btn btn-link">
                Landscaping
              </Link>

              <Link to="/ServiceDetails2" className="btn btn-link">
                Pruning plants
              </Link>

              <Link to="/ServiceDetails3" className="btn btn-link">
                Urban Gardening
              </Link>

              <Link to="/ServiceDetails4" className="btn btn-link">
                Garden Maintenance
              </Link>

              <Link to="/ServiceDetails5" className="btn btn-link">
                Green Technology
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Quick Links</h4>

              <Link to="/About" className="btn btn-link ">
                About
              </Link>

              <Link to="/Contact" className="btn btn-link ">
                Contact Us
              </Link>

              <Link to="/Services" className="btn btn-link ">
                Our services
              </Link>

              <Link to="/Features" className="btn btn-link ">
                Features
              </Link>

              <Link to="/Projects" className="btn btn-link ">
                Projects
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative w-100">
                <Link
                  to="/Contact"
                  className="btn btn-primary py-2 position-absolute top-0 mt-2 me-2"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By <a href="https://themewagon.com">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
