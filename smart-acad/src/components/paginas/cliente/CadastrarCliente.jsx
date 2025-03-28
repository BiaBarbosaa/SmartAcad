import './cliente.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import MainCadastroCliente from '../../MainCadastroCliente'

function CadastrarCliente() {

return(
<>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastroCliente />

                </div>
            </div>
        </ >
);

}
export default CadastrarCliente;
