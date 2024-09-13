const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout 
});

const palavras = ['javascript', 'nodejs', 'programacao', 'computador', 'internet'];

const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
// Sorteia uma plavra da lista, math é a biblioteca que deve ser importada, e sorteia com o tamanho dos indices da lista, Math.floor -> arredonda o numero para baixo

let palavraDisplay = '_'.repeat(palavraSecreta.length);
// Essa parte é que exibimos na tela a palavra de forma secreta, '_'.repeat(palavraSecreta.length) -> essa função substitui todas as letras da palavra pelo caracter desejado. 

const maxTentativas = 6;

let tentativasErradas = 0;

function solicitarLetra() {
    console.log(`Palavra: ${palavraDisplay}`); 
    if (tentativasErradas < maxTentativas) { 
        readline.question('Adivinhe uma letra: ', letra => { 
            processarJogada(letra.toLowerCase()); 

        });
    } else { 
        console.log('Você excedeu o número máximo de tentativas. Game over!'); 
        console.log(`A palavra era: ${palavraSecreta}`); 
        readline.close(); 
    }
}

function processarJogada(letra) {
    if (palavraSecreta.includes(letra)) { 
        atualizarPalavraDisplay(letra); 
    } else { 
        tentativasErradas++; 
        console.log(`Letra incorreta. Você tem ${maxTentativas - tentativasErradas} tentativa(s) restante(s).`);
    }

    if (palavraDisplay === palavraSecreta) {
        console.log('Parabéns! Você adivinhou a palavra!'); 
        readline.close(); 

    } else {
        solicitarLetra(); 
    }
}

function atualizarPalavraDisplay(letra) {
    let resultado = ''; 
    let i = 0;

    while (i < palavraSecreta.length){
        if (palavraSecreta[i] === letra){
            resultado += letra;
        }else{
            resultado += palavraDisplay[i];
        }
        i++;
    }
    palavraDisplay = resultado; 
}
solicitarLetra();
