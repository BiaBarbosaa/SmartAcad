import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { notificacao, notificacaoErro, notificacaoSucesso } from "./Notificacoes";


function MainEditarCliente() {

    const { id } = useParams()
    const navigate = useNavigate(); 

    useEffect(() => {
        getCliente();
    }, [])

    async function getCliente() {

        try {
            let consulta = await fetch(`http://localhost:3001/api/listarClientePorId/${id}`)
            let dadosCliente = await consulta.json()
            setNome(dadosCliente.nome)
            setSobrenome(dadosCliente.sobrenome)
            setCep(dadosCliente.cep)
            setLogradouro(dadosCliente.logradouro)
            setComplemento(dadosCliente.complemento)
            setUf(dadosCliente.uf)
            setIdade(dadosCliente.idade)
            setCpf(dadosCliente.cpf)
            setEmail(dadosCliente.email)
            setTelefone(dadosCliente.telefone)
            setGenero(dadosCliente.genero)
            setObservacao(dadosCliente.observacao)
            notificacaoSucesso()
        } catch (erro) {
            console.log(`Erro ao buscar dados: ${erro}`);
            notificacaoErro();
        }
    }
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [uf, setUf] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGenero] = useState('');
    const [observacao, setObservacao] = useState('');
    const [telefone, setTelefone] = useState('');



    async function editarCliente(event) {
        // Evita que a página seja recarregada ao submeter o formulário
        event.preventDefault();
        console.log(`O formulário foi enviado`);

        // construindo o objeto aluno
        let cliente = {
            nome: nome,
            sobrenome: sobrenome,
            cep: cep,
            cidade: cidade,
            logradouro: logradouro,
            complemento: complemento,
            uf: uf,
            idade: idade,
            cpf: cpf,
            email: email,
            genero: genero,
            observacao: observacao,
            telefone: telefone
        }
        // transformou o objeto aluno em formato de string JSON
        cliente = JSON.stringify(cliente);
        // enviamos de forma assíncrona para o backend
        try {
            let cadastro = await fetch('http://localhost:3001/api/atualizarCliente/:id', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: cliente
            })
            if (cadastro.sucesso) {
                alert(`cliente atualizado com sucesso`);
            }

        } catch (erro) {
            alert(`Erro ao atualizar cliente: ${erro}`);
        }

    }
    // Chamada a dados externos via API de forma assíncrona }
    async function chamarCep(event) {

        if (event.length === 8) {
            try {
                let resposta = await fetch(`https://viacep.com.br/ws/${event}/json/ `);
                let dadosRecebidos = await resposta.json();
                console.log(dadosRecebidos.logradouro);
                setComplemento(dadosRecebidos.complemento);
                setLogradouro(dadosRecebidos.logradouro);
                setCidade(dadosRecebidos.localidade);
                setUf(dadosRecebidos.uf);
            } catch (erro) {
                console.log(`Erro em buscar o cep: ${erro}`);
            }

        } else {
            alert('CEP com numero de caracteres inválidos');
        }
    }

    return (
        <>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-fundo">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2 className="">Editar cadastro de clientes</h2>
                </div>

                <div className="BB1formulario">
                    <div className="BBconteudo-forms">

                        <form onSubmit={editarCliente} className="row g-3">
                            <h5>Dados pessoais</h5>
                            <div className="col-md-4">
                                <label htmlFor="nome" className="form-label">Nome:</label>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" />
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="inputPassword4" className="form-label">Sobrenome:</label>
                                <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} type="text" className="form-control" id="sobrenome" name="sobrenome" />
                            </div>
                            <div className="col-1 me-2">  
                                <label htmlFor="genero" className="form-label">Gênero:</label>                                <select
                                    value={genero || ''} 
                                    onChange={(e) => setGenero(e.target.value)}
                                    className="form-control"
                                    id="genero"
                                    name="genero"
                                >
                                    <option value="" disabled></option>
                                    <option value="F">F</option>
                                    <option value="M">M</option>
                                </select>
                            </div>

                            <div className="col-1 me-2">  
                            <label htmlFor="idade" className="form-label">Idade:</label>
                            <input value={idade} onChange={(e) => setIdade(e.target.value)} type="text" className="form-control" id="idade" name="idade" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputCity" className="form-label">Telefone:</label>
                                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="cpf" className="form-label">CPF:</label>
                                <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control" id="cpf" name="cpf" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" name="email" />
                            </div>
                            <h5>Endereço</h5>
                            <div className="col-md-2">
                                <label htmlFor="cep" className="form-label">CEP:</label>
                                <input value={cep} onBlur={(e) => chamarCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="number" className="form-control" id="cep" name="cep" maxLength={8} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="logradouro" className="form-label">Endereço:</label>
                                <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control" id="logradouro" name="logradouro" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="complemento" className="form-label">Complemento:</label>
                                <input value={complemento} onChange={(e) => setComplemento(e.target.value)} type="text" className="form-control" id="complemento" name="complemento" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="cidade" className="form-label">Cidade:</label>
                                <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control" id="cidade" name="cidade" />
                            </div>
                            <div className="col-md-1">
                                <label htmlFor="uf" className="form-label">UF:</label>
                                <input value={uf} onChange={(e) => setUf(e.target.value)} type="text" className="form-control" id="uf" name="uf" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="observacao" className="form-label">Observação:</label>
                                <textarea
                                    value={observacao}
                                    onChange={(e) => setObservacao(e.target.value)}
                                    className="form-control"
                                    id="observacao"
                                    name="observacao"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="col-md-12"> 
                                <div className="container-botao">
                                    <button type="submit" className="btn btn-primary botao-editar">
                                        <i className="bi bi-box-arrow-up"></i> Editar cliente
                                    </button>
                                    <Link
                                        type="button"
                                        className="btn btn-primary botao-cancelar"
                                        to={'/listar-cliente'}
 
                                    >
                                        Cancelar
                                    </Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </main>
        </>
    )
}
export default MainEditarCliente;