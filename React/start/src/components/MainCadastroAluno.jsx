import { useState } from "react";

function MainCadastroAluno() {
    {/* Aqui colocamos nosso código JS */ }

    {/* Criando uma variável string vazia */ }
    {/*  const [nome, setNome] = useState(''); */ }

    {/* Criando uma variável como Array */ }
    {/* const [nome, setNome] = useState([]); */ }

    {/* Criando uma variável como objetos JSON */ }
    {/*const [nome, setNome] = useState({}); */ }

    { /* 
let nomes = ['SENAI','SESI','Garça'];

//Vetor:
let nomes2 = [
{nome: 'SENAI'},
{nome: 'SESI'},
{nome: 'Garça'}
]

for(let i = 0; i < nomes2.length; i++){
console.log(nomes2[i].nome);
}
*/}

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [rm, setRm] = useState('');
    const [telefone, setTelefone] = useState('');


    // Chamada a dados externos via API de forma síncrona 


    //vai ficar bloqueado ate nao retornar algo

    //   function chamarCep(event) {
    //     {/* Buscando dados externos com fetch */ }
    //     fetch(`https://viacep.com.br/ws/${event}/json/ `)
    //         .then((resposta) => resposta.json())
    //         .then((dadosRecebidos) => {
    //             console.log(dadosRecebidos.logradouro);
    //             setLogradouro(dadosRecebidos.logradouro);
    //             setComplemento(dadosRecebidos.complemento);
    //             setBairro(dadosRecebidos.bairro);
    //             setLocalidade(dadosRecebidos.localidade);
    //             setEstado(dadosRecebidos.estado);
    //             setUf(dadosRecebidos.uf);

    //         })
    //         .catch((erro) => {
    //             console.log(`Erro em buscar o cep: ${erro}`);
    //         })
    // }


    async function cadastrarAluno(event) {
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
            let cadastro = await fetch('http://localhost:8081/cadastroAluno', {
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

                //await = espero o link retornar algo
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
                    <h1 className="h4">Cadastrar Aluno</h1>
                </div>

                <form onSubmit={cadastrarAluno} className="row g-3">
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
export default MainCadastroAluno;