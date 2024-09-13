/*
O if em JavaScript permite que você faça várias
 comparações usando operadores relacionais, como:
 
 maior que (>), 
 menor que (<), 
 maior ou igual a (>=), 
 menor ou igual a (<=), 
 igual a (===) 
 diferente de (!==)
 Operador lógico E (&&):
 Operador lógico OU (||):
*/

const num = 5

console.log()
if (num > 5) {
    console.log('O número é maior que 5')
} 
if (num == 5){
    console.log('O número é 5')
}
if (num < 5) {
    console.log('O número não é maior que 5')
}

console.log('-------------------------------------------------')

let saldo = -10

if (saldo == 0){
    console.log(`Seu saldo é de R$${saldo} reais.`)
}
if (saldo < 0){
    console.log(`Você possui uma dívida de R$${saldo}`)
}
if (saldo > 0){
    console.log(`Você possui um saldo positivo de R$${saldo}`)
}

console.log('-------------------------------------------------')

let diasemana = 'sexta'

if (diasemana !== 'sabado'){
    console.log('Hoje não é sabado')
}
else{
    console.log('Hoje é sabado')
}

console.log('-------------------------------------------------')

let idadeE = 17
let cnh = true

if (idadeE >= 18 && cnh){
    console.log('Maior de idade e possui cnh')
}
else{
    console.log('Menor de idade e não possui cnh')
}

console.log('-------------------------------------------------')

let cor = 'Branco'

if (cor == 'azul' || cor == 'laranja'){
    console.log('Cor é igual a azul ou laranja')
}
else{
    console.log('Cor diferente de azul e laranja')
}

console.log()
