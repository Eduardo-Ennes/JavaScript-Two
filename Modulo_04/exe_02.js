const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite um número: ', (numero)=>{
    let num = parseInt(numero)
    let soma = 0 
    for(let c = 1; c <= num; c++){
        console.log(`${soma} + ${c} =`)
        soma += c
        console.log(soma) 
    }
})