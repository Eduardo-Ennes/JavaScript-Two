class Carro {
    constructor(marca, modelo, ano, cor) {
      this.marca = marca; 
      this.modelo = modelo; 
      this.ano = ano; 
      this.cor = cor; 
      this.velocidade = 0; 
    }
  
    acelerar(velocidade) {
      this.velocidade += velocidade; 
      console.log(`Você acelerou. Velocidade atual: ${this.velocidade} km/h`);
    }

    desacelerar(velocidade) {
        if (this.velocidade >= velocidade) {
            this.velocidade -= velocidade;
        } else {
            this.velocidade = 0;
        }
        console.log(`Você desacelerou. Velocidade atual: ${this.velocidade} km/h`);
    }

    frear() {
        this.velocidade = 0;
        console.log('Você freou. O carro parou.');
    }

    exibirDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Velocidade: ${this.velocidade} km/h`);
    }
}  


const meuCarro = new Carro('Toyota', 'Corolla', 2020, 'Prata');
meuCarro.exibirDetalhes(); 
meuCarro.acelerar(50); 
meuCarro.acelerar(20); 
meuCarro.desacelerar(30); 
meuCarro.acelerar(60); 
meuCarro.desacelerar(40); 
meuCarro.frear(); 
meuCarro.exibirDetalhes(); 
