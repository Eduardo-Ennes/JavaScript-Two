const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let compras = []
let total = [
    {Total: 0}
]


function Menu() {
    console.log()
    console.log('Digite uma das opções: ')
    console.log('1 - Adicionar ao carrinho\n2 - Remover do carrinho\n3 - Listar\n4 - Pagar')
    r1.question('Digite uma das opções: ', (opcao)=>{
        let num = parseInt(opcao)

        if (isNaN(num)){
            console.log('Digito inválido, tente novamente...')
            Menu()
        }
        else{
            if (num < 1 || num > 4){
                console.log('Digite apenas uma das opções correspondentes.')
                Menu()
            }
            if (num == 1){
                Adicionar()
            }
            if (num == 2){
                Remover()
            }
            if (num == 3){
                Listar()
            }
            if (num == 4){
                Sair()
            }
        }
    })
}

function Adicionar() {
    console.log()
    console.log('Digite 0 na qtd do produto para voltar ao menu.')
    r1.question('Digite o nome do produto: ', (Nome)=>{
        r1.question('Digite o valor do produto: ', (Valor)=>{
            r1.question('Digite a quantidade do produto: ', (Qtd)=>{
                let preco = parseFloat(Valor)
                let qtd = parseInt(Qtd)
                
                if (isNaN(preco) || isNaN(qtd)){
                    console.log('Houve um erro de digito no preço ou quantidade do produto.')
                    Adicionar()
                }
                else{
                    if (preco < 0.01 || qtd < 0){
                        console.log('Erro! preço não pode ser 0 e qtd não pode ser menor que 0.')
                        Adicionar()
                    }
                    else if (qtd == 0){
                        Menu()
                    }
                    else{
                        const Criar = CriarCarrinho()
                        Criar.adicionar(Nome, preco, qtd)
                        console.log('Adicionar com sucesso!')
                        Menu()
                    }
                }
            })
        })
    })
}


function Remover() {
    console.log()
    console.log('Carrinho de compra: ')
    let i = 0
    let n = 1
    if (compras.length){
        for (let c of compras){
            console.log(`${n} - (Produto: ${c[0]} Preco: R$${c[1]} Qtd: ${c[2]})`)
            i++
            n++
        }
        for (let p of total){
            console.log(`Valor total: R$${p['Total'].toFixed(2)}`)
        }

        console.log()
        console.log('Digite 0 para voltar ao menu.')
        r1.question('Digite o número do produto que deseja remover do carrinho: ', (Numero)=>{
        let num = parseInt(Numero) - 1

        if (isNaN(num)){
            console.log('Digite um número válido.')
            Remover()
        }
        else{
            if (num == -1){
                Menu()
            }
            else{
                if (num >= 0 && num < compras.length){
                    let remove = CriarCarrinho()
                    remove.remover(num)
                    console.log('Removido com sucesso!')
                    Menu()
                }
                else{
                    console.log('Produto não encontrado no carrinho.')
                    Menu()
                }
            }
        }
    })
    }
    else{
        console.log('O carrinho de compras está vazio.')
        Menu()
    }
}


function Listar() {
    console.log()
    console.log('Carrinho de compra: ')
    let i = 0
    let n = 1
    if (compras.length){
        for (let c of compras){
            console.log(`${n} - (Produto: ${c[0]} Preco: R$${c[1]} Qtd: ${c[2]})`)
            i++
            n++
        }
        for (let p of total){
            console.log(`Valor total: R$${p['Total'].toFixed(2)}`)
        }
        Menu()
    }
    else{
        console.log('O carrinho de compras está vazio.')
        Menu()
    }
}


function Sair() {
    console.log()
    console.log('Abrindo página para pagamento.')
    console.log('Muito obrigado por comprar conosco.')
    console.log()
    r1.close()
}


function CriarCarrinho() {
    return {
        adicionar: function(Nome, preco, qtd){
            let valor = preco * qtd
            compras.push([Nome , valor.toFixed(2), qtd])
            total[0]['Total'] += valor
        },
        
        remover: function(Num) {
            total[0]['Total'] -= compras[Num][1]
            compras.splice(Num, 1)
        },

        encerrar: function (Num) {
            
        }
    }
}


Menu()