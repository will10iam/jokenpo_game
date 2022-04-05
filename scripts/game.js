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
        this.computerChoices = htmlCollection[randomIndex].alt;
        return this.computerChoices
    }

    choicesCheck(player, CPU) {
        
        if((CPU === "Coisa1"  && player === "Edwards1") || (CPU === "Folha2" && player === "Coisa2") || (CPU === "Edwards2" && player === "Folha1")) {
                this.playerLifes--;
                return "VOCÊ PERDEU";

    }   else if((CPU === "Coisa1" && player === "Coisa2") || (CPU === "Folha2" && player === "Folha1") || (CPU === "Edwards2" && player === "Edwards1")) {
                return "EMPATOU! TENTE DE NOVO";

    }   else if((CPU === "Edwards2" && player === "Coisa2") ||(CPU === "Coisa1"   && player === "Folha1") || (CPU === "Folha2"   && player === "Edwards1")) {
                    this.computerLifes--;
                return "VOCÊ GANHOU!";
        }
    }

    lifeCheck() {
        if (this.playerLifes === 0) {
            alert("VOCE PERDEU!")
        } else if (this.computerLifes === 0) {
            alert("VOCÊ GANHOU!")
        }
    }

    resetGame(vidasCpuCollection, vidasPlayerCollection ) {
        for (let i = 0; i < vidasCpuCollection.length; i++) {
            vidasCpuCollection[i].setAttribute('src', "./assets/images/vidas.png");
        }

        for ( let i = 0 ; i < vidasPlayerCollection.length; i++) {
            vidasPlayerCollection[i].setAttribute('src', "./assets/images/vidas.png");
        }
        botao.setAttribute('disabled');
    }
}