const readline = require('readline')

const num = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

function fazer_pergunta(pergunta){
    return new Promise((resolve) => {
        num.question(pergunta, (resposta) => {
            resolve(resposta)
        }
    )}
)}

async function coletar_resposta(){
    const numero = await fazer_pergunta('Digite um número: ')

    if (numero % 2 == 0) {
        console.log('Número Par')
    }
    else{
        console.log('Número Ímpar')
    }
}

coletar_resposta()