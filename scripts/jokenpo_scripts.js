console.log("Oi Will!");

const cpuCollection = document.getElementsByClassName("computador-escolha");
const playerCollection = document.getElementsByClassName("jogador-escolha");
const vidasCpuCollection = document.getElementsByClassName("cpuVidas");
const vidasPlayerCollection = document.getElementsByClassName("playerVidas");
const getButton = document.getElementById("control-btn");
console.log(cpuCollection);

const game = new Game() 

let escolhaPlayer = 0;
let escolhaCPU = 0;
let resultado = '';
let rounds = 0;

if (rounds === 0) {
    for ( let i = 0; i < playerCollection.length; i++) {
        playerCollection[i].addEventListener("click",() => {
            game.playerChoice(playerCollection[i], getButton);
            escolhaPlayer = playerCollection[i].alt;
            playerCollection[i].style.opacity = "1";
            if (i === 0) {
                playerCollection[i+1].style.opacity = "0";
                playerCollection[i+2].style.opacity = "0";
            } else if (i === 1) {
                playerCollection[i-1].style.opacity = "0";
                playerCollection[i+1].style.opacity = "0";
            } else {
                playerCollection[i-2].style.opacity = "0";
                playerCollection[i-1].style.opacity = "0";
            }
            rounds++;
        })}
} else {
    rounds.replaceWith(playerCollection);
}

getButton.addEventListener("click", () => {
    if(getButton.innerText === "JOGAR") {
        escolhaCPU = game.computerChoice(cpuCollection);
        resultado = game.choicesCheck(escolhaPlayer, escolhaCPU);
        console.log(escolhaPlayer, game.computerChoices);
        console.log(resultado)
        if(resultado === "VOCÊ PERDEU"){
            vidasPlayerCollection[0].remove()
            console.log(game.playerLifes, game.computerLifes, "if")
        } else if (resultado === "VOCÊ GANHOU!") {
            vidasCpuCollection[0].remove()
            console.log(game.playerLifes, game.computerLifes, "else")
        }
            getButton.setAttribute("disabled", "disabled");
    }
}) 

