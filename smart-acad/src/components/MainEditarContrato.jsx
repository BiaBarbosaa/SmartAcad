import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function MainEditarContrato() {

  const { id } = useParams()

  useEffect(() => {
    getContrato();
  }, [])

  async function getContrato() {

    try {
      let consulta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      let dadosContrato = await consulta.json()
      setCod(dadosContrato.cod)
      setNome(dadosContrato.nome)
      setServicos(dadosContrato.servicos)
      setPlanos(dadosContrato.planos)
      setPagamento(dadosContrato.pagamento)
    } catch (erro) {
      console.log(`Erro ao buscar dados: ${erro}`);
    }
  }

  const [cod, setCod] = useState('');
  const [nome, setNome] = useState('');
  const [servicos, setServicos] = useState('');
  const [planos, setPlanos] = useState('');
  const [pagamento, setPagamento] = useState('');

  async function editarContrato(event) {
    // Evita que a página seja recarregada ao submeter o formulário
    event.preventDefault();
    console.log(`O formulário foi enviado`);

    // construindo o objeto aluno
    let contrato = {
      cod, cod,
      nome: nome,
      servicos: servicos,
      planos: planos,
      pagamento: pagamento
    }
    // transformou o objeto aluno em formato de string JSON
    contrato = JSON.stringify(contrato);
    // enviamos de forma assíncrona para o backend
    try {
      let cadastro = await fetch('http://localhost:8081/editarAluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: contrato
      })
      if (cadastro.sucesso) {
        alert(`cliente cadastrado com sucesso`);
      }

    } catch (erro) {
      alert(`Erro ao cadastrar cliente: ${erro}`);
    }

  }

  return (
    <>
      <main className="fundo-branco col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="formulario">
          <div className="conteudo-forms">

            <form onSubmit={editarContrato} className="row g-3">
              <h4>Editar cadastro de contrato</h4>

              <div className="col-md-2">
                <label htmlFor="nome" className="form-label">Código do cliente:</label>
                <input value={cod} onChange={(e) => setCod(e.target.value)} type="text" className="form-control" id="cod" name="cod" />
              </div>
              <div className="col-md-10">
                <label htmlFor="inputPassword4" className="form-label">Nome completo:</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" />
              </div>
              <div className="areas">
                <div className="servicos">
                  <h5>Serviços adicionais</h5>
                  <div className="col-5">
                    <label htmlFor="servicos" className="form-label">Serviços:</label>
                    <select
                      value={servicos}
                      onChange={(e) => setServicos(e.target.value)}
                      className="form-control"
                      id="servicos"
                      name="servicos"
                    >
                      <option value="" selected disabled>Selecione...</option>
                      <option value="1">Nutrição</option>
                      <option value="2">Personal</option>
                      <option value="3">Avaliação Física</option>
                      <option value="4">Musculação</option>
                      <option value="5">Yoga</option>
                      <option value="6">Zumba</option>
                      <option value="7">Spinning</option>
                      <option value="8">Funcional</option>
                    </select>

                  </div>
                </div>
                <div className="planos">
                  <h5>Tipos de planos</h5>
                  <div className="col-4">
                    <label htmlFor="planos" className="form-label">Planos:</label>
                    <select
                      value={planos}
                      onChange={(e) => setPlanos(e.target.value)}
                      className="form-control"
                      id="planos"
                      name="planos"
                    >
                      <option value="" selected disabled>Selecione...</option>
                      <option value="1">Mensal</option>
                      <option value="2">Trimestral</option>
                      <option value="3">Anual</option>
                    </select>
                  </div>
                </div>
                <div className="pagamento">
                  <h5>Pagamento</h5>
                  <div className="col-4">
                    <label htmlFor="pagamento" className="form-label">Forma de pagamento:</label>
                    <select
                      value={pagamento}
                      onChange={(e) => setPagamento(e.target.value)}
                      className="form-control"
                      id="pagamento"
                      name="pagamento"
                    >
                      <option value="" selected disabled>Selecione...</option>
                      <option value="1">Dinheiro</option>
                      <option value="2">Cartão</option>
                      <option value="3">Pix</option>
                      <option value="4">Boleto</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="container-botao">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary botao-editar">
                    <i className="bi bi-box-arrow-up"></i> Editar cliente
                  </button>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary botao-cancelar">
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </main>

    </>
  )
}
export default MainEditarContrato;