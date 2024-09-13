const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lista = []
let listaA = []

function Menu() {
    console.log()
    console.log('1 - Finalizar programa\n2 - Adicionar\n3 - Mostrar\n4 - Mostrar nomes com A')
    r1.question('Digite a opção: ', (Numero)=>{
        let num = parseInt(Numero)

        if (num == 1){
            console.log('Finalizando o programa')
            r1.close()
        }
        if (num == 2){
            Adicionar()
        }
        if (num == 3){
            Mostrar()
        }
        if (num == 4){
            MostrarA()
        }
    })
}


function Adicionar() {
    r1.question('Digite o nome: ', (Pessoa)=>{
        lista.push(Pessoa)

        if (Pessoa[0] == 'A' || Pessoa[0] == 'a'){
            listaA.push(Pessoa)
            Menu()
        }
        else{
            Menu()
        }
    })
}


function Mostrar() {
    console.log()
    lista.forEach(function(nome, index) {
        console.log(index, nome)
    })
    Menu()
}


function MostrarA() {
    console.log()
    listaA.forEach(function(nome, index) {
        console.log(index, nome)
    })
    Menu()
}

Menu()