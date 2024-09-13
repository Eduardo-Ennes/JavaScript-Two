class AlunoEscolaPai {
    constructor(codigo, nome, sexo, idade) {
      this.codigo = codigo;
      this.nome = nome;
      this.sexo = sexo;
      this.idade = idade;
    }
  
    imprimirNaTela() {
      console.log(`Código: ${this.codigo}`);
      console.log(`Nome: ${this.nome}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Idade: ${this.idade}`);
      console.log('');
    }
  }

    class AlunoEscolaFilho extends AlunoEscolaPai {
        constructor() {
          super(1, "Cleonice", "Feminino", 19); 
        }
    }

    class AlunoEscolaNeto extends AlunoEscolaPai {
        constructor() {
          super(2, "Allan", "Masculino", 28); 
        }
    }

  const dadosEscolaFilho = new AlunoEscolaFilho(); 
  dadosEscolaFilho.imprimirNaTela(); 
  
  const dadosNeto = new AlunoEscolaNeto(); 

  dadosNeto.nome = "Alfredo Alves"; 
  dadosNeto.idade = 38; 

  dadosNeto.imprimirNaTela(); 
