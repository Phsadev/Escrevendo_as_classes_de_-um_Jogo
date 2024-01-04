// Criando a classe Heroi
class Heroi {
    // Definindo o construtor da classe
    constructor(nome, idade, tipo) {
      // Atribuindo os valores dos parâmetros às propriedades da classe
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Definindo o método atacar da classe
    atacar() {
      // Criando uma variável para armazenar a descrição do ataque
      let ataque;
      // Usando uma estrutura de decisão para definir o ataque de acordo com o tipo
      if (this.tipo == "mago") {
        ataque = "magia";
      } else if (this.tipo == "guerreiro") {
        ataque = "espada";
      } else if (this.tipo == "monge") {
        ataque = "artes marciais";
      } else if (this.tipo == "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "não tem um tipo válido";
      }
      // Exibindo a mensagem do ataque no console
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando alguns objetos da classe Heroi
  let heroi1 = new Heroi("Jaspion", 25, "guerreiro");
  let heroi2 = new Heroi("Edin", 21, "mago");
  let heroi3 = new Heroi("Doko", 28, "monge");
  let heroi4 = new Heroi("Jiraya", 23, "ninja");
  
  // Chamando o método atacar dos objetos
  heroi1.atacar(); 
  heroi2.atacar(); 
  heroi3.atacar(); 
  heroi4.atacar(); 