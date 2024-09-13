let estoque = {
    canetas: 10,
    cadernos: 5,
    borrachas: 7
}

function atualizar(nome, quant) {
    console.log()
    const seguranca = estoque[nome]
    if (quant == 0){
        return 'Digite um número diferente de 0'
    }
    if (estoque[nome] == undefined){
        return 'Erro! o campo ficou vazio ou você escreveu o nome do produto incorretamente.'
    }
    else {
        if (quant > 0){
            console.log(`Adicionando ao estoque ${quant} produto(s)`)
            estoque[nome] += quant
            return `Quantidade atual do estoque é: ${estoque[nome]}`
        }
        else{
            estoque[nome] = estoque[nome] + (quant)
            if (estoque[nome] < 0){
                return `
                Quantidade em estoque: ${seguranca}.
                Remover: ${quant}.
                O número de estoque não pode ser menor do que zero!`
            }
            else{
                console.log(`Removendo do estoque ${quant} produto(s)`)
                return `Quantidade atual do estoque é: ${estoque[nome]}`
            }
        }
    }
}

const teste = atualizar('borrachas', -1)
console.log(teste)