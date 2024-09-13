function encontrarMaximo(array, indice = 0, maxAtual = -Infinity) {
    if (indice === array.length) return maxAtual; 
  
    maxAtual = array[indice] > maxAtual ? array[indice] : maxAtual;
    return encontrarMaximo(array, indice + 1, maxAtual);
  }
  
console.log(encontrarMaximo([1, 5, 3, 9, 2])); 
console.log(encontrarMaximo([-5, -2, -3, -1]));  