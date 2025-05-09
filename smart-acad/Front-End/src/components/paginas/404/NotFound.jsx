import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
          
                <div className="error-container">
                    <div className="lottie-animation"></div>
                    <div className="error-content">
                        <h1>404</h1>
                        <p>Oops! A página que você está procurando não existe.</p>
                        <Link to="/home" class="btn btn-danger">Voltar</Link>
                    </div>
                </div>
        

        </>
    )
}
export default NotFound;