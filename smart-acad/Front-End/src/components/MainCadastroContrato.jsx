import axios from "axios";
import { useState } from "react";
import { notificacao, notificacaoErroCliente, notificacaoSucessoCliente, ErroContrato, ListarCliente } from "./Notificacoes";

function MainCadastroContrato() {
  const [cod, setCod] = useState('');
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState(''); // Novo state para status
  const [servicos, setServicos] = useState('1');
  const [planos, setPlanos] = useState('1');
  const [pagamento, setPagamento] = useState('1');

  const token = localStorage.getItem('token');

  async function cadastrarContrato(event) {
    event.preventDefault();
    
    let contrato = {
      cod: cod,
      nome: nome,
      status: status, // Adicionado status ao objeto
      servicos: servicos,
      planos: planos,
      pagamento: pagamento
    }

    console.log(contrato);

    try {
      let response = await fetch('http://localhost:3001/cadastroContrato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contrato)
      });

      if (response.ok) {
        notificacaoSucessoCliente();
        // Limpar formulário
        setCod('');
        setNome('');
        setStatus('');
        setServicos('1');
        setPlanos('1');
        setPagamento('1');
      }
    } catch (erro) {
      notificacaoErroCliente();
      console.error('Erro:', erro);
    }
  }

  async function buscarCliente() {
    if (cod) {
      try {
        const resposta = await axios.get(`http://localhost:3001/api/listarporid/${cod}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        console.log(resposta.data);
        
        if (resposta.data) {
          setNome(resposta.data.nome + " " + resposta.data.sobrenome);
          setStatus(resposta.data.status || 'Ativo'); // Definir status padrão
          ListarCliente();
        }
      } catch (erro) {
        ErroContrato();
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
                    <input value={cod} onBlur={() => buscarCliente()} 
                      onChange={(e) => setCod(e.target.value)} type="text" 
                      className="form-control" id="cod" name="cod" />
                  </div>
                  
                  <div className="col-md-7">
                    <label htmlFor="nome" className="form-label">Nome completo:</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} 
                      type="text" className="form-control" id="nome" name="nome" />
                  </div>
                  
                  <div className="col-md-3">
                    <label htmlFor="status" className="form-label">Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}
                      className="form-control" id="status" name="status" required>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </select>
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
                    <select value={planos} onChange={(e) => setPlanos(e.target.value)} 
                      className="form-control" id="planos" name="planos">
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