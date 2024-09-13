const readline = require('readline')

const num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

num.question('Digite um número: ', (numero) => {
    let n = parseInt(numero)
    let contador = 0
    if (isNaN(n)){
        console.log('Digite um número inteiro!')
    }
    if (n !== 0){
        while(contador != n){
            if (n > 0){
                contador += 1
                console.log(`Número: ${contador}`)
            }
            if (n < 0){
                contador -= 1
                console.log(`Número: ${contador}`)
            }
        }
    }
    if (n == 0){
        console.log('Digite um número diferente de 0!')
    }
})