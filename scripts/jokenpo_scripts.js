console.log("Oi Will!");

const cpuCollection = document.getElementsByClassName("computador-escolha");
const playerCollection = document.getElementsByClassName("jogador-escolha");
const vidasCpuCollection = document.getElementsByClassName("cpuVidas");
const vidasPlayerCollection = document.getElementsByClassName("playerVidas");
const getButton = document.getElementById("control-btn");
const placar = document.getElementById("placar");
const modal1 = document.getElementById("modalInicio");
const modal2 = document.getElementById("modalRegras");
const modal3 = document.getElementById("modalDerrota");
const modal4 = document.getElementById("modalVitoria");
const startGame = document.getElementById("principal");
const resetDerr = document.getElementById("btnDerrota");
const resetVito = document.getElementById("btnVitoria");
const vidasJogador = document.getElementById("jogador1")
console.log(cpuCollection);

const game = new Game() 

let escolhaPlayer = 0;
let escolhaCPU = 0;
let resultado = '';
let rounds = 0;


modal1.addEventListener("click", () => {
    modal1.classList.remove("show");
    modal1.classList.add("hidden");
    modal2.classList.remove("hidden");
    modal2.classList.add("show");
});

modal2.addEventListener("click", () => {
    modal2.classList.remove("show");
    modal2.classList.add("hidden");
    startGame.classList.remove("hidden");
    startGame.classList.add("show");
    
});

/*function reset() {
    game.init();
    escolhaPlayer = 0;
    escolhaCPU = 0;
    resultado = '';
    rounds = 0;
    placar = "";
    game.playerLifes = 3;
    game.computerLifes = 3;
    if(vidasPlayerCollection.length === 0) {
        for ( let i = 0; i < 4; i++) {
            const img = `<img id="cor1" class="playerVidas" src="./assets/images/vidas.png" alt=""></img>`
            vidasJogador.insertAdjacentHTML("afterbegin", img)
        }
    } 
    if(vidasPlayerCollection.length === 1) {
        for ( let i = 0; i < 3; i++) {
            const img = `<img id="cor1" class="playerVidas" src="./assets/images/vidas.png" alt=""></img>`
            vidasJogador.insertAdjacentHTML("afterbegin", img)
        }
    }
    if(vidasPlayerCollection.length === 2) {
        for ( let i = 0; i < 2; i++) {
            const img = `<img id="cor1" class="playerVidas" src="./assets/images/vidas.png" alt=""></img>`
            vidasJogador.insertAdjacentHTML("afterbegin", img)
        }
    }
    }*/

    


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
        //rounds.replaceWith(playerCollection);
    }





getButton.addEventListener("click", () => {
    if(getButton.innerText === "JOGAR") {
        escolhaCPU = game.computerChoice(cpuCollection);
        resultado = game.choicesCheck(escolhaPlayer, escolhaCPU);
        placar.innerText = resultado;
        console.log(escolhaPlayer, game.computerChoices);
        console.log(resultado)
        if(resultado === "VOCÊ PERDEU"){
            vidasPlayerCollection[0].remove()
           // console.log("***", vidasPlayerCollection)
            if (game.playerLifes === 0) {
               startGame.classList.remove("show");
               startGame.classList.add("hidden");
               modal3.classList.remove("hidden");
               modal3.classList.add("show");
                resetDerr.addEventListener("click", () => {
                    modal3.classList.remove("show");
                    modal3.classList.add("hidden");
                    reset();
                    //startGame.classList.remove("hidden");
                    //startGame.classList.add("show");
               })}

            console.log(game.playerLifes, game.computerLifes, "if")
        } else if (resultado === "VOCÊ GANHOU!") {
            vidasCpuCollection[0].remove()
           // console.log("***", vidasCpuCollection)
            if(game.computerLifes === 0) {
                startGame.classList.remove("show");
                startGame.classList.add("hidden");
                modal4.classList.remove("hidden");
                modal4.classList.add("show");
                modal4.addEventListener("click", () => {
                    modal4.classList.remove("show");
                    modal4.classList.add("hidden");
                    reset();
                    //startGame.classList.remove("hidden");
                    //startGame.classList.add("show");
                })
            }
            console.log(game.playerLifes, game.computerLifes, "else")
        }
            getButton.setAttribute("disabled", "disabled");
    }
}) 

