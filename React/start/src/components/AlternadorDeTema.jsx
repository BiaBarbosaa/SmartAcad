import { useEffect } from "react";

const AlternadorDeTema = () => {
  
    /*  
    Para garantir que o código é executado apenas uma vez 
    quando o componente for montado, usamos o useEffect
    useEffect(() => {   }, []);

    */
  useEffect(() => {
    /* 
      Essas duas funções servem para guardar e recuperar o tema escolhido (por exemplo, 'dark' ou 'light')
      no armazenamento do navegador (localStorage). Assim, quando a pessoa voltar ao site, ele lembra da escolha.
    */
    const obterTemaArmazenado = () => localStorage.getItem('theme');
    const definirTemaArmazenado = (tema) => localStorage.setItem('theme', tema);

    /* 
      Aqui a gente verifica qual tema deve ser usado:
      - Primeiro, olha se já existe um tema salvo.
      - Se existir, ele usa esse tema.
      - Se não, ele escolhe de acordo com a configuração do sistema: 
        se o computador estiver em modo escuro, usa 'dark'; caso contrário, 'light'.
    */
    const obterTemaPreferido = () => {
      const temaArmazenado = obterTemaArmazenado();
      if (temaArmazenado) return temaArmazenado;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    /* 
      Essa função aplica o tema escolhido na página.
      Ela coloca um atributo no elemento principal (document.documentElement) para que os estilos do Bootstrap
      possam mudar o visual da página de acordo com o tema (escuro ou claro).
      Se o tema for 'auto', ela escolhe automaticamente o tema baseado na configuração do sistema.
    */
    const definirTema = (tema) => {
      if (tema === 'auto') {
        document.documentElement.setAttribute(
          'data-bs-theme',
          window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        );
      } else {
        document.documentElement.setAttribute('data-bs-theme', tema);
      }
    };

    /* 
    Aqui, logo que a página carrega, o tema é definido conforme a preferência do usuário ou do sistema.
    */
    definirTema(obterTemaPreferido());

    /* 
      Essa função atualiza o visual do botão que mostra qual tema está ativo.
      Ela faz o seguinte:
      1- Procura pelo botão que controla o tema (usando o ID #bd-theme).
      2- Atualiza o texto e o ícone para mostrar o tema escolhido.
      3- Remove a marcação "ativo" dos outros botões e marca somente o botão clicado.
    */
    const mostrarTemaAtivo = (tema, foco = false) => {
      const alternadorTema = document.querySelector('#bd-theme');
      if (!alternadorTema) return;

      const textoAlternador = document.querySelector('#bd-theme-text');
      const iconeTemaAtivo = document.querySelector('.theme-icon-active use');
      const botaoAtivo = document.querySelector(`[data-bs-theme-value="${tema}"]`);
      const svgDoBotaoAtivo = botaoAtivo.querySelector('svg use').getAttribute('href');

      /* 
      Remove a marcação "active" de todos os botões de tema
      */
      document.querySelectorAll('[data-bs-theme-value]').forEach((elemento) => {
        elemento.classList.remove('active');
        elemento.setAttribute('aria-pressed', 'false');
      });

      /* 
      Marca o botão clicado como ativo e atualiza o ícone
      */
      botaoAtivo.classList.add('active');
      botaoAtivo.setAttribute('aria-pressed', 'true');
      iconeTemaAtivo.setAttribute('href', svgDoBotaoAtivo);

      /* 
      Atualiza o rótulo do alternador com o nome do tema ativo
      */
      const labelAlternador = `${textoAlternador.textContent} (${botaoAtivo.dataset.bsThemeValue})`;
      alternadorTema.setAttribute('aria-label', labelAlternador);

      /* Se o parâmetro 'foco' for verdadeiro, coloca o foco no botão do alternador
      */
      if (foco) {
        alternadorTema.focus();
      }
    };

    /* 
      Aqui configuramos para que o site fique de olho na configuração do sistema.
      Se o computador mudar de modo claro para escuro (ou vice-versa) e o usuário 
      não tiver escolhido um tema específico,
      o tema do site muda automaticamente.
    */
    const consultaMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const manipuladorConsultaMedia = () => {
      const temaArmazenado = obterTemaArmazenado();
      if (temaArmazenado !== 'light' && temaArmazenado !== 'dark') {
        definirTema(obterTemaPreferido());
      }
    };
    consultaMedia.addEventListener('change', manipuladorConsultaMedia);

    /* 
      Esse bloco seleciona todos os botões que podem alterar
      o tema (eles têm um atributo especial 'data-bs-theme-value')
      e adiciona um "ouvinte" para escutar o clique. Quando o botão é clicado:
      1- A escolha do tema é salva.
      2- O tema é aplicado na página.
      3- O botão é atualizado para mostrar que está ativo.
    */
    const alternadores = document.querySelectorAll('[data-bs-theme-value]');
    const manipuladorClique = function () {
      const tema = this.getAttribute('data-bs-theme-value');
      definirTemaArmazenado(tema);
      definirTema(tema);
      mostrarTemaAtivo(tema, true);
    };

    alternadores.forEach((alternador) => {
      alternador.addEventListener('click', manipuladorClique);
    });

    /* Atualiza o botão do tema ativo logo que a página carrega, 
    para mostrar o tema que está em uso.
    */
    mostrarTemaAtivo(obterTemaPreferido());

    /* 
      Quando o componente for removido da tela, essa função remove os "ouvintes" (event listeners)
      para evitar que fiquem rodando em segundo plano e causando problemas.
    */
    return () => {
      consultaMedia.removeEventListener('change', manipuladorConsultaMedia);
      alternadores.forEach((alternador) => {
        alternador.removeEventListener('click', manipuladorClique);
      });
    };
  }, []);

  /* Esse componente não renderiza nada na tela, 
  ele só executa os scripts para alternar o tema.
  */
  return null;
};

export default AlternadorDeTema;
