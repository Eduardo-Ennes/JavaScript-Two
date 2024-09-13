const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let dados = []

function Dados() {
    console.log()
    console.log('Dados do aluno')
    r1.question('Digite o nome do aluno(a): ', (Nome)=>{
        r1.question('Digite a idade: ', (IDADE)=>{
            let idade = parseInt(IDADE)

            dados.push({Nome: Nome, Idade: idade})
            Matematica()
        })
    })
}

function Matematica() {
    console.log()
    console.log('Notas de Matemática')
    r1.question('Digite a primeira nota: ', (Nota1) =>{
        r1.question('Digite a segunda nota:' , (Nota2)=>{
            let num1 = parseFloat(Nota1)
            let num2 = parseFloat(Nota2)
            let media = (num1 + num2) / 2

            if (media < 4){
                dados.push({Matéria: 'Matemática', Nota: media, Situação: 'Reprovado'})
                Quimica()
            }
            else if(media >= 4 && media < 7){
                dados.push({Matéria: 'Matemática', Nota: media, Situação: 'Recuperação'})
                Quimica()
            }
            else{
                dados.push({Matéria: 'Matemática', Nota: media, Situação: 'Aprovado'})
                Quimica()
            }
        })
    })  
}


function Quimica() {
    console.log()
    console.log('Notas de Quimica')
    r1.question('Digite a primeira nota: ', (Nota1) =>{
        r1.question('Digite a segunda nota:' , (Nota2)=>{
            let num1 = parseFloat(Nota1)
            let num2 = parseFloat(Nota2)
            let media = (num1 + num2) / 2

            if (media < 4){
                dados.push({Matéria: 'Quimica', Nota: media, Situação: 'Reprovado'})
                Fisica()
            }
            else if(media >= 4 && media < 7){
                dados.push({Matéria: 'Quimica', Nota: media, Situação: 'Recuperação'})
                Fisica()
            }
            else{
                dados.push({Matéria: 'Quimica', Nota: media, Situação: 'Aprovado'})
                Fisica()
            }    
        })
    })
}

function Fisica() {
    console.log()
    console.log('Notas de Física')
    r1.question('Digite a primeira nota: ', (Nota1) =>{
        r1.question('Digite a segunda nota:' , (Nota2)=>{
            let num1 = parseFloat(Nota1)
            let num2 = parseFloat(Nota2)
            let media = (num1 + num2) / 2

            if (media < 4){
                dados.push({Matéria: 'Fisica', Nota: media, Situação: 'Reprovado'})
                Resultado()
            }
            else if(media >= 4 && media < 7){
                dados.push({Matéria: 'Fisica', Nota: media, Situação: 'Recuperação'})
                Resultado()
            }
            else{
                dados.push({Matéria: 'Fisica', Nota: media, Situação: 'Aprovado'})
                Resultado()
            }    
        })
    })
}

function Resultado() {
    console.log()
    console.log('Resultados da notas: ')
    for (let c of dados){
        console.log(c)
    }
    Dados()
} 

Dados()



// Forma do professor  
/*
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let aluno = {};
function solicitarInformacao(pergunta) {

  return new Promise((resolve, reject) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}
(async () => {
    aluno.nome = await solicitarInformacao("Digite o nome do aluno: ");
    aluno.idade = parseInt(await solicitarInformacao("Digite a idade do aluno: "));
    aluno.curso = await solicitarInformacao("Digite o curso do aluno: ");
    aluno.notas = {};
    aluno.notas.matematica = parseFloat(await solicitarInformacao("Digite a nota de Matemática: "));
    aluno.notas.fisica = parseFloat(await solicitarInformacao("Digite a nota de Física: "));
    aluno.notas.quimica = parseFloat(await solicitarInformacao("Digite a nota de Química: "));

function calcularMedia(aluno) {
    let totalNotas = 0;
    let numNotas = 0;
    for (let materia in aluno.notas) {
      totalNotas += aluno.notas[materia];
      numNotas++;
    }
    let media = totalNotas / numNotas;
    return media;
  }

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Curso: ${aluno.curso}`);
console.log(`Notas:`);

for (let materia in aluno.notas) {
  console.log(`${materia}: ${aluno.notas[materia]}`);
}
console.log(`Média: ${calcularMedia(aluno).toFixed(2)}`);
rl.close();
})();
*/
