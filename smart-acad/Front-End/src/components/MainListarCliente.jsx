import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const MainListarCliente = () => {
    const [clientes, setClientes] = useState([]);
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
                setClientes(response.data.sort((a, b) => a.nome.localeCompare(b.nome)));
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
                setClientes(clientes.filter(clientes => clientes.id !== id));
            } catch (error) {
                alert("Erro ao excluir o produto.");
            }
        }
    };

    if (loading) return <div>Carregando produtos...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className="BBcor-rosa col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Listar cliente</h1>
                <Link to="/cadastrar-cliente" className="btn btn-danger">
                    <i className="bi bi-plus-circle me-2"></i>Novo Cliente
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
                            {clientes.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.sobrenome}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.status}</td>

                                    <td className="actions">
                                        <Link
                                            onClick={() => navigate(`/admin/editarproduto/${cliente.id}`)}
                                            title="Editar"
                                            className="icon-button"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(cliente.id)}
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