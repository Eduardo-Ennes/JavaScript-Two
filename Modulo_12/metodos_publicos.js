class ContaBancaria {
    constructor(titular, saldoInicial) {
      this.titular = titular; 
      this.saldo = saldoInicial;     
    }

    depositar(valor) {
      this.saldo += valor; 
      console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);   
    }

    sacar(valor) {
      if (valor > this.saldo) {
        console.log(`Saldo insuficiente para sacar ${valor}`);
      } else {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);      
      }
    }

    verificarSaldo() {
        console.log(`Saldo atual: ${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria('João', 1000);
  

  minhaConta.verificarSaldo(); 
  minhaConta.depositar(500); 
  minhaConta.sacar(200); 
  minhaConta.verificarSaldo(); 
  minhaConta.sacar(2000); 
  minhaConta.sacar(400); 


  /*Neste exemplo, a classe ContaBancaria possui três
  métodos públicos: depositar, sacar e verificarSaldo. 
  
  Esses métodos podem ser utilizados externamente para
  interagir com objetos da classe ContaBancaria, permitindo
  depósitos, saques e verificação do saldo. */

/*
Entender os métodos públicos em programação orientada a objetos (POO) em JavaScript é crucial
para saber como interagir e manipular objetos de uma classe. Vamos explorar esse conceito utilizando o 
exemplo da classe ContaBancaria que fizemos.

O que são Métodos Públicos?
Métodos públicos são funções definidas dentro de uma classe que podem ser acessadas e chamadas em
qualquer instância dessa classe. No contexto de POO, esses métodos são a principal maneira pela qual
os objetos interagem com o mundo externo.

No exemplo da classe ContaBancaria, os métodos depositar, sacar, e verificarSaldo são públicos. Isso
significa que qualquer código externo que cria um objeto do tipo ContaBancaria pode chamar esses métodos
para modificar o estado do objeto ou obter informações sobre ele.

Por que usar Métodos Públicos?

Encapsulamento: Métodos públicos são uma parte fundamental do encapsulamento em POO. Encapsulamento é o
    conceito de esconder os detalhes internos do funcionamento de uma classe e expor apenas o necessário
    através de métodos públicos. Isso significa que você pode mudar a implementação interna de um método
    público sem afetar o código que o utiliza, desde que a interface do método (ou seja, como ele é chamado
    e quais parâmetros espera) permaneça a mesma.

Controle de Acesso: Ao utilizar métodos públicos, você define claramente como o estado de um objeto pode
    ser alterado ou consultado. Isso evita que o estado interno do objeto seja modificado de maneira
    inesperada ou incorreta, pois você pode incluir verificações e lógica específica dentro dos métodos
    públicos para lidar com as entradas.

Reusabilidade: Métodos públicos também promovem a reusabilidade do código. Uma vez que você define um
    método público em uma classe, qualquer objeto dessa classe pode utilizar esse método sem a necessidade
    de reescrever o código.

Manutenção e Legibilidade: Classes com métodos públicos claros e bem definidos são mais fáceis de entender
    e manter. Outros desenvolvedores podem facilmente ver o que está disponível para uso em cada objeto e
    como interagir com ele.

Exemplo Detalhado da Classe ContaBancaria

Constructor: O constructor é um método especial que é chamado quando um novo objeto da classe é criado.
    Ele inicializa as propriedades do objeto, como titular e saldo. Neste caso, titular recebe o nome do
    proprietário da conta e saldo o saldo inicial.

depositar(valor): Este método adiciona o valor passado ao saldo atual da conta. Isso é feito através da
    operação this.saldo += valor, que é uma forma abreviada de this.saldo = this.saldo + valor. Após
    modificar o saldo, ele exibe uma mensagem indicando o valor depositado e o novo saldo.

sacar(valor): Antes de sacar, este método verifica se o saldo disponível é suficiente para o saque. Se
    não for, ele informa que o saldo é insuficiente. Caso contrário, ele subtrai o valor do saldo e mostra
    uma mensagem com o novo saldo.

verificarSaldo(): Este método simplesmente exibe o saldo atual da conta. É uma forma de consultar o estado
    do objeto sem modificá-lo.


Os métodos públicos da ContaBancaria permitem que operações como depósitos, saques e consultas de
saldo sejam realizadas de forma controlada e segura. Eles garantem que as propriedades do objeto só possam
ser alteradas de maneiras pré-definidas, protegendo assim a integridade dos dados.
*/