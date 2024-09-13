console.log('Primeiro exemplo')
for(let i = 1; i<=5; i++){
    console.log(`Número: ` + i)
}



console.log()
console.log('Segundo exemplo')
for (let i = 5; i>=1; i--){
    console.log('Número: ' + i)
}



console.log()
console.log('Terceiro exemplo')
let soma = 0
for (let i = 1; i<=5; i++){
    soma += i
}
console.log(`A soma dos números de 1 a 5 é: ${soma}`)



console.log()
console.log('Quarto exemplo')
console.log('Tabela da Tabuada')
const tabela = 10
for (let i = 1; i<= tabela; i++){
    for (let j = 1; j<= tabela; j++){
        console.log(`${i} + ${j} = ${i * j}`)
    }
    console.log()
}