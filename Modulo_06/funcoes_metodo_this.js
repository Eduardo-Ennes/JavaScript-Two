function ContaBancaria(titular, saldoInicial) {

    this.titular = titular;
  
    this.saldo = saldoInicial;
  
    this.depositar = function(valor) {
  
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}.`);
     
      } else {
        console.log("O valor do depósito deve ser positivo."); 
      }
    };
  
    this.sacar = function(valor) {

      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}.`);     
      } else {
        console.log("Saque não realizado. Verifique se o valor é positivo e se há saldo suficiente.");      
      }
    };

    this.consultarSaldo = function() {
      console.log(`Saldo atual: R$${this.saldo}.`);  
    };
  }

  var minhaConta = new ContaBancaria("João Silva", 1000);
  minhaConta.depositar(500);
  minhaConta.sacar(200);
  minhaConta.sacar(300);
  minhaConta.sacar(300);
  minhaConta.depositar(500);
  minhaConta.consultarSaldo();


  // ------------------------------


function Carro(marca, modelo, quilometragemInicial) {

    this.marca = marca;

    this.modelo = modelo;

    this.quilometragem = quilometragemInicial;

    this.dirigir = function(quilometros) {
      if (quilometros > 0) {
        this.quilometragem += quilometros;
        console.log(`Você dirigiu ${quilometros} km. Quilometragem atual: ${this.quilometragem} km.`);
      
      } else {
        console.log("Por favor, insira uma distância válida para dirigir.");      
      }
    };

    this.exibirInformacoes = function() {
      console.log(`Carro: ${this.marca} ${this.modelo}. Quilometragem: ${this.quilometragem} km.`);    
    };
  }

  var meuCarro = new Carro("Toyota", "Corolla", 50000);
  
  meuCarro.dirigir(150);

  meuCarro.exibirInformacoes();
  