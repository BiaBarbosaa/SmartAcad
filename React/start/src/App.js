import Home from "./components/paginas/home/Home";
import Login from "./components/paginas/Login/Login";
import NotFound from "./components/paginas/404/NotFound";
<<<<<<< HEAD
=======
import CadastrarAluno from "./components/paginas/aluno/CadastrarAluno";
import ListarAluno from "./components/paginas/aluno/ListarALuno";
import EditarAluno from "./components/paginas/Login/Login";
>>>>>>> c0b2b06cab1952100675ffb2503a5f35fd325ada
import { Route, Routes } from "react-router-dom";
import AlternadorDeTema from  "./components/AlternadorDeTema"
import CadastrarCliente from "./components/paginas/cliente/CadastrarCliente"
import ListarCliente from "./components/paginas/cliente/ListarCliente"
import EditarCliente from "./components/paginas/cliente/EditarCliente"

import CadastrarContrato from "./components/paginas/contrato/CadastrarContrato"
import ListarContrato from "./components/paginas/contrato/ListarContrato"
import EditarContrato from "./components/paginas/contrato/EditarContrato"





function App() {
  return (
    <>
        <AlternadorDeTema />
        <Routes>
<<<<<<< HEAD
          <Route path="/listar-cliente" element={<ListarCliente/>} />
          <Route path="/cadastrar-cliente" element={<CadastrarCliente/>} />
          <Route path="/editar-cliente/:id" element={<EditarCliente/>} />

          <Route path="/listar-contrato" element={<ListarContrato/>} />
          <Route path="/cadastrar-contrato" element={<CadastrarContrato/>} />
          <Route path="/editar-contrato/:id" element={<EditarContrato/>} />
=======
          <Route path="/login" element={<Login/>} />
          <Route path="/listar-aluno" element={<ListarAluno/>} />
          <Route path="/cadastrar-aluno" element={<CadastrarAluno/>} />
          <Route path="/editar-aluno/:id" element={<EditarAluno/>} />
>>>>>>> c0b2b06cab1952100675ffb2503a5f35fd325ada
          {/*Rota para página 404*/}
          <Route path="*" element={<NotFound/>} />
          {/*Rota para página home*/}
          <Route path="/" element={<Home/>} />
        </Routes>
    </>
  );
}

export default App;
