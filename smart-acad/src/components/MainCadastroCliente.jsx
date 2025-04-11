import { useState } from "react";


function MainCadastroCliente() {

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



    async function cadastrarCliente(event) {
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
            let cadastro = await fetch('http://localhost:8081/cadastroAluno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: cliente
            })
            if (cadastro.sucesso) {
                alert(`cliente cadastrado com sucesso`);
            }


        } catch (erro) {
            alert(`Erro ao cadastrar cliente: ${erro}`);
        }

    }

    // Chamada a dados externos via API de forma assíncrona }
    async function chamarCep(event) {
        if (event.length === 8) {
            try {
                let resposta = await fetch(`https://viacep.com.br/ws/${event}/json/`);
                let dadosRecebidos = await resposta.json();

                // Verifique se a resposta da API contém as informações
                console.log(dadosRecebidos);

                // Ajustando para pegar o nome correto da cidade
                setComplemento(dadosRecebidos.complemento);
                setLogradouro(dadosRecebidos.logradouro);
                setCidade(dadosRecebidos.localidade); // Alterado para 'localidade'
                setUf(dadosRecebidos.uf);
            } catch (erro) {
                console.log(`Erro ao buscar o CEP: ${erro}`);
            }
        } else {
            alert('CEP com número de caracteres inválidos');
        }
    }

    return (
        <>

            {/* <main className="BBcor col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}


            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="BB1formulario">
        <div className="BBconteudo-forms">
            <form onSubmit={cadastrarCliente} className="row g-3">
                <h4>Cadastro de clientes</h4>
                <h5>Dados pessoais</h5>
                
                <div className="col-md-5">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" />
                </div>
                
                <div className="col-md-5">
                    <label htmlFor="inputPassword4" className="form-label">Sobrenome:</label>
                    <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} type="text" className="form-control" id="sobrenome" name="sobrenome" />
                </div>
                
                {/* Ajuste para os campos de gênero e idade */}
                <div className="col-md-2 col-6">
                    <label htmlFor="genero" className="form-label">Gênero:</label>
                    <select
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        className="form-control"
                        id="genero"
                        name="genero"
                    >
                        <option value="" disabled defaultValue></option>
                        <option value="F">F</option>
                        <option value="M">M</option>
                    </select>
                </div>
                
                <div className="col-md-2 col-6">
                    <label htmlFor="idade" className="form-label">Idade:</label>
                    <input value={idade} onChange={(e) => setIdade(e.target.value)} type="text" className="form-control" id="idade" name="idade" />
                </div>
                
                {/* Ajuste para o campo de telefone */}
                <div className="col-md-3 col-sm-6">
                    <label htmlFor="telefone" className="form-label">Telefone:</label>
                    <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control" id="telefone" />
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <label htmlFor="cpf" className="form-label">CPF:</label>
                    <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control" id="cpf" name="cpf" />
                </div>
                
                <div className="col-md-5">
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
                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary botao-cadastrar">
                        <i className="bi bi-box-arrow-up "></i> Cadastrar cliente
                    </button>
                </div>
            </form>
        </div>
    </div>
</main>
        </>
    )
}
export default MainCadastroCliente;
