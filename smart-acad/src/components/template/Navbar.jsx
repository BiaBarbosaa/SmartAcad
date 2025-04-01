import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>

      <header className="navbar navbar-expand-md nav-custom sticky-top p-2 shadow-sm">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-link text-dark d-md-none me-2" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#sidebarMenu"
            >
              <i className="bi bi-list h4"></i>
            </button>
            
            <a href="/" className="logo-brand d-flex align-items-center text-decoration-none">
              <i className="bi bi-activity fs-5 me-2 text-danger"></i>
              <span className="text-dark fw-semibold">SMART ACAD</span>
            </a>
          </div>

          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-flex justify-content-center flex-grow-1 mx-4">
              <div className="search-container input-group">
                <input
                  type="text"
                  className="form-control search-input border-secondary bg-white"
                  placeholder="Pesquisar..."
                  aria-label="Search"
                />
                <button className="btn search-btn border-secondary">
                  <i className="bi bi-search fs-5 text-secondary"></i>
                </button>
              </div>
            </div>

            <div className="d-flex align-items-center ms-auto">
              <div className="dropdown">
                <button 
                  className="btn btn-light d-flex align-items-center rounded-pill py-2 px-3"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle me-2"></i>
                  <span className="d-none d-lg-inline ">Admin</span>
                </button>
                
                <ul className="dropdown-menu dropdown-menu-end mt-2">
                  <li><Link className="dropdown-item text-danger" to="/login">
                    <i className="bi bi-box-arrow-right me-2"></i>Sair
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;