import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar navbar-expand-md nav-custom sticky-top p-2 shadow-sm">
      <div className="container-fluid">
        <div className="d-flex align-items-center order-1">
          <button
            className="btn btn-link text-dark d-md-none me-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
          >
            <i className="bi bi-list h4"></i>
          </button>

          <a href="/home" className="logo-brand d-flex align-items-center text-decoration-none">
            <i className="bi bi-activity fs-5 me-2 text-danger"></i>
            <span className="text-dark fw-semibold">SMART ACAD</span>
          </a>
        </div>

        <button
          className="navbar-toggler border-0 order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <i className="bi bi-three-dots-vertical"></i>
        </button>

        <div className="collapse navbar-collapse order-2 order-md-2" id="navbarContent">
          <div className="d-flex justify-content-center flex-grow-1 mx-lg-4"></div>

          <div className="d-flex align-items-center ms-auto order-3">
            <div className="dropdown">
              <button
                className="d-flex align-items-center border-0 bg-transparent rounded-pill py-2 px-2"
                data-bs-toggle="dropdown"
                style={{ outline: "none", boxShadow: "none" }}
              >
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={{ width: "32px", height: "32px", objectFit: "cover" }}
                />
                <span className="d-none d-md-inline">João Silva</span>
                <i className="bi bi-caret-down ms-2"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end mt-2 shadow">
               
                <li>
                  <Link className="dropdown-item d-flex a align-items-center text-danger" to="/login">
                    <i className="bi bi-box-arrow-right me-2"></i> Sair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;