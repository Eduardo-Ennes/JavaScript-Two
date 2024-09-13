const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite um número para observar a sua tabuada: ', (numero)=>{
    let num = parseInt(numero)
    for (let c = 1; c <= 10; c++){
        console.log(`${num} x ${c} = ${num * c}`)
    }
})