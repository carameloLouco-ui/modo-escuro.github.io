//modo escuro
const botão Tema = document.getElementById("botaoTema");

function alternarTema(){
  document.body.classList.toggle("escuro");
  (document.body.classList.contains("escuro")){
    botão Tema.textContent="Modo claro";
  }else{
    botão Tema.textContent="Modo escuro";
  }
}
botão Tema.addEventListener("click", alternarTema);

//alterar texto
const botaoMensagem = document.getElementById("mensagem");
const mensagem = document.getElementById("mensagem");
function alterarTexto(){
  mensagem.textContent = "O texto foi alterado pelo JavaScript!";
}
botão Mensagem.addEventListener("click", alterarTexto);
