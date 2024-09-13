const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let filmes = new Set()

function Menu() {
    console.log()
    console.log('Escolha uma das opções:')
    console.log('1 - Adicionar\n2 - Remover\n3 - Listar\n4 - Sair')
    r1.question('Digite uma das opções: ', (Numero)=>{
        let num = parseInt(Numero)

        if (isNaN(num)){
            console.log('Digito inválido, tente novamente...')
            Menu()
        }
        else{
            if(num < 1 || num > 4){
                console.log('Digite apenas uma das opções correspondentes.')
                Menu()
            }
            if(num == 1){
                Adicionar()
            }
            if(num == 2){
                Remover()
            }
            if(num == 3){
                Listar()
            }
            if(num == 4){
                Sair()
            }
        }
    })
}


function Adicionar() {
    console.log()
    r1.question('Digite o nome do filme: ', (Filme)=>{
        let filme = Filme.toUpperCase()
        filmes.add(filme)
        console.log('Adicionado com sucesso!')
        Menu()
    })
}


function Remover() {
    console.log()
    r1.question('Digite o nome para remover: ', (Nome)=>{
        let filme = Nome.toUpperCase()

        if (filmes.has(filme)){
            filmes.delete(filme)
            console.log('Deletado com sucesso!')
            Menu()
        }
        else{
            console.log('O nome digitado não se encontra na lista')
            Menu()
        }
    })
}


function Listar() {
    console.log()
    let c = 1
    console.log('Lista:')
    filmes.forEach((filme)=>{
        console.log(c, ' - ', filme)
        c++
    })
    Menu()
}


function Sair() {
    console.log()
    console.log('Programa encerrado')
    console.log()
    r1.close()
}


Menu()