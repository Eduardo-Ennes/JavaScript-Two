const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let ListaConvidados = []

function Menu() {
    console.log()
    console.log('1 - Adicionar\n2 - Remover\n3 - Verificar\n4 - Alterar')
    r1.question('Digite uma opção: ', (opcao) => {
        let num = parseInt(opcao)

        if (isNaN(num)) {
            console.log('Opção inválida! tente novamente...')
            Menu()
        }
        else{
            switch (num) {
                case 1:
                    Adicionar()
                    break;
                case 2:
                    Remover()
                    break;
                case 3:
                    Verificar()
                    break;
                case 4:
                    Alterar()
                    break;
                default:
                    console.log('Opção inválida. Digite uma das opções do menu.')
                    Menu()
                    break;
            }
        }
    })
}


function Adicionar() {
    console.log()
    console.log('Caso queira retornar ao menu digite 0 na idade.')
    r1.question('Digite o nome do convidado: ', (Nome)=>{
        r1.question('Digite a idade: ', (Idade)=>{
            let idade = parseInt(Idade)

            if (isNaN(idade)){
                console.log('Idade inválida, tente novamente.')
                Adicionar()
            }
            else{
                if (idade == 0){
                    Menu()
                }
                else{
                    ListaConvidados.push({Nome: Nome, Idade: idade})
                    Menu()
                }
            }
        })
    })
}


function Remover() {
    r1.question('Digite o número do convidado que deseja remover: ', (numero)=>{
        let num = parseInt(numero) - 1

        if (isNaN(num)){
            console.log('Opção inválida! tente novamente...')
            Menu()
        }
        else{
            if (num >= -1 && num < ListaConvidados.length){
                if (num == -1){
                    Menu()
                }
                else {
                    ListaConvidados.splice(num, 1)
                    console.log('Removido com suscesso!')
                    Menu()
                }
            }
            else{
                console.log('Convidado não encontrado.')
                Menu()
            }
        }
    })
}


function Verificar() {
    if (ListaConvidados.length){
        console.log()
        console.log('Lista de convidados:')
        let i = 1
        for (let c of ListaConvidados){
            console.log(`${i} - Nome: ${c['Nome']} - Idade: ${c['Idade']}`)
            i++
        }
        Menu()
    }
    else{
        console.log('Lista de convidados está vazia.')
        Menu()
    }   
}


function Auxiliar() {
    if (ListaConvidados.length){
        console.log()
        console.log('Lista de convidados:')
        let i = 1
        for (let c of ListaConvidados){
            console.log(`${i} - Nome: ${c['Nome']} - Idade: ${c['Idade']}`)
            i++
        }
    }
    else{
        console.log('Lista de convidados está vazia.')
    }   
}


function Alterar() {
    console.log()
    Auxiliar()
    console.log()
    console.log('Caso queira ir para o menu digite 0')
    r1.question('Digite o número do convidado que deseja alterar: ', (numero)=>{
        let num = parseInt(numero) - 1

        if (isNaN(num)){
            console.log('Convidado não encontrado!')
            Menu()
        }
        else{
            if (num >= -1 && num < ListaConvidados.length){
                console.log()
                console.log(`${num + 1} - Nome: ${ListaConvidados[num]['Nome']} - Idade: ${ListaConvidados[num]['Idade']}`)
                console.log()
                console.log('Alterar:\n1 - Voltar ao menu\n2 - Nome\n3 - Idade\n4 - Nome e idade')
                r1.question('Digite uma opção: ', (opcao)=>{
                    let op = parseInt(opcao)

                    if (isNaN(op)){
                        console.log('Opção inválida, tente novamente!')
                        Alterar()
                    }
                    else{
                        if (op < 1 || op > 4){
                            console.log('Opção inválida, tente novamente.')
                            Alterar()
                        }
                        if (op == 1){
                            Menu()
                        }
                        if (op == 2){
                            console.log()
                            r1.question('Digite o nome: ', (Nome)=>{
                                ListaConvidados[num]['Nome'] = Nome
                                console.log('Atualizado com sucesso!')
                                Menu()
                            })
                        }
                        if (op == 3){
                            console.log()
                            r1.question('Digite a idade: ', (Idade)=>{
                                let idade = parseInt(Idade)

                                if (isNaN(idade)){
                                    console.log('Idade inválida, tente novamente.')
                                    Alterar()
                                }
                                else{
                                    if (idade > 0){
                                        ListaConvidados[num]['Idade'] = idade
                                        console.log('Atualizado com sucesso!')
                                        Menu()
                                    }
                                    else{
                                        console.log('Idade não pode ser menor do que 0. Tente novamente.')
                                        Alterar()
                                    }
                                }
                            })
                        }
                        if (op == 4){
                            console.log()
                            r1.question('Digite o nome: ', (Nome)=>{
                                r1.question('Digite a idade: ', (Idade)=>{
                                    let idade = parseInt(Idade)

                                    if (isNaN(idade)){
                                        console.log('Idade inválida, tente novamente.')
                                        Alterar()
                                    }
                                    else{
                                        if (idade > 0){
                                            ListaConvidados[num]['Nome'] = Nome
                                            ListaConvidados[num]['Idade'] = idade
                                            console.log('Atualizado com sucesso!')
                                            Menu()
                                        }
                                        else{
                                            console.log('Idade não pode ser menor do que 0. Tente novamente.')
                                            Alterar()
                                        }
                                    }
                                })
                            })
                        }
                    }
                })
            }
            else if (num == -1){
                Menu()
            }
            else{
                console.log('Convidado não encontrado!')
                Menu()
            }
        }
    })
}
    

Menu()
