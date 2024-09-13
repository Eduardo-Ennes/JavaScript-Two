let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matriz[1][1])

console.log('---------------------------')
matriz[0][2] = 10
console.log(matriz)

console.log('---------------------------')
matriz.push([10, 11, 12])
console.log(matriz)

console.log('---------------------------')
matriz.forEach(linha => {
    // aqui se faz um for para cada lista e adiciona o 13 em cada uma delas 
    linha.push(13)
})
console.log(matriz)

console.log('---------------------------')
matriz.forEach(linha =>{
    let linha_2 = linha.join(' ')
    console.log(linha_2)
})

console.log('---------------------------')
let matriz1 = [ 
    [1, 2],
    [3, 4]
]
let soma = 0

for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1.length; j++) {
         soma += matriz1[i][j];
        
    }
}

console.log(soma)


console.log('---------------------------')
let matriz2 = [
    [1, 2, 3], 
    [4, 5, 6] 
  ];
  
  let transposta = [];
  for (let i = 0; i < matriz2[0].length; i++) {
    transposta[i] = [];
  }
  for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        transposta[j][i] = matriz2[i][j];
  
    }
  }
  
  console.log('Matriz Transposta:');
  transposta.forEach(linha => console.log(linha.join(' '))); 


console.log('---------------------------')
console.log('Encontra o maior elemento da matriz')
let matriz3 = [
[1, 2, 3],
[4, 5, 6], 
[7, 8, 9]  
];

let max = -Infinity;
for (let i = 0; i < matriz3.length; i++) {
for (let j = 0; j < matriz3[i].length; j++) {
    if (matriz3[i][j] > max) {
        max = matriz3[i][j];
    }
}
}
console.log('Maior elemento da matriz:', max);


console.log('---------------------------')
let matriz5 = [
    [1, 2, 3], // Primeira linha da matriz
    [4, 5, 6], // Segunda linha da matriz
    [7, 8, 9]  // Terceira linha da matriz
  ];
let rotacionada = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];

for (let i = 0; i < matriz5.length; i++) {
for (let j = 0; j < matriz5[i].length; j++) {
    rotacionada[j][matriz5.length - 1 - i] = matriz5[i][j];
}
}
console.log('Matriz Rotacionada 90 graus no sentido horário:');
rotacionada.forEach(linha => {
console.log(linha.join(' '));
});


console.log('---------------------------')
console.log('Matriz 3x3 preenchida com zeros')
let matriz6 = new Array(3); // Cria um array com três elementos (linhas)
for (let i = 0; i < matriz6.length; i++) {
    matriz6[i] = new Array(3); 
    for (let j = 0; j < matriz6[i].length; j++) {
        matriz6[i][j] = 0; 

    }
}
console.log('Matriz 3x3 preenchida com zeros:');
matriz6.forEach(linha => {
    console.log(linha.join(' '));
});


console.log('---------------------------')
let matriz7 = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]  
];
let diagonalPrincipal = [];
for (let i = 0; i < matriz7.length; i++) {
    diagonalPrincipal.push(matriz7[i][i]);

}
console.log('Diagonal Principal:', diagonalPrincipal);



console.log('---------------------------')
console.log('Soma de matrizes')
let C = [
    [1, 2],  
    [3, 4]   
];
let D = [
    [5, 6],  
    [7, 8]   
];

let somaMatrizes = [
    [0, 0],  
    [0, 0]   
];

for (let i = 0; i < C.length; i++) {  
    for (let j = 0; j < C[i].length; j++) { 
        somaMatrizes[i][j] = C[i][j] + D[i][j];
    }
}
console.log('Soma das Matrizes:');
somaMatrizes.forEach(linha => {
    console.log(linha.join(' ')); 
});



console.log('---------------------------')
let matrizBidimensional = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]  
  ];
console.log(matrizBidimensional[1][2]); 
matrizBidimensional[2][0] = 10;
console.log('Matriz Bidimensional Modificada:');
matrizBidimensional.forEach(linha => {
    console.log(linha.join(' ')); 
});



console.log('---------------------------')
let matrizTridimensional = [
[
    [1, 2, 3],   
    [4, 5, 6],   
    [7, 8, 9]   
],
[
    [10, 11, 12],  
    [13, 14, 15],  
    [16, 17, 18]   
]
];
console.log(matrizTridimensional[1][2][1]); 
matrizTridimensional[0][0][2] = 20;  
console.log('Matriz Tridimensional Modificada:');
matrizTridimensional.forEach(bloco => {
console.log('Bloco:');
bloco.forEach(linha => {
    console.log(linha.join(' '));  
});
});