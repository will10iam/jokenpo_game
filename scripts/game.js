class Game {
    constructor(playerChoices, computerChoices) {
        this.playerChoices = playerChoices;
        this.computerChoices = computerChoices;
    }

    playerChoice(htmlCollection) {
        // if() - se não houver clique na Imagem, desabilitar botão!
        //      - se houver, habilitar botão Jogar!
    }

    computerChoice(htmlCollection) {
        for ( let i = 0; i < htmlCollection.length; i++) {
            const randomIndex = Math.floor(Math.random * this.computerChoices);
        }

    }

    choicesCheck() {
        if(randomIndex === 0 /*&& escolhaplayer === 2*/ || randomIndex === 1 /*&& escolhaplayer === 0*/ || randomIndex === 2 /*&& escolhaplayer === 1*/) {
            return "VOCÊ PERDEU";
        } else if(randomIndex === 0 /*&& escolhaplayer === 0*/ || randomIndex === 1 /*&& escolhaplayer === 1*/ || randomIndex === 2 /*&& escolhaplayer === 2*/) {
            return "EMPATOU! TENTE DE NOVO";
        } else if (randomIndex === 2 /*&& escolhaplayer === 0*/ || randomIndex === 0 /*&& escolhaplayer === 1*/ || randomIndex === 1 /*&& escolhaplayer === 2*/) {
            return "VOCÊ GANHOU!";
        }
    }

    lifeCheck() {}

    resetGame() {}
}