let vez = "X";

//let caixa = document.querySelector(".caixa");
let caixa1 = document.querySelector("#caixa1");
let caixa2 = document.querySelector("#caixa2");
let caixa3 = document.querySelector("#caixa3");
let caixa4 = document.querySelector("#caixa4");
let caixa5 = document.querySelector("#caixa5");
let caixa6 = document.querySelector("#caixa6");
let caixa7 = document.querySelector("#caixa7");
let caixa8 = document.querySelector("#caixa8");
let caixa9 = document.querySelector("#caixa9");

//Adicionando um Evento
caixa1.addEventListener("click", acaoclick);
caixa2.addEventListener("click", acaoclick);
caixa3.addEventListener("click", acaoclick);
caixa4.addEventListener("click", acaoclick);
caixa5.addEventListener("click", acaoclick);
caixa6.addEventListener("click", acaoclick);
caixa7.addEventListener("click", acaoclick);
caixa8.addEventListener("click", acaoclick);
caixa9.addEventListener("click", acaoclick);

function acaoclick(evento)
{
    // recupero o elemewnto que foi clicado naquele momento
    let clicado = evento.target //target = Alvo

    if (vez == "X") {
        clicado.innerHTML = "X";
        vez = "O";
    } else {
        clicado.innerHTML = "O";
        vez = "X";
    }

    clicado.removeEventListener("click", acaoclick)
}