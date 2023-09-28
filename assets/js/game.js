let currentPlayer = "X";

const winningConbinations = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//let caixa = document.querySelector(".caixa");
const caixaElements = document.querySelectorAll(".caixa");

//Adicionando um Evento
for (const caixa of caixaElements) {
    caixa.addEventListener("click", acaoclick);
}

function acaoclick(evento)
{
    // recupero o elemewnto que foi clicado naquele momento
    let clicado = evento.target //target = Alvo

    if (currentPlayer == "X") {
        clicado.innerHTML = "X";
        currentPlayer = "O";
    } else {
        clicado.innerHTML = "O";
        currentPlayer = "X";
    }

    clicado.removeEventListener("click", acaoclick);

    acaoVerificarVencedor();

}

function acaoVerificarVencedor(){
    let valor1 = caixa1.innerHTML;
    let valor2 = caixa2.innerHTML;
    let valor3 = caixa3.innerHTML;
    let valor4 = caixa4.innerHTML;
    let valor5 = caixa5.innerHTML;
    let valor6 = caixa6.innerHTML;
    let valor7 = caixa7.innerHTML;
    let valor8 = caixa8.innerHTML;
    let valor9 = caixa9.innerHTML;
    let jogo = document.querySelector("#jogo");

    if (valor1 == valor2 && valor1 == valor3 & valor1 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-hor-1");
        jogo.appendChild(linha);
    }
    
    if (valor4 == valor5 && valor4 == valor6 & valor4 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-hor-2");
        jogo.appendChild(linha);
    }

    if (valor7 == valor8 && valor7 == valor9 & valor7 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-hor-3");
        jogo.appendChild(linha);
    }

    if (valor1 == valor4 && valor1 == valor7 & valor1 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-ver-1");
        jogo.appendChild(linha);
    }

    if (valor2 == valor5 && valor2 == valor8 & valor2 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-ver-2");
        jogo.appendChild(linha);
    }

    if (valor3 == valor6 && valor3 == valor9 & valor3 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-ver-3");
        jogo.appendChild(linha);
    }

    if (valor1 == valor5 && valor1 == valor9 & valor1 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-diag-1");
        jogo.appendChild(linha);
    }

    if (valor3 == valor5 && valor3 == valor7 & valor3 !="") {
        let linha = document.createElement("div");
        linha.classList.add("linha-diag-2");
        jogo.appendChild(linha);
    }
}
