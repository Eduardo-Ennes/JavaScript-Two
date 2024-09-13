function bissexto(ano) {
    if ((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0) {
        return `${ano} é um ano bissexto.`
    }
    else{
        return `${ano} Não é um ano bissexto.`
    }
    
} 

const ano = bissexto(500)
console.log()
console.log('-----------------------')
console.log(ano)
console.log('-----------------------')
console.log()