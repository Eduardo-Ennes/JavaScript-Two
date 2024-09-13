function endereco(rua, numero, bairro, cidade, uf) {
    return `Rua: ${rua}
Número: ${numero}
Bairro: ${bairro}
Cidade: ${cidade}
Uf: ${uf}`
}

console.log("Endereço de entrega: ")
console.log(endereco('teste', 232, 'teste', 'Rio de janeiro', 'Rj'))