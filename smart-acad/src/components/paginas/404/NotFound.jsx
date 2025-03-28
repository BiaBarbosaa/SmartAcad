import { Link } from "react-router-dom";
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

                     

                        <div className="error-container">
                            <div className="lottie-animation"></div>
                            <div className="error-content">
                                <h1>404</h1>
                                <p>Oops! A página que você está procurando não existe.</p>
                                <Link to="/" class="btn btn-primary">Voltar</Link>
                            </div>
                        </div>                   
                         </main>

                </div>
            </div>
        </>
    )
}
export default NotFound;