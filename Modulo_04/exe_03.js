const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

r1.question('Digite um número para observar o seu fatorial: ', (numero)=>{
    let num = numero
    let resul = 1
    for (let c = num; c > 0; c--){
        resul = resul * c
    }

    console.log(resul)
})