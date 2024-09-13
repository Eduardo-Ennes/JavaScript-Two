const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Digite números separados por vírgulas: ', function(input){
    let nums = input.split(',');
    let soma = 0

    for (let c = 0; c < nums.length; c++) {
        soma += Number(nums[c])
    }
    console.log(`A soma dos números é: ${soma}`);
})
