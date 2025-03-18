import Home from "./components/paginas/home/Home";
import Login from "./components/paginas/Login/Login";
import NotFound from "./components/paginas/404/NotFound";
import CadastrarAluno from "./components/paginas/aluno/CadastrarAluno";
import ListarAluno from "./components/paginas/aluno/ListarALuno";
import EditarAluno from "./components/paginas/Login/Login";
import { Route, Routes } from "react-router-dom";
import AlternadorDeTema from  "./components/AlternadorDeTema"


function App() {
  return (
    <>
        <AlternadorDeTema />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/listar-aluno" element={<ListarAluno/>} />
          <Route path="/cadastrar-aluno" element={<CadastrarAluno/>} />
          <Route path="/editar-aluno/:id" element={<EditarAluno/>} />
          {/*Rota para página 404*/}
          <Route path="*" element={<NotFound/>} />
          {/*Rota para página home*/}
          <Route path="/" element={<Home/>} />
        </Routes>
    </>
  );
}

export default App;
