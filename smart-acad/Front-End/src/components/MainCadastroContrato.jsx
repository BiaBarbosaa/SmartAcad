import axios from "axios";
import { useState } from "react";
function MainCadastroContrato() {

  const [cod, setCod] = useState('');
  const [nome, setNome] = useState('');
  const [servicos, setServicos] = useState('');
  const [planos, setPlanos] = useState('');
  const [pagamento, setPagamento] = useState('');


  const token = localStorage.getItem('token'); //obtem o token salvo

  async function cadastrarContrato(event) {
    // Evita que a página seja recarregada ao submeter o formulário
    event.preventDefault();
    console.log(`O formulário foi enviado`);

    // construindo o objeto aluno
    let contrato = {
      cod: cod,
      nome: nome,
      servicos: servicos,
      planos: planos,
      pagamento: pagamento
    }
  
    contrato = JSON.stringify(contrato);
  
    try {
      let contratos = await fetch('http://localhost:8081/cadastroAluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: contrato
      })
      if (contratos.sucesso) {
        alert(`cliente cadastrado com sucesso`);
      }

    } catch (erro) {
      alert(`Erro ao cadastrar cliente: ${erro}`);
    }

  }
  async function buscarCliente() {

    console.log(cod)
    
    if (cod) {

      try {
        const resposta = await axios.get(`http://localhost:3001/listarporid/${cod}`, {
          headers: { 'Authorization': `Bearer ${token}` }
    });

        if (!resposta) {
          alert("Cliente não encontrado.");
        }else{
          setNome(resposta.data.nome + " " + resposta.data.sobrenome);
        }
       
      } 
      catch (erro) {
        console.log(erro);
        alert("Erro ao buscar cliente: " + erro.message);
      }
    }
  }

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-fundo ">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="">Cadastro de contrato</h2>
            </div>
        <div className="BB2formulario">
          <div className="BBconteudo-forms">
            <form onSubmit={cadastrarContrato} className="row g-3">

              <div className="BBarea-info">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label htmlFor="cod" className="form-label">Código do cliente:</label>
                    <input value={cod} onBlur={(e) => buscarCliente(e.target.value)} onChange={(e) => setCod(e.target.value)} type="text" className="form-control" id="cod" name="cod" />
                  </div>
                  <div className="col-md-10">
                    <label htmlFor="nome" className="form-label">Nome completo:</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" />
                  </div>
                </div>
              </div>

              <div className="areas">
                <div className="servicos">
                  <h5>Serviços adicionais</h5>
                  <div className="col-5">
                    <div className="BBarea-sub-titulo">
                      <label htmlFor="servicos" className="form-label">Serviços:</label>
                    </div>
                    <div className="BBareas-input">
                      <select
                        value={servicos}
                        onChange={(e) => setServicos(e.target.value)}
                        className="form-control"
                        id="servicos"
                        name="servicos"
                      >
                        <option value="1">Nutrição</option>
                        <option value="2">Personal</option>
                        <option value="3">Musculação</option>
                        <option value="4">Spinning</option>
                        <option value="5">Zumba</option>
                        <option value="6">Avaliação física</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="planos">
                  <h5>Tipos de planos</h5>
                  <div className="col-4">
                    <div className="BBarea-sub-titulo">
                      <label htmlFor="planos" className="form-label">Planos:</label>
                    </div>
                    <select
                      value={planos}
                      onChange={(e) => setPlanos(e.target.value)}
                      className="form-control"
                      id="planos"
                      name="planos"
                    >
                      <option value="1">Mensal</option>
                      <option value="2">Trimestral</option>
                      <option value="3">Anual</option>
                    </select>
                  </div>
                </div>

                <div className="pagamento">
                  <h5>Pagamento</h5>
                  <div className="col-4">
                    <div className="BBarea-sub-titulo">
                      <label htmlFor="pagamento" className="form-label">Forma de pagamento:</label>
                    </div>
                    <select
                      value={pagamento}
                      onChange={(e) => setPagamento(e.target.value)}
                      className="form-control"
                      id="pagamento"
                      name="pagamento"
                    >
                      <option value="1">Dinheiro</option>
                      <option value="2">Cartão</option>
                      <option value="3">Pix</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary botao-cadastrar">
                  <i className="bi bi-box-arrow-up"></i> Cadastrar contrato
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>


    </>
  )
}
export default MainCadastroContrato;
