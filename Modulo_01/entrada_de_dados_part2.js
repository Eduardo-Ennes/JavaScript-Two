const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

function fazer_pergunta(pergunta){
    return new Promise((resolve) => {
        r1.question(pergunta, (resposta) => {
            resolve(resposta)
        })
    })
}

async function coletar_resposta(){
    console.log()
    const nome = await fazer_pergunta('Qual é o seu nome? ')
    const cor = await fazer_pergunta('Qual é o sua cor favorita? ')
    const animal = await fazer_pergunta('Qual é o seu animal favorito? ')
    const hobby = await fazer_pergunta('Qual é o seu hobby? ')
    const comida = await fazer_pergunta('Qual é a sua comida favorita? ')
    console.log()

console.log(`\nAqui estão as suas respostas: 
Nome: ${nome}
Cor: ${cor}
Animal: ${animal}
Hobby: ${hobby}
comida: ${comida}
        `)
        console.log()

    r1.close()
}

coletar_resposta()