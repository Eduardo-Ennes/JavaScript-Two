let listarepedidos = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']

function removerRepetidos(lista) {
    let listaSemRepetidos = lista.filter((item, indice) => {
        return lista.indexOf(item) === indice;
        
    });

    return listaSemRepetidos;
}

let listaLimpa = removerRepetidos(listarepedidos);
console.log('Lista sem repetições:', listaLimpa);
