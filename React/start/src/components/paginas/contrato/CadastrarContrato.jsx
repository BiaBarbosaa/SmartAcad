import './contrato.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import MainCadastroContrato from '../../MainCadastroContrato'

function CadastrarContrato() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastroContrato />

                </div>
            </div>
        </ >
    );
}
export default CadastrarContrato;