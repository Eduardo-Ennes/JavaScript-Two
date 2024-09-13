class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;  
        this.idade = idade;  
    }
  
    exibirDetalhes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
  
    cumprimentar() {
        console.log(`Olá, eu sou ${this.nome}!`);
    }
}
  

const pessoa1 = new Pessoa('João', 30);
pessoa1.exibirDetalhes();
pessoa1.cumprimentar(); 

const pessoa2 = new Pessoa('Maria', 25);
pessoa2.exibirDetalhes(); 
pessoa2.cumprimentar();

const pessoa3 = new Pessoa('Carlos', 40);
pessoa3.exibirDetalhes(); 
pessoa3.cumprimentar(); 

const pessoa4 = new Pessoa('Ana', 35);
pessoa4.exibirDetalhes(); 
pessoa4.cumprimentar(); 

const pessoa5 = new Pessoa('Pedro', 28);
pessoa5.exibirDetalhes(); 
pessoa5.cumprimentar(); 

const pessoa6 = new Pessoa('João', 30);
pessoa6.exibirDetalhes(); 
pessoa6.cumprimentar();  
