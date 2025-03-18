import MainListarCliente from "../../MainListarCliente";
import Navbar from "../../template/Navbar";
import Sidebar from "../../template/Sidebar";

function ListarCliente() {
    return (
        <>
           <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainListarCliente />

                </div>
            </div>

        </>
    )
}
export default ListarCliente;