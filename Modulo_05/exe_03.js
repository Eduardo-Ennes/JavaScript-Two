let contador = 0
let soma = 0

while (contador <= 100){
    if (contador % 2 == 0){
        soma += contador
    }
    contador += 1
}

console.log(`A soma de todos os números pares até 100 é: ${soma}`)