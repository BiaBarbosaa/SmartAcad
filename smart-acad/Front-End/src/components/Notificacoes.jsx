//Funçao principal
export const notificacao = (tipo, mensagem, icon) => {
    window.Lobibox.notify(tipo, {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        sound: false,
        delayIndicator: true,
        icon: `${icon}`,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: mensagem
    });
}

//Funções auxiliares para chamadas diretas
export const notificacaoErro = (mensagem =
    "Erro ao buscar os alunos no banco de dados!") => {
    notificacao('error', mensagem, 'bi bi-x-circle-fill')
};

export const notificacaoSucesso = (mensagem =
    "Sucesso ao buscar os alunos no banco de dados!") => {
    notificacao('success', mensagem, 'bi bi-check')
};

export const notificacaoErroCliente = (mensagem =
    "Erro ao cadastrar o cliente") => {
    notificacao('error', mensagem, 'bi bi-x-circle-fill')
};

export const notificacaoSucessoCliente = (mensagem =
    "Sucesso ao cadastrar o cliente!") => {
    notificacao('success', mensagem, 'bi bi-check')
};
export const notificacaoCep = (mensagem =
    "CEP com número de caracteres inválidos") => {
    notificacao('warning', mensagem)
};

export const notificacaoExcluir = (mensagem =
    "Cliente excluido com sucesso!") => {
    notificacao('success', mensagem)
};

export const notificacaoExcluirErro = (mensagem =
    "Falha ao excluir o cliente") => {
    notificacao('error', mensagem)
};

export const ErroContrato = (mensagem =
    "Falha ao encontrar o cliente") => {
    notificacao('error', mensagem)
};
export const ListarCliente = (mensagem =
    "Cliente encontrado com sucesso!") => {
    notificacao('success', mensagem)
};