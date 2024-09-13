const produtos = [
    {nome: 'caderno', categoria:'papelaria', preco: 10},
    {nome: 'lapis', categoria:'papelaria', preco: 2},
    {nome: 'teclado', categoria:'eletronico', preco: 100},
    {nome: 'mouse', categoria:'eletronico', preco: 50}
]

function filtrar(produtos, valorminimo) {
    return produtos.filter(produto => produto.preco > valorminimo)
}

function aumentarpreco(produtos, porcentagem) {
    return produtos.map(produto => ({
        preco: produto.preco * (1 + porcentagem / 100)
            }
        )
    )
}

const produtosfiltrados = filtrar(produtos, 20)
const produtosaumentados = aumentarpreco(produtosfiltrados, 10)
console.log(produtosaumentados)