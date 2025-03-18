import React from "react";
import { Link, useLocation } from "react-router-dom";
function Sidebar() {
  const pagina = useLocation();
  /*
    Verifica se a rota atual pertence a uma das rotas rastreadas abaixo
  */
 
  let possuiEditarUrl = window.location.pathname;

  const areaCliente =
    pagina.pathname === "/cadastrar-cliente" ||
    pagina.pathname === "/listar-cliente" ||
    possuiEditarUrl.match(/editar-cliente/)

    const areaContrato =
    pagina.pathname === "/cadastrar-contrato" ||
    pagina.pathname === "/listar-contrato" ||
    possuiEditarUrl.match(/editar-contrato/)



  return (
    <div className="sidebar sidebar2 border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
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
            <li className="nav-item">
            <button
              className="btn btn-link-sidebar d-inline-flex align-items-center rounded border-0 collapsed">
              <Link className="txt-btn-link-sidebar ms-4 align-items-center text-dark" to="/">
                <i className="text- icons-sidebar d-inline-flex me-1 bi bi-house-door-fill text-dark"></i> Home
                </Link>
            </button>
            </li>
            <hr className="my-3" />
            

            <li className="mb-1">
              <button
                className=" ms-1 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
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
                className=" ms-1 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
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
                      to="/cadastrar-compra"
                      className="nav-link d-inline-flex text-decoration-none rounded text-dark"
                    >
                      Cadastrar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/listar-compra"
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
