import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { notificacao, notificacaoErro, notificacaoSucesso } from "./Notificacoes";

function MainEditarAluno() {

    const { id } = useParams()

    // useEffect executa um bloco de código react apenas uma
    // vez ao carregar a página
    {/* 
    executa verificação a todo momento na página
    tendo uma mudança atualiza a página
     useEffect(() => {
        getAluno();
    })

    */}
 {/* 
    executa apenas uma vez ao carregar a página
     useEffect(() => {
        getAluno();
    }, [])

    */}
    useEffect(() => {
        getAluno(); // executa apenas uma vez ao carregar a página
    },[])

    async function getAluno() {

        try {
            let consulta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let dadosAluno = await consulta.json()
            setNome(dadosAluno.name)
            notificacaoSucesso()
            // setSobrenome(dadosAluno.sobrenome)
            // setCep(dadosAluno.cep)
            // setLogradouro(dadosAluno.logradouro)
            // setComplemento(dadosAluno.complemento)
            // setBairro(dadosAluno.bairro)
            // setLocalidade(dadosAluno.localidade)
            // setEstado(dadosAluno.estado)
            // setUf(dadosAluno.uf)
            // setIdade(dadosAluno.idade)
            // setCpf(dadosAluno.cpf)
            // setEmail(dadosAluno.email)
            // setRm(dadosAluno.rm)
            // setTelefone(dadosAluno.telefone)
        } catch (erro) {
            console.log(`Erro ao buscar dados: ${erro}`);
            notificacaoErro();
        }
    }

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [estado, setEstado] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [uf, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [rm, setRm] = useState('');
    const [telefone, setTelefone] = useState('');

    async function editarAluno(event) {
        // Evita que a página seja recarregada ao submeter o formulário
        event.preventDefault();
        console.log(`O formulário foi enviado`);

        // construindo o objeto aluno
        let aluno = {
            nome: nome,
            sobrenome: sobrenome,
            cep: cep,
            logradouro: logradouro,
            complemento: complemento,
            bairro: bairro,
            localidade: localidade,
            estado: estado,
            uf: uf,
            idade: idade,
            cpf: cpf,
            email: email,
            rm: rm,
            telefone: telefone
        }

        // transformou o objeto aluno em formato de string JSON
        aluno = JSON.stringify(aluno);
        // enviamos de forma assíncrona para o backend
        try {
            let cadastro = await fetch('http://localhost:8081/editarAluno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: aluno
            })
            if (cadastro.sucesso) {
                alert(`Aluno cadastrado com sucesso`);
            }

        } catch (erro) {
            alert(`Erro ao cadastrar aluno: ${erro}`);
        }

    }

    // Chamada a dados externos via API de forma assíncrona }
    async function chamarCep(event) {

        if (event.length === 8) {
            try {
                let resposta = await fetch(`https://viacep.com.br/ws/${event}/json/ `);
                let dadosRecebidos = await resposta.json();
                console.log(dadosRecebidos.logradouro);
                setLogradouro(dadosRecebidos.logradouro);
                setComplemento(dadosRecebidos.complemento);
                setBairro(dadosRecebidos.bairro);
                setLocalidade(dadosRecebidos.localidade);
                setEstado(dadosRecebidos.estado);
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
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Editar Aluno</h1>
                </div>

                <form onSubmit={editarAluno} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Sobrenome</label>
                        <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} type="text" className="form-control" id="sobrenome" name="sobrenome" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input value={cep} onBlur={(e) => chamarCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="number" className="form-control" id="cep" name="cep" maxLength={8} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="logradouro" className="form-label">Endereço</label>
                        <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control" id="logradouro" name="logradouro" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="complemento" className="form-label">Complemento</label>
                        <input value={complemento} onChange={(e) => setComplemento(e.target.value)} type="text" className="form-control" id="complemento" name="complemento" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input value={bairro} onChange={(e) => setBairro(e.target.value)} type="text" className="form-control" id="bairro" name="bairro" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="localidade" className="form-label">Cidade</label>
                        <input value={localidade} onChange={(e) => setLocalidade(e.target.value)} type="text" className="form-control" id="localidade" name="localidade" />
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control" id="estado" name="estado" />
                    </div>
                    <div className="col-md-1">
                        <label htmlFor="uf" className="form-label">Uf</label>
                        <input value={uf} onChange={(e) => setUf(e.target.value)} type="text" className="form-control" id="uf" name="uf" />
                    </div>
                    <div className="col-1">
                        <label htmlFor="idade" className="form-label">Idade</label>
                        <input value={idade} onChange={(e) => setIdade(e.target.value)} type="text" className="form-control" id="idade" name="idade" placeholder="" />
                    </div>
                    <div className="col-2">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control" id="cpf" name="cpf" placeholder="" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" name="email" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="rm" className="form-label">RM</label>
                        <input value={rm} onChange={(e) => setRm(e.target.value)} type="text" className="form-control" id="rm" name="rm" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputCity" className="form-label">Telefone</label>
                        <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control" id="inputCity" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Cadastrar Aluno</button>
                    </div>
                </form>
            </main>
        </>
    )
}
export default MainEditarAluno;