console.log('Primeiro exemplo')
let resultado = function multiplicar(num) {
    return num * num
}

console.log(resultado(4))



console.log()
console.log('Segundo exemplo')
let juntar = function concatenar(palavra1, palavra2) {
    return `${palavra1} ${palavra2}`   
}

console.log(juntar('Olá', 'Mundo!'))



console.log()
console.log('Terceiro exemplo')
let numero = function MiorMenosZero(num) {
    if (num < 0){
        return `O número ${num} é menor do que 0`
    }
    if (num == 0){
        return `O número é ${num} `
    }
    if (num > 0){
        return `O número ${num} é maior do que 0`
    }
}

console.log(numero(-10))