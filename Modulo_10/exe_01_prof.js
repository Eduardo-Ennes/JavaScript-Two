const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contatos = new Map();
function adicionarContato(nome, telefone) {
    contatos.set(nome, telefone);
    console.log(`Contato "${nome}" adicionado com sucesso.`);
}

function removerContato(nome) {
    if (contatos.has(nome)) {
        contatos.delete(nome);
        console.log(`Contato "${nome}" removido.`);
    } else {
        console.log(`Contato "${nome}" não encontrado.`);
    }
}
function exibirContatos() {
    console.log('Lista de Contatos:');
    contatos.forEach((telefone, nome) => {
        console.log(`${nome}: ${telefone}`);  
    });
}

function exibirMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Adicionar Contato');  
    console.log('2. Remover Contato');     
    console.log('3. Exibir Contatos');     
    console.log('4. Sair');                

    rl.question('Opção: ', (opcao) => {
        switch (opcao) {
            case '1':  
                rl.question('Nome do Contato: ', (nome) => {
                    rl.question('Telefone: ', (telefone) => {
                        adicionarContato(nome, telefone);
                        exibirMenu();
                    });
                });
                break;
            case '2':  
                rl.question('Nome do Contato: ', (nome) => {
                    removerContato(nome);
                    exibirMenu();
                });
                break;
            
            case '3':  
                exibirContatos();
                exibirMenu();
                break;

            case '4':  
                console.log('Saindo do Programa.');
                rl.close();
                break;

            default: 
                console.log('Opção Inválida. Tente Novamente.');
                exibirMenu();
        }
    });
}

console.log('Bem-vindo ao Gerenciador de Contatos!');
exibirMenu();