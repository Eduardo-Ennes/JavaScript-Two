const readline = require('readline')

const num = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

function fazer_pergunta(pergunta){
    return new Promise((resolve) => {
        num.question(pergunta, (resposta) => {
            resolve(resposta)
        })
})}

async function coletar_resposta(){
    console.log('Pergunta: ')
    const idade = await fazer_pergunta('Qual é a sua idade? ')

    console.log()
    console.log('Resposta:')
    if (idade >= 18){
        console.log('Você é maior de idade. ')
    }
    else{
        console.log('Você é menor de idade.')
    }
}

coletar_resposta()