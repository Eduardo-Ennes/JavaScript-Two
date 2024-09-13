/* MINHA FORMA  
 
const { resolve } = require('path')
const readline = require('readline')

const r1 = readline. createInterface({
    input: process.stdin,
    output: process.stdout
})

function fazer_perguntar(pergunta){
    return new Promise((resolve) => {
        r1.question(pergunta, (resposta) => {
            resolve(resposta)
        })
    })}


async function coletar_resposta(){
    console.log()
    const nome = await fazer_perguntar('Qual é o seu nome? ')
    const idade = await fazer_perguntar(' Qual é a sua idade? ')
    const cidade = await fazer_perguntar('Qual é a cidade que você mora?  ')

    console.log(`
Seus dados
Nome: ${nome}
Idade: ${idade}
Cidade: ${cidade}
        `)

    r1.close()
}

coletar_resposta()

*/ 

/* Forma do professor */

const readline = require('readline').createInterface({

    // Configura a fonte de entrada de dados como o stdin (standard input),
    // permitindo que o programa leia dados inseridos pelo usuário no terminal.
    input: process.stdin,
  
    // Configura o destino da saída de dados como o stdout (standard output),
    // permitindo que o programa escreva dados para o terminal.
    output: process.stdout
    
  });
  
  // Solicita ao usuário que insira seu nome, usando o método 'question' do objeto 'readline'.
  // O primeiro argumento é uma string com a pergunta feita ao usuário.
  // O segundo argumento é uma função callback que é chamada quando o usuário insere uma resposta.
  readline.question('Por favor, insira seu nome: ', (nome) => {

    // Dentro do callback do nome, solicita ao usuário que insira sua idade.
    // Novamente, utiliza-se 'readline.question' para fazer a pergunta.
    // A resposta do usuário é capturada pela função callback, que recebe a idade como argumento.
    readline.question('Por favor, insira sua idade: ', (idade) => {

      // Dentro do callback da idade, solicita ao usuário que insira a cidade onde mora.
      // Utiliza-se mais uma vez 'readline.question' para fazer a pergunta.
      // A resposta do usuário é capturada pela função callback, que recebe a cidade como argumento.
      readline.question('Por favor, insira a cidade onde você mora: ', (cidade) => {

        // Dentro do callback da cidade, imprime uma mensagem personalizada no terminal
        // usando 'console.log'. A mensagem inclui o nome, idade e cidade inseridos pelo usuário.
        // Utiliza-se template strings (delimitadas por crases) para incluir as variáveis
        // dentro da string de forma mais legível.
        console.log(`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`);
        
        // Após imprimir a mensagem personalizada, fecha a interface de linha de comando.
        // Isso é necessário para terminar o programa, pois caso contrário, o processo do Node.js
        // continuaria aberto aguardando mais entrada do usuário.
        readline.close();
        
      });
    });
  });