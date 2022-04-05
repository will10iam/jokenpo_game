console.log("Oi Will!");

const cpuCollection = document.getElementsByClassName("computador-escolha");
const playerCollection = document.getElementsByClassName("jogador-escolha");
const vidasCpuCollection = document.getElementsByClassName("cpuVidas");
const vidasPlayerCollection = document.getElementsByClassName("playerVidas");
const getButton = document.getElementById("control-btn");

console.log(vidasCpuCollection, vidasPlayerCollection )

const game = new Game() 

let cartaEscolhidaPlayer = 0;
let cartaEscolhidaCPU = 0;
let resultado = '';

for ( let i = 0; i < playerCollection.length; i++) {
    playerCollection[i].addEventListener("click",() => {
        game.playerChoice(playerCollection[i], getButton);
        cartaEscolhidaPlayer = playerCollection[i].childNodes[0].alt;
        playerCollection[i].img.classList.add("newImage");
        console.log(playerCollection[i].innerHTML.img)
    })
    console.log(playerCollection[i])
}

getButton.addEventListener("click", () => {
    if(getButton.innerText === "JOGAR") {
        cartaEscolhidaCPU = game.computerChoice(cpuCollection);
        game.choicesCheck(cartaEscolhidaPlayer, cartaEscolhidaCPU);
        resultado = game.choicesCheck(cartaEscolhidaPlayer, cartaEscolhidaCPU);
        if(resultado === "VOCÊ PERDEU"){

        }
        console.log(resultado);
        getButton.innerText = "RESET";
        getButton.classList.toggle("btn-dark");
    }
}) 
console.log(resultado);
console.log(game.computerChoice(cpuCollection));