const readline = require('readline')

const cal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

cal.question('Digite um número: ', (num1) =>{
    cal.question('Digite o operador (=, -, /, x): ',(operador) =>{
        cal.question('Digite o segundo número: ', (num2)=>{
            const n1 = parseFloat(num1)
            const op = operador
            const n2 = parseFloat(num2)

            if (op === '*'){
                calculo = n1 * n2
                console.log(`${n1} x ${n2} = ${calculo}`)
                
            }
            if (op === '/'){
                if (n2 !== 0){
                    calculo = n1 / n2
                    console.log(`${n1} / ${n2} = ${calculo}`)
                }
                else{
                    console.log('Nenhum número pode ser dividido por 0')
                }
            }
            if (op === '+'){
                calculo = n1 + n2
                console.log(`${n1} + ${n2} = ${calculo}`)
            }
            if (op === '-'){
                calculo = n1 - n2
                console.log(`${n1} - ${n2} = ${calculo}`)
            }
        }) 
    })
})