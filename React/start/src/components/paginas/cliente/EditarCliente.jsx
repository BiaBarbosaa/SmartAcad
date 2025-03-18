import './cliente.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import MainEditarCliente from '../../MainEditarCliente'

function EditarCliente() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEditarCliente />

                </div>
            </div>
        </ >
    );
}
export default EditarCliente;