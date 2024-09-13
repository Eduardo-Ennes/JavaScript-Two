class Pai {
    constructor(nome) {
      this.nomePai = nome; 
    }
  }
  
class Mae {
  constructor(nome) {
    this.nomeMae = nome; 
  }
}
  
class Filho {
  constructor(nome, pai, mae, escola) {
    this.nome = nome; 
    this.nomePai = pai.nomePai; 
    this.nomeMae = mae.nomeMae; 
    this.escola = escola;
  }
}
  
    const pai = new Pai("Roberto");
    const mae = new Mae("Ana");
    const filho = new Filho("Lucas", pai, mae, "Escola ABC");
    console.log(`Filho: ${filho.nome}, Pai: ${filho.nomePai}, Mãe: ${filho.nomeMae}, Escola: ${filho.escola}`);
    