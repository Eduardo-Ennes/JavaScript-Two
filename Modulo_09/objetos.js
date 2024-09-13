let pessoa = {
    nome: 'fefe', 
    idade: 26
}

pessoa.profissao = 'Arquiteto'
console.log(pessoa)


console.log('---------------------------')
let pessoa2 = {
    nome: 'fefe', 
    idade: 26,
    profissao: 'arquiteto'
}

delete pessoa2.profissao
console.log(pessoa2)
pessoa2.profissao = 'Arquiteto'
console.log(pessoa2['profissao'])
pessoa2.nome = 'Maria'
console.log(pessoa2)


console.log('---------------------------')
let obj1 = {a: 1, b:2}
let obj2 = {b: 3, c:4}

const combinado = Object.assign({}, obj1, obj2)
console.log(combinado) // O b:3 irá subscrever o b:2, o ultimo sobescreve o primeiro


console.log('---------------------------')
let pessoa3 = {
    nome: 'fefe', 
    idade: 26,
    profissao: 'arquiteto'
}

// Keys or Values
for (const c of Object.values(pessoa3)){
    console.log(`${c}`)
}