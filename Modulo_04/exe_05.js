const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite um número para observar seus divisores: ', (numero)=>{
    let num = parseInt(numero)
    for (let c = 1; c <= num; c++){
        if (num % c == 0){
            console.log(`${num} / ${c} = ${num / c} - É divisível por ${c}`)
        }
    }
})