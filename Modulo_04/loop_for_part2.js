console.log('Primeiro exemplo')
for (let c = 0; c < 10; c++){
    console.log(c)
}



console.log()
console.log('Segundo exemplo')
const fruta = ['maçã', 'banana', 'laranja']
for (let c = 0; c < fruta.length; c++){
    console.log('Fruta: ' + `${fruta[c]}`)
}



console.log()
console.log('Terceiro exemplo')
const paises = ['Austria', 'Dinamarca', 'Portugal', 'Inglaterra']
for (const c of paises){
    console.log('País: ' + c)
}




console.log()
console.log('Terceiro exemplo')
const pessoa = {
    nome: 'Fefe', 
    idade: 26,
    cidade: 'Rj'
}
for (const c in pessoa){
    console.log(`${c}: ${pessoa[c]}`)
}



console.log()
console.log('Quarto exemplo')
for (let c = 1; c < 10; c++){
    if (c === 5){
        console.log('Fim!')
        break
    }
    console.log(c)
}



console.log()
console.log('Quinto exemplo')
for (let c = 0; c < 10; c++){
    if (c === 5){
        console.log('Você entrou no continue...')
        continue
    }
    console.log(c)
}

console.log()