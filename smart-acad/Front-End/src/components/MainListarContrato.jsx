import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';



const MainListarCliente = () => {
    const [contratos, setContratos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem('token'); //obtem o token salvo

    console.log(token);

    useEffect(() => {//fica carregando a pagina
        axios.get('http://localhost:3001/api/listarCliente', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(response => {
                setContratos(response.data.sort((a, b) => a.nome.localeCompare(b.nome)));
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError('Erro ao carregar os produtos');
                setLoading(false);
            });
    }, [token]);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir este produto?")) {
            try {
              
                await axios.delete(`http://localhost:3001/api/deletarproduto/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                    
                });
                setContratos(contratos.filter(contratos => contratos.id !== id));
            } catch (error) {
             
            }
        }
    };

    if (loading) return <div>Carregando produtos...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className="BBcor-rosa col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Listar contrato</h1>
                <Link to="/cadastrar-contrato" className="btn btn-danger">
                    <i className="bi bi-plus-circle me-2"></i>Novo Contrato
                </Link>
            </div>

            <div className="table-responsive">
                <div className="table-container table-responsive">
                    <table className="custom-table w-100">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>CPF</th>
                                <th>Status</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contratos.map((contarto) => (
                                <tr key={contarto.id}>
                                    <td>{contarto.id}</td>
                                    <td>{contarto.nome}</td>
                                    <td>{contarto.sobrenome}</td>
                                    <td>{contarto.telefone}</td>
                                    <td>{contarto.email}</td>
                                    <td>{contarto.cpf}</td>
                                    <td>{contarto.status}</td>

                                    <td className="actions">
                                        <Link
                                            onClick={() => navigate(`/admin/editarproduto/${contarto.id}`)}
                                            title="Editar"
                                            className="icon-button"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(contarto.id)}
                                            title="Excluir"
                                            className="icon-button"
                                        >
                                            <i class="bi bi-trash2-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default MainListarCliente;