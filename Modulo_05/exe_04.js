const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const numsecreto = 51

function advinhar() {
    r1.question('Digite um número de 1 há 100: ', (numero) =>{
        let num = parseInt(numero)
        if(num == numsecreto){
            console.log('Número correto!')
            r1.close()
        }
        else if(num > 100 || num < 1){
            console.log('Digite apenas números de 1 há 100.')
            advinhar()
        }
        else{
            console.log('Você errou, tente novamente...')
            advinhar()
        }
    })
}
advinhar()
