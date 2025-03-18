import MainListarContrato from "../../MainListarContrato";
import Navbar from "../../template/Navbar";
import Sidebar from "../../template/Sidebar";

function ListarContrato() {
    return (
        <>
           <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainListarContrato />

                </div>
            </div>

        </>
    )
}
export default ListarContrato;