const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

r1.question('Digite um número: ', (numero)=>{
    const n = parseInt(numero)

    if (n === 0){
        console.log('O número é 0.')
    }
    if (n > 0){
        console.log(`O número ${n} é POSITIVO.`)
    }
    if (n < 0){
        console.log(`O número ${n} é NEGATIVO.`)
    }
})
