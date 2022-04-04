class Game {
    constructor() {
        this.playerChoices = null;
        this.computerChoices = null;
        this.playerLifes = 3;
        this.computerLifes = 3;
    }

    playerChoice(elemento, botao) {
       this.playerChoices = elemento;
       botao.removeAttribute("disabled");
    }

    computerChoice(htmlCollection) {
        const randomIndex = Math.floor(Math.random() * 3);
        this.computerChoices = htmlCollection[randomIndex];

    }

    choicesCheck() {
        if( (this.computerChoice.getAttribute("alt") === "Coisa1"   && this.playerChoice.getAttribute("alt") === "Edwards1") || 
            (this.computerChoice.getAttribute("alt") === "Folha2"   && this.playerChoice.getAttribute("alt") === "Coisa2")   || 
            (this.computerChoice.getAttribute("alt") === "Edwards2" && this.playerChoice.getAttribute("alt") === "Folha1")) {
                return "VOCÊ PERDEU";

    }   else if((this.computerChoice.getAttribute("alt") === "Coisa1" && this.playerChoice.getAttribute("alt") === "Coisa2") || 
                (this.computerChoice.getAttribute("alt") === "Folha2" && this.playerChoice.getAttribute("alt") === "Folha1") ||
                (this.computerChoice.getAttribute("alt") === "Edwards2" && this.playerChoice.getAttribute("alt") === "Edwards1")) {
                return "EMPATOU! TENTE DE NOVO";

    }   else if((this.computerChoice.getAttribute("alt") === "Edwards2" && this.playerChoice.getAttribute("alt") === "Coisa2") ||
                (this.computerChoice.getAttribute("alt") === "Coisa1"   && this.playerChoice.getAttribute("alt") === "Folha1") ||
                (this.computerChoice.getAttribute("alt") === "Folha2"   && this.playerChoice.getAttribute("alt") === "Edwards1")) {
                return "VOCÊ GANHOU!";
        }
    }

    lifeCheck() {}

    resetGame() {
        for (let i = 0; i < vidasCpuCollection.length; i++) {
            this.vidasCpuCollection[i].setAttribute(computerChoices);
            this.vidasPlayerCollection[i].setAttribute(playerChoices);
        }
    }
}