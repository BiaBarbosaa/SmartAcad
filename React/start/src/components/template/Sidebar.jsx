import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const pagina = useLocation();

  /* 
    Verifica se a rota atual pertence a uma das rotas rastreadas abaixo
  */
  const paginaAtiva =
    pagina.pathname === "/cadastrar-aluno" ||
    pagina.pathname === "/listar-aluno";


  return (


    <div className="text-light sidebar border border-right col-md-3 col-lg-2 p-0 imagem-sidebar">

      <div
        className="offcanvas-md offcanvas-end "
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            SMART-ACAD
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
          
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto text-light">
        <li className="nav-item">
              <Link to="/" className="text-light teste text-dark nav-link d-flex align-items-center gap-2 active " aria-current="page">
          
                Dashboard
              </Link>
            </li>
            <hr className="my-3" />
          <ul className="nav flex-column   ">
         
            <li className="mb-1  ">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed "
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded={paginaAtiva ? "true" : "false"}
              >
                Cliente
              </button>
              <div
                className={`collapse ${paginaAtiva ? "show" : ""}`}
                id="dashboard-collapse"
              >
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
                  <li className="nav-item ">
                    <Link
                      to="/cadastrar-aluno"
                      className="nav-link d-inline-flex text-decoration-none rounded text-black "
                    >
                      Cadastrar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/listar-aluno"
                      className="nav-link d-inline-flex text-decoration-none rounded text-black "
                    >
                      <i className="bi bi-pencil-square"></i> Listar
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>


          <hr className="my-3" />
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-light" href="/">
                <svg className="bi"></svg>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
