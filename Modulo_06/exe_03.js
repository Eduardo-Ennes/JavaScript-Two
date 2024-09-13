function desconto(valor, porcento) {
    let valordesconto = valor - ((valor * porcento) / 100) 
    return valordesconto
}

console.log(desconto(50, 50))