import Navbar from "../../template/Navbar";
import Sidebar from "../../template/Sidebar";
function NotFound() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                        <img src="https://static.criandoblogs.net/wp/wp-content/uploads/2022/12/pagina-de-erro-404-1000x563.jpg" alt="" srcset="" />
                    </main>

                </div>
            </div>
        </>
    )
}
export default NotFound;