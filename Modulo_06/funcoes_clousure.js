function CriarContador() {
    let count = 0

    return {
        incrementar: function(){
            count += 1
            console.log(`Adicionando...`)
        },

        mostrar: function () {
            console.log(`Contagem atual: ${count}`)
        }
    }
}

const MeuContador = CriarContador()
MeuContador.mostrar()
MeuContador.incrementar()
MeuContador.mostrar()

console.log('--------------------------------------')


function AplicarDesconto(ValorDesconto) {
    return function (Preco) {
        const desconto = Preco * ValorDesconto
        const PrecoFinal = Preco - desconto
        return PrecoFinal
    }
}


const aplicar = AplicarDesconto(0.10)
console.log(aplicar(100))
const teste = AplicarDesconto(0.20)
console.log(aplicar(200))
