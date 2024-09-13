/* function filtrar(array, funcaofiltrar){
    let lista = []
    for (let elemento of array){
        if (funcaofiltrar(elemento)){
            lista.push(elemento)
        }
    }

    return lista
}

function Par(numero) {
    if (numero % 2 == 0){
        return `${numero} são pares`
    }
}

function maiordez(numeros) {
    if (numeros > 10){
        return `${numeros} são maiores do que 10`
    }
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15]
let numeropares = filtrar(numeros, Par)
console.log(numeropares)
let maiorquedez = filtrar(numeros, maiordez)
console.log(maiorquedez) */



function aplicaroperacao(numeros, operacao) {
    let lista = []

    for(let numero in numeros){
        lista.push(operacao(numero))
    }

    return lista
}


function dobrar(valor) {
    return valor * 3
}


function incrementar (valor) {
    return valor + 1
}

let array_numeros = [1, 2, 3, 4, 5, 0]

let numdobrado = aplicaroperacao(array_numeros, dobrar)
console.log(numdobrado)
let incrementado = aplicaroperacao(array_numeros, incrementar)
console.log(incrementado)