const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite a primeira nota: ', (a)=>{
    const notaF = parseInt(a)
    let situacao;

    switch (notaF) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            situacao = 'Reprovado!'
            break;
        
        case 5:
        case 6:
            situacao = 'Recuperação!'
            break

        case 7:
        case 8:
        case 9:
        case 10:
            situacao = 'Aprovado!'
            break

        default:
            situacao = 'Digitito inválido, tente novamente...'
            break;
    }

    if (notaF < 0 || notaF > 10){
        console.log(situacao)
    }
    else{
        console.log(`Nota: ${notaF} - ${situacao}`)
    }
})