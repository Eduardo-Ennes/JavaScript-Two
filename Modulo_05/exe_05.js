const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function opcao() {
    r1.question('Deseja continuar jogando? ', (decisao)=>{
        let op = decisao.toUpperCase()[0]
        if (op == 'S'){
            jogo()
        }
        else if (op == 'N'){
            console.log('Término do jogo!')
        }
        else{
            console.log('Digite apenas S ou N.')
            opcao()
        }
    })
}

const pc = 1

function jogo() {
console.log('1 - Pedra\n2 - Papel\n3 - Tesoura')
    r1.question('Digite um número de 1 há 100: ', (numero) =>{
        let num = parseInt(numero)
        
        if(num > 3 || num < 1){
            console.log('Digite apenas 1, 2 ou 3.')
            jogo()
        }
        if(num == pc){
            console.log('Empate!')
            console.log(pc)
            opcao()
        }
        else{
            if(num == 1 && pc == 3){
                console.log('Você ganhou!')
                console.log(pc)
                opcao()
            }
            if(pc == 1 && num == 3){
                console.log('Pc ganhou!')
                console.log(pc)
                opcao()
            }
            if(num == 3 && pc == 2){
                console.log('Você ganhou!')
                console.log(pc)
                opcao()
            }
            if(pc == 3 && num == 2){
                console.log('Pc ganhou!')
                console.log(pc)
                opcao()
            }
            if(num == 2 && pc == 1){
                console.log('Você ganhou!')
                console.log(pc)
                opcao()
            }
            if(pc == 2 && num == 1){
                console.log('Pc ganhou!')
                console.log(pc)
                opcao()
            }
        }
    })
}
jogo()

