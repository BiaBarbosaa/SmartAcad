/* Usando CSS como modulo */
//import style from './Home.module.css'

import './Aluno.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import MainEditarAluno from '../../MainEditarAluno'

function EditarAluno() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEditarAluno />

                </div>
            </div>
        </ >
    );
}
export default EditarAluno;