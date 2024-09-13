const readline = require('readline')

const op = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log('Escolha uma opção do menu\n1 - Hamburgher\n2 - Salada\n3 - Khebab')
op.question('Digite uma opção do menu: ', (num)=>{
    const res = parseInt(num)

    switch (res) {
        case 1:
            console.log('Você escolheu um Hamburgher')
            break;
    
        case 2:
            console.log('Você escolheu uma Salada')
            break;

        case 3:
            console.log('Você escolheu um Khebab')
            break;

        default:
            console.log('Escolhe uma opção que está no menu')
            break;
    }
})