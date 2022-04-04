console.log("Oi Will!");

const cpuCollection = document.getElementsByClassName("computador-escolha");
const playerCollection = document.getElementsByClassName("jogador-escolha");
const vidasCpuCollection = document.getElementsByClassName("cpuVidas");
const vidasPlayerCollection = document.getElementsByClassName("playerVidas");
const getButton = document.getElementById("control-btn");

const game = new Game() 

for ( let i = 0; i < playerCollection.length; i++) {
    playerCollection[i].addEventListener("click",() => {
        game.playerChoice(playerCollection[i], getButton);
    })
}

