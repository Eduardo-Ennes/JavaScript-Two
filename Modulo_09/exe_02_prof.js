const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let registroProdutos = [];
function adicionarProduto() {
    rl.question("Digite o nome do produto: ", (nome) => {
        rl.question("Digite o preço do produto: ", (preco) => {
            rl.question("Digite a quantidade em estoque do produto: ", (quantidade) => {
                preco = parseFloat(preco);
                quantidade = parseInt(quantidade);

                let produto = { nome, preco, quantidade };
                registroProdutos.push(produto);

                console.log(`Produto "${nome}" adicionado ao registro.`);

                menu();
            });
        });
    });
}

function atualizarPreco() {
    rl.question("Digite o nome do produto que deseja atualizar o preço: ", (nome) => {
        let produto = registroProdutos.find(item => item.nome === nome);
        if (produto) {

            rl.question("Digite o novo preço do produto: ", (novoPreco) => {
                novoPreco = parseFloat(novoPreco);
                produto.preco = novoPreco;
                console.log(`Preço do produto "${nome}" atualizado para R$ ${novoPreco.toFixed(2)}.`);

                menu();

            });
        } else {

            console.log(`Produto "${nome}" não encontrado.`);

            menu();
        }
    });
}

function atualizarQuantidade() {
    rl.question("Digite o nome do produto que deseja atualizar a quantidade em estoque: ", (nome) => {
        
        let produto = registroProdutos.find(item => item.nome === nome);
        if (produto) {
            rl.question("Digite a nova quantidade em estoque do produto: ", (novaQuantidade) => {
                
                novaQuantidade = parseInt(novaQuantidade);
                produto.quantidade = novaQuantidade;

                console.log(`Quantidade em estoque do produto "${nome}" atualizada para ${novaQuantidade}.`);

                menu();
            });

        } else {
            console.log(`Produto "${nome}" não encontrado.`);
            menu();
        }
    });
}

function removerProduto() {
    rl.question("Digite o nome do produto que deseja remover: ", (nome) => {
        registroProdutos = registroProdutos.filter(item => item.nome !== nome);
        console.log(`Produto "${nome}" removido do registro.`);
        menu();

    });
}

function exibirProdutos() {
    console.log("Produtos registrados:");
    registroProdutos.forEach(produto => {

        console.log(`Nome: ${produto.nome}, Preço: R$ ${produto.preco.toFixed(2)}, Quantidade em estoque: ${produto.quantidade}`);
    
    });
    menu();
}

function menu() {
    rl.question(`Escolha uma opção:
    1. Adicionar Produto
    2. Atualizar Preço
    3. Atualizar Quantidade
    4. Remover Produto
    5. Exibir Produtos
    6. Sair
    `, (escolha) => {
        switch (escolha) {
            
            case '1': 
                adicionarProduto();
                break;
            case '2':  
                atualizarPreco();
                break;
            case '3':  
                atualizarQuantidade();
                break;
            case '4':  
                removerProduto();
                break;
            case '5':  
                exibirProdutos();
                break;
            case '6':  
                rl.close();  
                break;
            default:  
                console.log("Opção inválida. Tente novamente.");
                menu();
        }
    });
}

menu();