function Relogio(horas, minutos, segundos) {

    this.horas = horas;
    this.minutos = minutos;
    this.segundos = segundos;
  
    this.ajustarTempo = function(horas, minutos, segundos) {
  
      this.horas = horas;
      this.minutos = minutos;
      this.segundos = segundos;
  
    };
  
    this.adicionarMinutos = function(minutos) {
  
      this.minutos += minutos;
  
      while (this.minutos >= 60) {
        this.minutos -= 60; 
        this.horas += 1;
      }
    };

    this.adicionarSegundos = function(segundos) {
  
      this.segundos += segundos;

      while (this.segundos >= 60) {
        this.segundos -= 60; 
        this.adicionarMinutos(1);
      }
    };
  
    this.exibirTempo = function() {

      console.log(`${this.horas.toString().padStart(2, '0')}:${this.minutos.toString().padStart(2, '0')}:${this.segundos.toString().padStart(2, '0')}`);   

    };
  }

  var meuRelogio = new Relogio(10, 45, 25);
  
  meuRelogio.exibirTempo(); 
  
  meuRelogio.adicionarMinutos(20);

  meuRelogio.exibirTempo(); 
  
  meuRelogio.adicionarSegundos(3700);

  meuRelogio.exibirTempo();
  
  meuRelogio.adicionarMinutos(20);

  meuRelogio.exibirTempo();
  