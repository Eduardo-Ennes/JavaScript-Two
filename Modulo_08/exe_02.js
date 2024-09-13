const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lista = [
    {Nome: 'fefe', Votos: 0},
    {Nome: 'Zé Droguinha', Votos: 0},
    {Nome: 'Nulo', Votos: 0}
]

function Votar() {
    console.log()
    console.log('1 - Fefe\n2 - Zé droguinha3\n3 - Nulo')
    r1.question('Digite o número: ', (Numero)=>{
        let num = parseInt(Numero)

        if (num == 1){
            lista[0]['Votos'] += 1
            Menu()
        }
        if (num == 2){
            lista[1]['Votos'] += 1
            Menu()
        }
        if(num == 3){
            lista[2]['Votos'] += 1
            Menu()
        }
    })
}

function Menu() {
    console.log()
    console.log('1 - Votar\n2 - Encerrar eleições')
    r1.question('Digite a opção: ', (opcao)=>{
        let op = parseInt(opcao)

        if (op == 1){
            Votar()
        }
        else if(op == 2){
            r1.close()
            Resultado()
        }
        else{
            console.log('Digito inválido, tente novamente...')
            Menu()
        }
    })
}

function Resultado() {
    console.log()
    console.log(`Candidato: Fefe - Votos: ${lista[0]['Votos']}`)
    console.log(`Candidato: Zé Droguinha - Votos: ${lista[1]['Votos']}`)
    console.log(`Candidato: Nulo - Votos: ${lista[2]['Votos']}`)
    if (lista[0]['Votos'] > lista[1]['Votos']){
        console.log('-----------------------------')
        console.log(`O vencedor é Fefe com: ${lista[0]['Votos']} votos`)
        console.log('-----------------------------')
        r1.close()
    }
    if (lista[1]['Votos'] > lista[0]['Votos']){
        console.log('-----------------------------')
        console.log(`O vencedor é Zé Droguinha com: ${lista[1]['Votos']} votos`)
        console.log('-----------------------------')
        r1.close()
    }
    if (lista[0]['Votos'] == lista[1]['Votos']){
        console.log('-----------------------------')
        console.log(`Empate entre os canditados Fefe e Zé Droguinha com: ${lista[0]['Votos']} votos. Teremos um segundo turno.`)
        console.log('-----------------------------')
        r1.close()
    }
}

Votar()