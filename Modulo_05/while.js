let contador = 0

while (contador < 5){
    contador += 1
    console.log(`${contador}`)
}


console.log('---------------------')


let contador_2 = 0
let condicao = true 

while (condicao == true){
    if (contador_2 == 10){
        condicao = false
    }
    else{
        contador_2 += 1
        console.log(`${contador_2}`)
    }
}


console.log('---------------------')

let contador_3 = 10

while(contador_3){
    if (contador_3 == 0){
        console.log('Fim do programa!')
        break
    }
    else{
        contador_3 -= 1
        console.log(`${contador_3}`)
    }
}

console.log('---------------------')

let numero = 0
let limite = 10

while (numero < limite){
    console.log(`${numero}`)
    numero++
}