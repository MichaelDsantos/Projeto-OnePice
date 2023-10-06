const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        DesselecinarBotao();
        DesselecinarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function DesselecinarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function DesselecinarPersonagem() {
    const PersonagemSelecionado = document.querySelector(".personagem.selecionado");
    PersonagemSelecionado.classList.remove("selecionado");
}
