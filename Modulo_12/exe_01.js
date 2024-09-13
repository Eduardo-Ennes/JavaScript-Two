class Aluno {
    constructor(nome, idade, curso) {
      this.nome = nome; 
      this.idade = idade; 
      this.curso = curso; 
      this.notas = []; 
    }
    adicionarNota(nota) {
      this.notas.push(nota, this.nome); 
      console.log(this.notas)
    }
  
    calcularMedia() {
      const totalNotas = this.notas.reduce((total, nota) => total + nota, 0); 
      return totalNotas / this.notas.length; 
    }

    aprovado() {
      return this.calcularMedia() >= 7; 
    }
  }
  
  const aluno1 = new Aluno('Ana', 20, 'Engenharia'); 
  const aluno2 = new Aluno('João', 22, 'Medicina'); 
  const aluno3 = new Aluno('Leonardo', 22, 'Ciencia da Computação'); 
  
  aluno1.adicionarNota(8); 
  aluno1.adicionarNota(7); 
  aluno1.adicionarNota(2); 

  console.log(`${aluno1.nome} está aprovado? ${aluno1.aprovado() ? 'Sim' : 'Não'}`);

  aluno2.adicionarNota(6); 
  aluno2.adicionarNota(5); 
  aluno2.adicionarNota(10); 
  aluno2.adicionarNota(10); 

  console.log(`${aluno2.nome} está aprovado? ${aluno2.aprovado() ? 'Sim' : 'Não'}`);


  // ------------------------------------------

  aluno3.adicionarNota(10); 
  aluno3.adicionarNota(8);
  aluno3.adicionarNota(6); 
  aluno3.adicionarNota(10); 

  console.log(`${aluno3.nome} está aprovado? ${aluno3.aprovado() ? 'Sim' : 'Não'}`);
