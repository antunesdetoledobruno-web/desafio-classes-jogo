class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "guerreira") {
      ataque = "corte relâmpago";
    } else if (this.tipo === "mago") {
      ataque = "magia de fogo";
    } else if (this.tipo === "monge") {
      ataque = "golpe de artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken demoníaca";
    } else {
      ataque = "ataque desconhecido";
    }

    console.log(`A ${this.tipo} ${this.nome} usou ${ataque}`);
  }
}

// criando a heroína
let helena = new Heroi("Helena", 25, "monge");

// chamando o ataque
helena.atacar();
