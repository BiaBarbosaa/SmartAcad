import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './paginas/Cadastro/cadastro.css';
import axios from 'axios';

function MainCadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [regra, setRegra] = useState('usuario');
    const [erroMensagem, setErroMensagem] = useState('');
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/cadastrar', {
                nome,
                sobrenome,
                email,
                senha,
                regra
            });

            if(response.status === 201) {
                alert('Cadastro realizado com sucesso');
                navigate('/login');
              
            }
        } catch(error) {
            alert('Erro ao cadastrar. Verifique os dados.');
            
        }
    };

    return (
        <div className="container-fluid-2">
            <div className="form-container">
                <form className="form" onSubmit={handleCadastro}>
                    {erroMensagem && <p className="error-message">{erroMensagem}</p>}
                    <h1 className="title">Cadastro</h1>
                    <div className="input-group">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div className="input-group">
                        <label>Sobrenome</label>
                        <input 
                            type="text" 
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            placeholder="Digite seu sobrenome"
                        />
                    </div>

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

                    <div className="input-group">
                        <label>Regra</label>
                        <select
                            value={regra}
                            onChange={(e) => setRegra(e.target.value)}
                        >
                            <option value="usuario">Usuário</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </div>

                    <button className="button">Cadastrar</button>
                    
                    {/* <p className="register-link">Já tem uma conta? <Link to="/login">Login</Link></p> */}
                </form>
            </div>
            <div className="image-container"></div>
        </div>
    );
}

export default MainCadastro;