const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite um mês do ano pelo seu número correspondente: ', (mes)=>{
    let estacao = parseInt(mes)

    switch (estacao) {
        case 1:
        case 2:
        case 12:
            estacao = 'Verão'
            break;

        case 3:
        case 4:
        case 5:
            estacao = 'Outono'
            break;

        case 6:
        case 7:
        case 8:
            estacao = 'Inverno'
            break;

        case 9:
        case 10:
        case 11:
            estacao = 'Primavera'
            break;

        default:
            estacao = 'Mês inválido'
            break;
    }

    if (estacao === 'Mês inválido'){
        console.log('Digito inválido, tente novamente...')
    }
    else{
        console.log(`A estação do ano é: ${estacao}`)
    }
})
