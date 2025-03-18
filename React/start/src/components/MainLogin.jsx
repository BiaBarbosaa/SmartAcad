import './paginas/Login/Login.css'
import React from 'react'; 


function MainLogin() {
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                </div>

                <div className="container">
                    <div className="form-container">
                        <form className="form">
                            <h2 className="title">Bem-vindo de volta!</h2>
                            <label>Insira suas credenciais para acessar sua conta</label>

                            <label>Email</label>
                            <input className="input" type="email" placeholder="Digite seu email" />
                            <label>Senha</label>
                            <input className="input" type="password" placeholder="Digite sua senha" />
                            <button className="button">Login</button>
                        </form>
                    </div>
                    <div className="image-container"></div>
                </div>
            </main>
        </>
    );
}
export default MainLogin;