const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lista = new Map()


function Menu() {
    console.log()
    console.log('Escolhas uma das opções:')
    console.log('1 - Adicionar contato\n2 - Remover contato\n3 - Exibir lista de contato\n4 - Sair')
    r1.question('Digite uma das opções: ',  (Numero)=>{
        let num = parseInt(Numero)

        if (isNaN(num)){
            console.log('Digite uma das opções')
            Menu()
        }
        else{
            if (num < 1 || num > 4){
                console.log('Opção inválida, tente novamente...')
                Menu()
            }
            if (num == 1){
                Adicionar()
            }
            if (num == 2){
                Remover()
            }
            if (num == 3){
                Exibir()
            }
            if (num == 4){
                Sair()
            }
        }
    })
}


function Adicionar() {
    console.log()
    r1.question('Digite o nome: ', (Nome)=>{
        r1.question('Digite o número: ', (Numero)=>{
            let nome = Nome.toUpperCase()
            let numero = parseFloat(Numero)
    
            if (isNaN(numero)){
                console.log('Digite um númerode telefone válido')
                Menu()
                }
            else{
                lista.set(nome, numero)
                console.log('Adicionadocom sucesso!')
                Menu()
            }
        })
    })
}


function Remover() {
    console.log()
    r1.question('Digite o nome para remover: ', (Nome)=>{
        let nome = Nome.toUpperCase()

        if (lista.has(nome)){
            lista.delete(nome)
            console.log('Removido com sucesso!')
            Menu()
        }
        else{
            console.log('Contato não encontardo na lista.')
            Menu()
        }
    })
}


function Exibir() {
    console.log()
    console.log('Lista de contatos:')
    if (lista.size == 0){
        console.log('A lista se encontra vazia')
        Menu()
    }
    else{
        let c = 1
        lista.forEach((Numero, Nome)=>{
            console.log(`${c} ${Nome} - ${Numero}`)
            c++
        })
        Menu()
    }
}


function Sair() {
    console.log()
    console.log('Programa encerrado')
    r1.close()
}


Menu()
