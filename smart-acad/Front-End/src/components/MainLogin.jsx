import React, {useState} from "react"; 
import { Link, useNavigate } from "react-router-dom";
import './paginas/Login/Login.css'
import axios from 'axios';

function MainLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroMensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {email, senha});

            console.log(response.data.token);

            if(response.status === 200) {
                const accessToken = response.data.token;
                
                localStorage.setItem('token',accessToken);

                navigate('/home')
            }
        }
        catch(error) {
            setMensagem('Email ou senha incorretos')
        }
    }

    return (
        <div className="container-fluid-2">
            <div className="form-container">
                <form className="form" onSubmit={handleLogin}>
                    {erroMensagem && <p className="error-message">{erroMensagem}</p>}
                    <h1 className="title">Login</h1>
                    <p className="subtitle">Insira suas credenciais para acessar sua conta</p>

                    <div className="input-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                        />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input 
                            type="password" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <button className="button">Login</button>
                    
                    <p className="register-link">Não tem uma conta? <Link to="/cadastro">Cadastrar</Link>
                    </p>
                    <p className="register-link">Esqueceu sua senha? <Link to="/resetarsenha">Resetar</Link></p>
                </form>
            </div>
            <div className="image-container"></div>
        </div>
    );
}
export default MainLogin;