const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lista = []

function Adicionar() {
    r1.question('Digite o nome do aluno(a): ', (nome)=>{
        r1.question('Digite a primeira nota: ', (N1)=>{
            r1.question('Digite a segunda nota: ', (N2)=>{
                r1.question('Digite a terceira nota: ', (N3)=>{

                    let n1 = parseInt(N1)
                    let n2 = parseInt(N2)
                    let n3 = parseInt(N3)
                    let nota = (n1 + n2 + n3) / 3
                    
                    if (nota < 4){
                        lista.push({Nome: nome, Nota: nota, Situação: 'Reprovado'})
                        console.log(lista)
                        Menu()
                    }
                    if(nota >= 4 && nota < 7){
                        lista.push({Nome: nome, Nota: nota, Situação: 'Recuperação'})
                        console.log(lista)
                        Menu()
                    }
                    if(nota >= 7){
                        lista.push({Nome: nome, Nota: nota, Situação: 'Aprovado'})
                        console.log(lista)
                        Menu()
                    }
                })
            })
        })
    })
}

function Menu() {
    console.log('1 - add\n2 - sair')
    r1.question('Digite a opção: ', (opcao)=>{
        let op = parseInt(opcao)

        if (op == 1){
            Adicionar()
        }
        if (op == 2){
            r1.close()
        }
    })
}

Adicionar()