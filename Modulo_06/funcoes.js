console.log('Primeiro exemplo')
function somar(num1, num2) {
    soma = num1 + num2
    console.log(`${num1} + ${num2} = ${soma}`)
}

somar(10, 3)



console.log()
console.log('Segundo exemplo')
function ParImpar(num) {
    if (num % 2 == 0){
        console.log(`${num} é par`)
    }
    else{
        console.log(`${num} é ímpar`)
    }
}

ParImpar(9)



console.log()
console.log('Terceiro exemplo')
function saudar(nome) {
    return 'Olá ' + `${nome},` + ' seja bem vindo(a)!'
}

let resul = saudar('Fefe')
console.log(resul)

console.log()