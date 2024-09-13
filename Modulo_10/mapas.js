let nota = new Map()

nota.set('João', 8.5)
nota.set('Maria', 8.0)
nota.set('Fefe', 10)
nota.set('Ana', 9.)

nota.forEach((notas, nome) =>{
    console.log(nome, notas)
});

nota.set('Ana', 8.0)
console.log('-------------------------------')
nota.forEach((notas, nome) =>{
    console.log(nome, notas)
});

console.log('-------------------------------')
console.log('Nova nota da Ana: ', nota.get('Ana'))

console.log('-------------------------------')
let aluno = 'Fefe'

if (nota.has(aluno)){
    console.log('Esse babaca está na turma.')
}
else{
    console.log('Esse babaca não está na turma.')
}

console.log('-------------------------------')
nota.delete('João')
console.log('Deletamos o joão:')
nota.forEach((nota, nome)=>{
    console.log(nome, nota)
})

console.log('-------------------------------')
console.log('Números de alunos: ', nota.size)

console.log('-------------------------------')
nota.clear()

if (nota.size == 0){
    console.log('Lista vazia')
}
else{
    console.log(nota)
}
