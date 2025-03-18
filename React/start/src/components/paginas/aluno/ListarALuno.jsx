import MainListarAluno from "../../MainListarAluno";
import Navbar from "../../template/Navbar";
import Sidebar from "../../template/Sidebar";

function ListarAluno() {
    return (
        <>
           <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainListarAluno />

                </div>
            </div>

        </>
    )
}
export default ListarAluno;