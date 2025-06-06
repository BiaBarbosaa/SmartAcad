import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png"

function Navbar() {

  const [nome, setNome] = useState('')

  useEffect(() => {
    name()
  }, [])

async function name() {
  let regraSalvo = localStorage.getItem('regra')
  setNome(regraSalvo)
}

  return (
    <header className="navbar navbar-expand-md nav-custom sticky-top p-2 shadow-sm">
      <div className="container-fluid">
        <div className="d-flex align-items-center order-1">
          <button
            className="btn btn-link nav-botao d-md-none me-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
          >
            <i className="bi bi-list h4 "></i>
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
          <i className="bi bi-three-dots-vertical nav-botao"></i>
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
                  src={avatar}
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <span className="d-none d-md-inline nav-botao">{nome}</span>
                <i className="bi bi-caret-down ms-2 nav-botao"></i>
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