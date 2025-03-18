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
    "Erro ao buscar os alunos no banco de dados!" ) => {
        notificacao('error', mensagem, 'bi bi-x-circle-fill')
    };

export const notificacaoSucesso = (mensagem =
    "Sucesso ao buscar os alunos no banco de dados!" ) => {
         notificacao('success', mensagem, 'bi bi-check')
    };