class Personagem {
    constructor(nome, classe, forca){
        this.nome = nome;
        this.classe = classe;
        this.forca = forca;
        this.vida = 100;
    }
    status() {
        console.log(`${this.nome} (Nivel de Força:  ${this.forca})`);
        
    }
}

const Jogador1 = new Personagem("Aragon", "Guerreiro", 86);
const Jogador2 = new Personagem("Gandalf", "Mago", 90);

Jogador1.status()