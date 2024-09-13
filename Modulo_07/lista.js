let lista = ['Maçã', 'Banana', 'Morango']

lista.push('Cereja')
console.log('Lista após adicionar Cereja: ', lista)

lista[1] = 'Uva'
// Muda o indice 1 - banana por uva

console.log('Lista após trocar banana por uva: ', lista)

lista.splice(2, 1)
console.log('Lista após deletar Morango: ', lista)

const maca = lista.includes('Maçã')
if (maca == true){
    console.log('Tem maçã na lista: SIM')
}
else{
    console.log('Tem maçã na lista: NÃO')
}

console.log('------------------------')
// !!! Boa forma para se exibir um print
lista.forEach(function(item, index) {
    console.log(index, item)
})

console.log('------------------------')
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let par = numeros.filter(n => n % 2 == 0)
console.log('Numeros pares da lista: ', par)
let aoquadrado = par.map(n => n * n)
console.log('Números pares ao quadrado: ', aoquadrado)
let maiorquecinco = numeros.find(n => n > 5)
console.log('Primeiro número maior que 5: ', maiorquecinco)

console.log('------------------------')
let array1 = ['a', 'b', 'c']
let array2 = ['d', 'e', 'f']

let concatenado = array1.concat(array2)
console.log('Lista concatenada: ', concatenado)

console.log('------------------------')

let teste = [5, 9, 1, 3, 7, 8]
console.log(teste.sort())
console.log(teste.reverse())
let intervalo = teste.slice(1 , 4)
console.log('Lista com slice: ', intervalo)

console.log('------------------------')

let idade = [20, 18, 17, 19, 21]
console.log(idade)
let maioridade = idade.every(n => n > 18)
console.log('Todos na lista são maiores de idade: ', maioridade)
let menoridade = idade.some(n => n < 18)
console.log('Tem um menor de idade na lista: ', menoridade)

console.log('------------------------')

let frase = 'Olá, mundo!'
let palavras = frase.split(',')
console.log('Palavras: ', palavras)
let juncao = palavras.join(',')
console.log('Palavra juntadanovamente: ', juncao)

console.log('------------------------')

let lista_teste = [1, 5, 6, 2, 3]
lista_teste.splice(2, 1)
console.log(lista_teste)




