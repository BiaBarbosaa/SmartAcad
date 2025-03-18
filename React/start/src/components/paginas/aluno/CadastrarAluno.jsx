/* Usando CSS como modulo */
//import style from './Home.module.css'

import './Aluno.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import MainCadastroAluno from '../../MainCadastroAluno'

function CadastrarAluno() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastroAluno />

                </div>
            </div>
        </ >
    );
}
export default CadastrarAluno;