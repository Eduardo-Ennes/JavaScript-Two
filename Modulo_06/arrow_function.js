console.log('Primeiro exemplo')
const multiplicar = (num1, num2) => num1 * num2

let resultado = multiplicar(5 , 3)

console.log(resultado)


console.log()
console.log('Segundo exemplo')
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const impares = numeros.filter(numero => numero % 2 !== 0)

console.log(impares)



console.log()
console.log('Terceiro exemplo')
const frutas = ['uva', 'morango', 'banana', 'abacaxi', 'cereja']

const frutasmai = frutas.map(fruta => fruta.toUpperCase())

console.log(frutasmai)