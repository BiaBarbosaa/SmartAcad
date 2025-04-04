import { Link } from "react-router-dom";

function MainListarContrato() {
    let contratos = [
        { 
            id: '1', 
            nome: 'Robson',
            sobrenome: 'Silva',
            contacto: 'robson@email.com',
            telefone: '(11) 9999-8888'
        },
        { 
            id: '2', 
            nome: 'Galileu',
            sobrenome: 'Galilei',
            contacto: 'galileu@email.com',
            telefone: '(22) 7777-6666'
        },
        { 
            id: '3', 
            nome: 'Elliot',
            sobrenome: 'Alderson',
            contacto: 'elliot@email.com',
            telefone: '(33) 5555-4444'
        },
    ]

    function excluirContrato(id) {
        console.log(`O usuário deseja excluir o cliente: ${id}`);
    }

    return (
        <main className="BBcor-rosa col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Listar contrato</h1>
            </div>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Cod cliente</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {contratos.map((contrato) => (
                        <tr key={contrato.id}>
                            <td>{contrato.id}</td>
                            <td>{contrato.nome}</td>
                            <td>{contrato.sobrenome}</td>
                            <td>{contrato.contacto}</td>
                            <td>{contrato.telefone}</td>
                            <td>
                               
                                <Link to={`/editar-contrato/${contrato.id}`}>
                                    <i className="guiListarCor bi bi-pencil-square me-3"></i>
                                </Link>
                                <i onClick={() => excluirContrato(contrato.id)} 
                                   className="bi bi-trash me-3" 
                                   style={{ cursor: 'pointer' }}>
                                </i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default MainListarContrato;
