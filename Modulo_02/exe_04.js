const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite um número que corresponda o dia da semana: ', (a) =>{
    const semana = parseInt(a)

    if (a == 1){
        console.log('Domingo!')
    }
    if (a == 2){
        console.log('Sugunda!')
    }    
    if (a == 3){
        console.log('Terça!')
    }
    if (a == 4){
        console.log('Quarta!')
    }
    if (a == 5){
        console.log('Quinta!')
    }
    if (a == 6){
        console.log('Sexta!')
    }
    if (a == 7){
        console.log('Sabado!')
    }
    if (a > 7){
        console.log('Dia da semana inválido, digite novamnete!')
    }
})