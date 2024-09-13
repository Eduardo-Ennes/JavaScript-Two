const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let frutas = []


function Menu() {
    console.log()
    console.log('Escolha uma opção:')
    console.log('1 - Adicionar Tarefa\n2 - Alterar Tarefa\n3 - Excluir Tarefa\n4 - Exibir Tarefa\n5 - Sair')
    r1.question('Digite uma das opções: ', (opcao) =>{
        
        let num = parseInt(opcao)
        if (isNaN(num)){
            console.log('Digito inválido, tente novamente...')
            Menu()
        }
        else{
            if (num < 1 || num > 5){
                console.log('Digite apenas uma das opções válidas.')
                Menu()
            }
            else{
                if (num == 1){
                    Adicionar()
                }
    
                if (num == 2){
                    Alterar()
                }
    
                if (num == 3){
                    Excluir()
                }
    
                if (num == 4){
                    Exibir()
                }
    
                if (num == 5){
                    Sair()
                }
            }
        }
    })
}


function Exibir() {
    console.log()
    if (frutas.length){
        console.log('Lista:')
        frutas.forEach(function(itens, index) {
        console.log(`${index + 1}: ${itens}`)
    })
    Menu()
    }
    else{
        console.log('A lista está vazia.')
        Menu()
    }
}


function Adicionar() {
    console.log()
    r1.question('Digite a fruta que deseja adcionar: ', (fruta)=>{
        frutas.push(fruta)
        console.log('Adicionado com sucesso!')
        Menu()
    })
}


function Alterar() {
    console.log()
    r1.question('Digite o número da fruta que deseja alterar (0, 1, 2,...): ', (numero)=>{
        let num = parseInt(numero) - 1
        
        if (isNaN(num)){
            console.log('Digito do número errado, tente novamente.')
            Menu()
        }
        else{
            if (num >= 0 && num < frutas.length){
                r1.question('Digite a fruta que deseja adicionar: ', (fruta)=>{
                    frutas[num] = fruta
                    console.log('Alterado com sucesso!')
                    Menu()
                })
            }
            else{
                console.log('Fruta não encontrada na lista, tente novamente...')
                Menu()
            }
        }
    })
}


function Excluir() {
    console.log()
    r1.question('Digite o número da fruta que deseja excluir (0, 1, 2,...): ', (numero)=>{
        let num = parseInt(numero) - 1

        if (isNaN(num)){
            console.log('Digito do número errado, tente novamente.')
            Menu()
        }
        else{
            if (num >= 0 && num < frutas.length){
                frutas.splice(num, 1)
                console.log('Excluido com sucesso!')
                Menu()
            }
            else{
                console.log('Fruta não encontrada na lista, tente novamente...')
                Menu()
            }
        }
    })
}


function Sair() {
    console.log()
    console.log('Programa encerrado!')
    r1.close()
}

Menu()