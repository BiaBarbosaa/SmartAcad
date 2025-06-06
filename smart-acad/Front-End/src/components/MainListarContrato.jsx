import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';



const MainListarCliente = () => {
    const [contratos, setContratos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem('token'); //obtem o token salvo

    useEffect(() => {//fica carregando a pagina
        axios.get('http://localhost:3001/api/listarcontrato', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(response => {
                console.log(response.data)
                setContratos(response.data.sort((a, b) => a.Nome_completo.localeCompare(b.Nome_completo)));
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

                await axios.delete(`http://localhost:3001/api/deletarcontrato/${id}`, {
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
                <Link to="/cadastrar-cliente" className="btn listarcustom">
                    <i className="bi bi-plus-circle me-2 "></i>Novo Contrato
                </Link>
            </div>

            <div className="table-responsive">
                <div className="table-container table-responsive">
                    <table className="custom-table w-100">
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th>Nome Completo</th>
                                <th>Pagamento</th>
                                <th>Serviço</th>
                                <th>Plano</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contratos.map((contrato) => (
                                <tr key={contrato.id}>
                                    <td>{contrato.ContratoID}</td>
                                    <td>{contrato.Nome_completo}</td>
                                    <td>{contrato.Pagamento}</td>
                                    <td>{contrato.Servico}</td>
                                    <td>{contrato.Plano}</td>


                                    <td className="actions">
                                        <Link
                                            onClick={() => navigate(`/admin/editarproduto/${contrato.id}`)}
                                            title="Editar"
                                            className="icon-button"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(contrato.id)}
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