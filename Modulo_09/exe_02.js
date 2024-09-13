const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lista = []

function Menu() {
    console.log()
    console.log('Digite uma dasopções:')
    console.log('1 - Adicionar\n2 - Atualizar\n3 - Verificar\n4 - Sair')
    r1.question('Digite uma das opções: ', (opcao)=>{
        let op = parseInt(opcao)

        if (isNaN(op)){
            console.log('Digito inválido, tente novamente...')
            Menu()
        }
        else{
            if (op > 4 || op < 1){
                console.log('Error! digite apenas uma das opções.')
                Menu()
            }
            else if (op == 1){
                Adicionar()
            }
            else if(op == 2){
                Atualizar()
            }
            else if(op == 3){
                Verificar()
            }
            else if(op == 4){
                Sair()
            }
        }
    })
}


function Adicionar() {
    console.log()
    r1.question('Digite o nome do produto: ', (Nome)=>{
        r1.question('Digite o preço: ', (Preco)=>{
            r1.question('Digite a quantidade em estoque: ', (Estoque)=>{
                let preco = parseFloat(Preco)
                let estoque = parseInt(Estoque)

                if (isNaN(preco) && isNaN(estoque)){
                    console.log('Digite apenas números nos campos preço e quantidade em estoque.')
                    Adicionar()
                }
                else{
                    if (preco < 0.01 || estoque < 1){
                        console.log('O valor do produto não pode ser R$0,00 ou menor que R$0,00\nO estoque deve conter no mínimo 1 produto.')
                        Adicionar()
                    }
                    else{
                        lista.push({Produto: Nome, Preco: preco.toFixed(2), Estoque: estoque})
                        Menu()
                    }
                }
            })
        })
    })
    
}


function Atualizar() {
    console.log()
    if(lista.length){
        console.log('Lista de estoque de produtos: ')
        let num = 1
        for (let c of lista){
            console.log(`Numero: ${num}, Produto: ${c['Produto']}, Preco: R$${c['Preco']}, Qtd: ${c['Estoque']}`)
            num += 1
        }

        r1.question('Digite o número do produto para modifica-lo: ', (Indice)=>{
            let index = parseInt(Indice) - 1
            
            if (index >= 0 && index < lista.length){
                console.log()
                console.log('1 - Nome do produto\n2 - Preço\n3 - Quantidade em estoque\n4 - Deletar\n5 - Voltar ao menu')
                r1.question('Digite uma opção: ', (opcao)=>{

                 
                let op = parseInt(opcao)

                if (isNaN(op) || isNaN(index)){
                    console.log('Digito inválido, tente novamente...')
                    Atualizar()
                }
                else{
                    if (index >= 0 && index < lista.length ){
                        if (op < 1 || op > 5){
                            console.log('Digite apenas umas das opções')
                            Atualizar()
                        }
                        if (op == 1){
                            console.log(lista[index])
                            r1.question('Digite o novo nome do produto: ', (Nome)=>{
                                lista[index]['Produto'] = Nome
                                console.log('Atualizado com sucesso!')
                                Menu()
                            })
                        }
                        if (op == 2){
                            console.log(lista[index])
                            r1.question('Digite o novo preço do produto: ', (Preco)=>{
                                let preco = parseFloat(Preco)

                                if (isNaN(preco)){
                                    console.log('Digito de preço inválido, tente novamente.')
                                    Atualizar()
                                }
                                else{
                                    lista[index]['Preco'] = preco
                                    console.log('Atualizado com sucesso.')
                                    Menu()
                                }
                            })
                        }
                        if (op == 3){
                            console.log(lista[index])
                            r1.question('Digite a nova quantidade em estoque: ', (Estoque)=>{
                                let estoque = parseInt(Estoque)

                                if (isNaN(estoque)){
                                    console.log('Digite um número válido.')
                                    Atualizar()
                                }
                                else{
                                    if (estoque >= 1){
                                        console.log(lista[index])
                                        lista[index]['Estoque'] = estoque
                                        console.log('Atualizado com sucesso.')
                                        Menu()
                                    }
                                    else{
                                        console.log('O estoque deve conter pelo menos1 produto.')
                                        Menu()
                                    }
                                }
                            })
                        }
                        if (op == 4){
                            console.log(lista[index])
                            delete lista[index]['Produto']
                            delete lista[index]['Preco']
                            delete lista[index]['Estoque']
                            console.log('Deletado com sucesso')
                            Menu()
                        }
                        if (op == 5){
                            console.log('Voltando ao menu.')
                            Menu()
                        }
                    }
                    else{
                        console.log('Produto não encontrado na lista.')
                        Atualizar()
                    }
                }
            })
            }
            else{
                console.log('Produto não encontrado na lista de estoque')
                Menu()
            }            
        })
    }
    else{
        console.log('A lista do estoque está vazia.')
        Menu()
    }
}


function Verificar() {
    console.log()
    if (lista.length){
        console.log('Lista de estoque de produtos: ')
        let num = 1
        for (let c of lista){
            console.log(`Numero: ${num}, Produto: ${c['Produto']}, Preco: R$${c['Preco']}, Qtd: ${c['Estoque']}`)
            num += 1
        }
        Menu()
    }
    else{
        console.log('A lista do estoque está vazia.')
        Menu()
    }
}


function Sair() {
    console.log()
    console.log('Programa encerrado!')
    r1.close()
}

Menu()