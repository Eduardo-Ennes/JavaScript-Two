 /* Primeira forma */

 const readline = require('readline')

 const r1 = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
 })
 
 r1.question('Digite um número: ', (a) =>{
    r1.question('Digite outro número: ', (b) =>{
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        if (num1 > num2){
            console.log(`O número ${num1} é maior do que o ${num2}`)
        }
        if  (num2 > num1){
            console.log(`O número ${num2} é maior do que o ${num1}`)
        }
        if (num1 == num2){
            console.log(`Os números possuem o mesmo valor ${num1}`)
        }
    
        r1.close()
    })
 })
 
 

 /* Outra forma 
 
 const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function fazer_pergunta(pergunta){
    return new Promise((resolve) => {
        r1.question(pergunta, (resposta) =>{
            resolve(resposta)
        })
    })
}

async function coletar_resposta(){
    console.log()
    const a = await fazer_pergunta('Digite um número: ')
    const b = await fazer_pergunta('Digite outro número: ')

    if (a > b){
        console.log(`O número ${a} é maior do que ${b}`)
    }
    if (a == b){
        console.log(`Os dois números possuem o mesmo valor ${a}`)
    }
    if (b > a){
        console.log(`O número ${b} é maior do que o número ${a}`)
    }
}

coletar_resposta() */