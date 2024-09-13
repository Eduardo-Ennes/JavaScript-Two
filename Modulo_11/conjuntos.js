let conjunto = new Set();

conjunto.add('A');
conjunto.add('B');
conjunto.add('C');
conjunto.add('D');

console.log("O conjunto tem o valor 'B'?", conjunto.has('B')); 
console.log("O conjunto tem o valor 'Z'?", conjunto.has('Z')); 

conjunto.delete('B');

console.log("Tamanho do conjunto após remover 'B':", conjunto.size); 

conjunto.clear();
console.log("Tamanho do conjunto após limpar:", conjunto.size); 

conjunto.add('X');
conjunto.add('Y');
conjunto.add('Z');
conjunto.add('A');

console.log("Elementos do conjunto:");
conjunto.forEach(valor => console.log(valor));

console.log('----------------------------')
let arrayConjunto = [...conjunto];

console.log("Conjunto convertido para array:", arrayConjunto);

console.log('----------------------------')
let outroConjunto = new Set(['Y', 'Z', 'W']);

let uniao = new Set([...conjunto, ...outroConjunto]);

console.log("União dos conjuntos:", uniao);

console.log('----------------------------')
let intersecao = new Set();

conjunto.forEach(valor => {

    if (outroConjunto.has(valor)) {
        
        intersecao.add(valor);
    }
});

console.log("Interseção dos conjuntos:", intersecao);

console.log('----------------------------')
let diferenca = new Set(conjunto);


outroConjunto.forEach(valor => {

    if (diferenca.has(valor)) {
        
        diferenca.delete(valor);
    }
});

console.log("Diferença dos conjuntos:", diferenca);