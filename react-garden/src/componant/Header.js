import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>

<div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <span className="fa fa-phone-alt me-2"></span>
                    <span>+012 345 6789</span>
                </div>
                <div classNameName="h-100 d-inline-flex align-items-center">
                    <span className="far fa-envelope me-2"></span>
                    <span>info@example.com</span>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <span>Follow Us:</span>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    


    
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 className="m-0">Gardener</h1>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/Test" className="nav-item nav-link active">Test</Link>
            <Link to="/About" className="nav-item nav-link active">About</Link>
            <Link to="/Services" className="nav-item nav-link active">Services</Link>
            <Link to="/Projects" className="nav-item nav-link active">Projects</Link>
            <Link to="/Users" className="nav-item nav-link active">Users</Link>
            <Link to="/product" className="nav-item nav-link active">Product</Link>
                
                
                
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                    <Link to="/Features" className="dropdown-item">Features</Link>
                    <Link to="/FreeQuote" className="dropdown-item">Free Quote</Link>
                    <Link to="/Team" className="dropdown-item">Our Team</Link>
                    <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
                
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <Link to="/Contact" className="nav-item nav-link active">Contact</Link>
                
            </div>
            <a href="" className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
      
    </div>
  )
}
