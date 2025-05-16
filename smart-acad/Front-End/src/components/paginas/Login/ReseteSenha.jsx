import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetSenha = () => {
const navigate = useNavigate(); 
    
    const [email, setEmail] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    
    const handleResetSenha = async () => {
        if (!email) {
            alert("Por favor, insira seu email.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/atualiza", {email});
            
            if (response.status === 200) {
                setMostrarFormulario(true);
            } else if (response.status === 404) {
                alert("Email não encontrado. Por favor, verifique o email digitado.");
            }
        } catch (error) {
            alert("Erro ao resetar a senha");
        }
    };
    
    const validarSenhas = () => {
        if (!novaSenha || !confirmarSenha) {
            alert("Todos os campos são obrigatórios");
            return false;
        }
        
        if (novaSenha !== confirmarSenha) {
            alert("As senhas não coincidem");
            return false;
        }
        
        return true;
    };

    const handleTrocarSenha = async () => {
        if (!validarSenhas()) {
            return;
        }

        try {
            const response = await axios.patch("http://localhost:3001/atualizasenha", {
                email,
                senha: novaSenha,
            });

            if (response.status === 200) {
                alert("Senha trocada com sucesso.");
                navigate("/login"); 
            } else {
                alert("Erro ao trocar a senha.");
            }
        } catch (error) {
            alert("Erro ao trocar a senha");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h4 className="text-center mb-3">Redefinir Senha</h4>

                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {!mostrarFormulario && (
                    <button className="btn btn-danger w-100 mb-2" onClick={handleResetSenha}>
                        Resetar Senha
                    </button>
                )}

                {mostrarFormulario && (
                    <>
                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Nova Senha"
                            value={novaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                        />
                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Confirmar Senha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                        <button className="btn btn-danger w-100" onClick={handleTrocarSenha}>
                            Trocar Senha
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};


const styles = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
    },
    card: {
        width: "320px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
};

export default ResetSenha;