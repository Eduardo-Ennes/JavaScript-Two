const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite uma string para ser invertida: ', function(input){
    let Text = ''

    for (let c = input.length - 1; c >= 0; c--){
        Text += input[c]
    }
    console.log(`String invertida: ${Text}`)
})
