let nome = 'Maria!'

function saudar() {
    let mensagem = 'Olá, '
    return mensagem + nome
}

const mostrar = saudar()
console.log(mostrar)



function criarcontador() {
    let contador = 0;

    function incrementar() {
        contador++
        console.log(contador)
    }

    return incrementar
}

const contador = criarcontador()
console.log(contador())
console.log(contador())
console.log(contador())