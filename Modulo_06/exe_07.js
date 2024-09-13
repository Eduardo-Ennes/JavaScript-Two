function atualizar(num) {
    let quant_estoque = 10
    console.log(quant_estoque)
    if (num == 0){
        return 'Digite um número diferente de 0'
    }
    if (num > quant_estoque){
        return `Quantidade de estoque insuficiente: ${quant_estoque}`
    }else{
        if (num < 0){
            console.log(`Removendo do estoque ${num} produto(s)`)
            quant_estoque = quant_estoque + (num)
        }
        else{
            console.log(`Adicionando ao estoque ${num} produto(s)`)
            quant_estoque += num
        }
    return `Quantidade atual do estoque é: ${quant_estoque}`
    }
 }

 const pedido = atualizar(-10)
 console.log(pedido)