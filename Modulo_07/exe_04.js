const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lista = []


function Menu() {
    console.log()
    console.log('1 - Adicionar\n2 - Remover\n3 - Ver lista\n4 - Sair')
    r1.question('Digite uma das opções: ', (Numero)=>{
        let num = parseInt(Numero)

        if (isNaN(num)){
            Menu()
        }
        else{
            if (num == 1){
                Adicionar()
            }
            if (num == 2){
                Remover()
            }
            if (num == 3){
                Mostrar()
            }
            if (num == 4){
                Sair()
            }
        }
    })
}


function Adicionar() {
    console.log()
    r1.question('Digite o nome do rpoduto: ', (Produto)=>{
        if (Produto == ''){
            console.log('Digite algo, tente novamente...')
            Menu()
        }
        else{
            lista.push(Produto)
            console.log('Adicionado com sucesso.')
            Menu()
        }
    })
}


function Remover() {
    console.log()
    lista.forEach(function(item, index) {
        console.log(index + 1, item)
    })
    r1.question('Digite o número do produto que deseja excluir: ', (Numero)=>{
        let num = parseInt(Numero) - 1

        if (isNaN(num)){
            console.log('Digito invalido, tente novamente...')
            Menu()
        }
        else{
            if (num < 0 || num > lista.length){
                console.log('Produto não encontrado.')
                Menu()
            }
            else{
                lista.splice(num, 1)
                console.log('Removido com sucesso.')
                Menu()
            }
        }
    })
}


function Mostrar() {
    if (lista.length){
        lista.forEach(function (item, index) {
            console.log(index + 1, item)
        })
        Menu()
    }
    else{
        console.log('A lista está vazia.')
        Menu()
    }
}

function Sair() {
    console.log('Programa encerrado.')
    r1.close()
}

Menu()




/* 
// Forma do professor: 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listaCompras = [];

function exibirMenu() {
  console.log(`
Lista de Compras
================

1. Adicionar Item
2. Remover Item
3. Exibir Lista de Compras
4. Sair
`);
}

function adicionarItem(item) {
  listaCompras.push(item);
  console.log(`Item "${item}" adicionado à lista de compras.\n`);
}

function removerItem(index) {
  if (index >= 0 && index < listaCompras.length) {
    const itemRemovido = listaCompras.splice(index, 1);
    console.log(`Item "${itemRemovido}" removido da lista de compras.\n`);
  } else {
    console.log("Índice inválido. Tente novamente.\n");
  }
}

function exibirListaCompras() {
    console.log("Lista de Compras:");
    listaCompras.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
    console.log();
  }

function main() {
    exibirMenu();
    rl.question('Escolha uma opção: ', (opcao) => {
      switch (opcao) {
        case '1':
          rl.question('Digite o item que deseja adicionar à lista de compras: ', (item) => {
            adicionarItem(item);
            main();
          });
          break;

        case '2':
          exibirListaCompras();
          rl.question('Digite o número do item que deseja remover: ', (index) => {
            removerItem(parseInt(index) - 1);
            main();
  
          });
          break;

        case '3':
          exibirListaCompras();
          main();
          break;

        case '4':
          console.log("Programa encerrado. Obrigado por usar a Lista de Compras!");
          rl.close();
          break;

        default:
          console.log("Opção inválida. Tente novamente.\n");
          main();
      }
    });
  }
  main();
*/