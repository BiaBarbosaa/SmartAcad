import './contrato.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import MainEditarContrato from '../../MainEditarContrato'

function EditarContrato() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEditarContrato />

                </div>
            </div>
        </ >
    );
}
export default EditarContrato;