
let vez = "X";
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

// let caixa1 = document.querySelector("#caixa1");
// let caixa2 = document.querySelector("#caixa2");
// let caixa3 = document.querySelector("#caixa3");
// let caixa4 = document.querySelector("#caixa4");
// let caixa5 = document.querySelector("#caixa5");
// let caixa6 = document.querySelector("#caixa6");
// let caixa7 = document.querySelector("#caixa7");
// let caixa8 = document.querySelector("#caixa8");
// let caixa9 = document.querySelector("#caixa9");

//Adicionando um Evento
for (const caixa of caixaElements) {
    caixa.addEventListener("click", acaoclick);
}

// caixa1.addEventListener("click", acaoclick);
// caixa2.addEventListener("click", acaoclick);
// caixa3.addEventListener("click", acaoclick);
// caixa4.addEventListener("click", acaoclick);
// caixa5.addEventListener("click", acaoclick);
// caixa6.addEventListener("click", acaoclick);
// caixa7.addEventListener("click", acaoclick);
// caixa8.addEventListener("click", acaoclick);
// caixa9.addEventListener("click", acaoclick);

const checkForWin = () => {
    return winningConbinations.some((combination) => {
        return combination.every((index) => {
            return caixaElements[index].classList.contains(currentPlayer); // Corrigido aqui
        });
    });
}

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

    clicado.removeEventListener("click", acaoclick);

    const isWin = checkForWin();
    if (isWin) {
        console.log("Winner");
    }
}
