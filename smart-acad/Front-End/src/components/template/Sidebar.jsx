import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const pagina = useLocation();
  const editar = window.location.pathname;

  const areaCliente =
    pagina.pathname === "/cadastrar-cliente" ||
    pagina.pathname === "/listar-cliente" ||
    editar.match(/editar-cliente/);

  const areaContrato =
    pagina.pathname === "/cadastrar-contrato" ||
    pagina.pathname === "/listar-contrato" ||
    editar.match(/editar-contrato/);

  return (
    <div className="cortestee sidebar sidebar2 border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            SMART ACAD
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="mb-1">
              <Link
                to="/home"
                className="sidebar-home-link btn d-inline-flex align-items-center rounded border-0"
              >
                <i class="bi bi-bar-chart-fill sidebar-home-icon"></i>
                <span>Home</span>
              </Link>
            </li>
            <hr className="my-3" />

            {/* Restante do código mantido igual */}
            <li className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#venda-collapse"
                aria-expanded={areaCliente ? "true" : "false"}
              >
                Cliente
              </button>
              <div
                className={`collapse ${areaCliente ? "show" : ""}`}
                id="venda-collapse"
              >
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li className="nav-item">
                    <Link
                      to="/cadastrar-cliente"
                      className="nav-link d-inline-flex text-decoration-none rounded text-dark"
                    >
                      Cadastrar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/listar-cliente"
                      className="nav-link d-inline-flex text-decoration-none rounded text-dark"
                    >
                      Listar
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <hr className="my-3" />

            <li className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#compra-collapse"
                aria-expanded={areaContrato ? "true" : "false"}
              >
                Contrato
              </button>
              <div
                className={`collapse ${areaContrato ? "show" : ""}`}
                id="compra-collapse"
              >
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li className="nav-item">
                    <Link
                      to="/cadastrar-contrato"
                      className="nav-link d-inline-flex text-decoration-none rounded text-dark"
                    >
                      Cadastrar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/listar-contrato"
                      className="nav-link d-inline-flex text-decoration-none rounded text-dark"
                    >
                      Listar
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;