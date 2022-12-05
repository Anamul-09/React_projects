import React from "react";

export default function FrontPage() {
  return (
    <div>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Topbar Start */}
      <div
        className="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-0"
                href=""
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" className="navbar-brand p-0">
          <img
            className="img-fluid me-3"
            src="assets/img/icon/icon-10.png"
            alt="Icon"
          />
          <h1 className="m-0 text-primary">Zoofari</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse py-4 py-lg-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="animal.html" className="dropdown-item">
                  Our Animals
                </a>
                <a href="membership.html" className="dropdown-item">
                  Membership
                </a>
                <a href="visiting.html" className="dropdown-item">
                  Visiting Hours
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a href="" className="btn btn-primary">
            Buy Ticket<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="row g-0 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="display-4 text-light mb-5">
                Enjoy Wonderful Day With Your Family
              </h1>
              <div className="d-flex align-items-center pt-4 animated slideInDown">
                <a
                  href=""
                  className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5"
                >
                  Read More
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h6 className="text-white m-0 ms-4 d-none d-sm-block">
                  Watch Video
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item">
                <img
                  className="img-fluid"
                  src="assets/img/carousel-1.jpg"
                  alt=""
                />
              </div>
              <div className="owl-carousel-item">
                <img
                  className="img-fluid"
                  src="assets/img/carousel-2.jpg"
                  alt=""
                />
              </div>
              <div className="owl-carousel-item">
                <img
                  className="img-fluid"
                  src="assets/img/carousel-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Video Modal Start */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p>
                <span className="text-primary me-2">#</span>Welcome To Zoofari
              </p>
              <h1 className="display-5 mb-4">
                Why You Should Visit
                <span className="text-primary">Zoofari</span> Park!
              </h1>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Free
                Car Parking
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Natural
                Environment
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>
                Professional Guide & Security
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>World
                Best Animals
              </h5>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src="assets/img/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts Start */}
      <div
        className="container-xxl bg-primary facts my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <i className="fa fa-paw fa-3x text-primary mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                12345
              </h1>
              <p className="text-white mb-0">Total Animal</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              <i className="fa fa-users fa-3x text-primary mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                12345
              </h1>
              <p className="text-white mb-0">Daily Vigitors</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <i className="fa fa-certificate fa-3x text-primary mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                12345
              </h1>
              <p className="text-white mb-0">Total Membership</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.7s"
            >
              <i className="fa fa-shield-alt fa-3x text-primary mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                12345
              </h1>
              <p className="text-white mb-0">Save Wild Life</p>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <p>
                <span className="text-primary me-2">#</span>Our Services
              </p>
              <h1 className="display-5 mb-0">
                Special Services For
                <span className="text-primary">Zoofari</span> Visitors
              </h1>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary h-100 d-flex align-items-center py-4 px-4 px-sm-5">
                <i className="fa fa-3x fa-mobile-alt text-white"></i>
                <div className="ms-4">
                  <p className="text-white mb-0">Call for more info</p>
                  <h2 className="text-white mb-0">+012 345 6789</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-5 gx-4">
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-2.png"
                alt="Icon"
              />
              <h5 className="mb-3">Car Parking</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-3.png"
                alt="Icon"
              />
              <h5 className="mb-3">Animal Photos</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-4.png"
                alt="Icon"
              />
              <h5 className="mb-3">Guide Services</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-5.png"
                alt="Icon"
              />
              <h5 className="mb-3">Food & Beverages</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-6.png"
                alt="Icon"
              />
              <h5 className="mb-3">Zoo Shopping</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-7.png"
                alt="Icon"
              />
              <h5 className="mb-3">Free Hi Speed Wi-Fi</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-8.png"
                alt="Icon"
              />
              <h5 className="mb-3">Play Ground</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <img
                className="img-fluid mb-3"
                src="assets/img/icon/icon-9.png"
                alt="Icon"
              />
              <h5 className="mb-3">Rest House</h5>
              <span>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Animal Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-end wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <p>
                <span className="text-primary me-2">#</span>Our Animals
              </p>
              <h1 className="display-5 mb-0">
                Let`s See Our <span className="text-primary">Zoofari</span>{" "}
                Awsome Animals
              </h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="">
                Explore More Animals
              </a>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-4">
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="assets/img/animal-md-1.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="assets/img/animal-md-1.jpg"
                        alt=""
                      />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">
                          Animal
                        </p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="assets/img/animal-lg-1.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="assets/img/animal-lg-1.jpg"
                        alt=""
                      />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">
                          Animal
                        </p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row g-4">
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="assets/img/animal-lg-2.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="assets/img/animal-lg-2.jpg"
                        alt=""
                      />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">
                          Animal
                        </p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="assets/img/animal-md-2.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="assets/img/animal-md-2.jpg"
                        alt=""
                      />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">
                          Animal
                        </p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row g-4">
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="assets/img/animal-md-3.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="assets/img/animal-md-3.jpg"
                        alt=""
                      />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">
                          Animal
                        </p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="assets/img/animal-lg-3.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="assets/img/animal-lg-3.jpg"
                        alt=""
                      />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">
                          Animal
                        </p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animal End */}

      {/* Visiting Hours Start */}
      <div
        className="container-xxl bg-primary visiting-hours my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-6 text-white mb-5">Visiting Hours</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span>Monday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Tuesday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Wednesday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Thursday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Friday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Saturday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 text-light wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1 className="display-6 text-white mb-5">Contact Info</h1>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Office</td>
                    <td>123 Street, New York, USA</td>
                  </tr>
                  <tr>
                    <td>Zoo</td>
                    <td>123 Street, New York, USA</td>
                  </tr>
                  <tr>
                    <td>Ticket</td>
                    <td>
                      <p className="mb-2">+012 345 6789</p>
                      <p className="mb-0">ticket@example.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>
                      <p className="mb-2">+012 345 6789</p>
                      <p className="mb-0">support@example.com</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Visiting Hours End */}

      {/* Membership Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-end wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <p>
                <span className="text-primary me-2">#</span>Membership
              </p>
              <h1 className="display-5 mb-0">
                You Can Be A Proud Member Of
                <span className="text-primary">Zoofari</span>
              </h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="">
                Special Pricing
              </a>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="membership-item position-relative">
                <img
                  className="img-fluid"
                  src="assets/img/animal-lg-1.jpg"
                  alt=""
                />
                <h1 className="display-1">01</h1>
                <h4 className="text-white mb-3">Popular</h4>
                <h3 className="text-primary mb-4">$99.00</h3>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>10% discount
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>2 adult and 2
                  child
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Free animal
                  exhibition
                </p>
                <a className="btn btn-outline-light px-4 mt-3" href="">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="membership-item position-relative">
                <img
                  className="img-fluid"
                  src="assets/img/animal-lg-2.jpg"
                  alt=""
                />
                <h1 className="display-1">02</h1>
                <h4 className="text-white mb-3">Standard</h4>
                <h3 className="text-primary mb-4">$149.00</h3>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>15% discount
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>4 adult and 4
                  child
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Free animal
                  exhibition
                </p>
                <a className="btn btn-outline-light px-4 mt-3" href="">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="membership-item position-relative">
                <img
                  className="img-fluid"
                  src="assets/img/animal-lg-3.jpg"
                  alt=""
                />
                <h1 className="display-1">03</h1>
                <h4 className="text-white mb-3">Premium</h4>
                <h3 className="text-primary mb-4">$199.00</h3>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>20% discount
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>6 adult and 6
                  child
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Free animal
                  exhibition
                </p>
                <a className="btn btn-outline-light px-4 mt-3" href="">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Membership End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1
            className="display-5 text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            Our Clients Say!
          </h1>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                src="assets/img/testimonial-1.jpg"
                style={{ width: "100px", " height": "100px" }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                  duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                  clita erat magna elitr erat sit sit erat at rebum justo sea
                  clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                src="assets/img/testimonial-2.jpg"
                style={{ width: "100px", " height": "100px" }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                  duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                  clita erat magna elitr erat sit sit erat at rebum justo sea
                  clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                src="assets/img/testimonial-3.jpg"
                style={{ width: "100px", " height": "100px" }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                  duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                  clita erat magna elitr erat sit sit erat at rebum justo sea
                  clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Footer Start */}
      <div
        className="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Popular Links</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
                <br />
                Distributed By:
                <a href="https://themewagon.com" target="_blank">
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
