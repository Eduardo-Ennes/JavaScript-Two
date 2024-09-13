class Pessoa {
    constructor(nome, idade) {
        this.nome = nome; 
        this.idade = idade; 
    }

    imprimirDetalhes() {
        console.log(`Nome: ${this.nome}`); 
        console.log(`Idade: ${this.idade}`); 
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, numeroDeMatricula) {
        super(nome, idade); 
        this.numeroDeMatricula = numeroDeMatricula;
    }

    imprimirDetalhes() {
        super.imprimirDetalhes(); 
        console.log(`Matrícula: ${this.numeroDeMatricula}`); 
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, departamento) {
        super(nome, idade); 
        this.departamento = departamento; 
    
    }

    imprimirDetalhes() {
        super.imprimirDetalhes(); 
        console.log(`Departamento: ${this.departamento}`); 
    }
}


const estudante1 = new Estudante("Lucas", 20, "20243030");
const estudante2 = new Estudante("Marta", 22, "20243560");
const estudante3 = new Estudante("Carlos", 19, "20243250");

const professor1 = new Professor("Dra. Silva", 45, "Matemática");
const professor2 = new Professor("Dr. Santos", 50, "História");
const professor3 = new Professor("Dra. Lopes", 40, "Ciências");

estudante1.imprimirDetalhes();
estudante2.imprimirDetalhes();
estudante3.imprimirDetalhes();

// -------------------------------------


professor1.imprimirDetalhes();
professor2.imprimirDetalhes();
professor3.imprimirDetalhes();

estudante1.idade++;
estudante2.idade++;
estudante3.idade++;

console.log("Depois de um ano:");
estudante1.imprimirDetalhes();
estudante2.imprimirDetalhes();
estudante3.imprimirDetalhes();
