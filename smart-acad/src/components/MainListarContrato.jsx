import { Link } from "react-router-dom";

function MainListarContrato() {

    let contratos = [
        { id: '1', nome: 'Robson' },
        { id: '2', nome: 'Galileu' },
        { id: '3', nome: 'Elliot' },
        
       
    ]

    function excluirContrato(id) {
        // Criar a função POST para excluir dados
        console.log(`O usuário deseja excluir o cliente: ${id}`);
    }



    return (
        <>
                        <main className="BBcor-rosa col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Listar Contrato</h1>
                </div>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Código:</th>
                            <th>Nome:</th>
                            <th>Telefone:</th>
                            <th>Email:</th>
                            <th>CPF:</th>
                            <th>Opções</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            contratos.map((contrato) => (
                                <tr key={contrato.id}>
                                    <td>{contrato.codigo}</td>
                                    <td>{contrato.nome}</td>
                                    <td>{contrato.telefone}</td>
                                    <td>{contrato.email}</td>
                                    <td>{contrato.cpf}</td>
                                    <td>{contrato.opcoes}</td>
                                    <td>
                                        <i onClick={() => excluirContrato(contrato.id)} className="bi bi-trash"></i>
                                        <Link to={`/editar-contrato/${contrato.id}`}><i className="bi bi-pencil-square"></i></Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </main>
        </>
    )
}
export default MainListarContrato;