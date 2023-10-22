class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    iniciar() {
      this.ligado = true;
      console.log(`O ${this.marca} ${this.modelo} foi ligado.`);
    }
  
    parar() {
      this.ligado = false;
      this.velocidade = 0;
      console.log(`O ${this.marca} ${this.modelo} foi desligado.`);
    }
  
    acelerar(velocidade) {
      if (this.ligado) {
        this.velocidade += velocidade;
        console.log(`O ${this.marca} ${this.modelo} está agora a ${this.velocidade} km/h.`);
      } else {
        console.log("O carro está desligado. Ligue-o para acelerar.");
      }
    }
  }
  
  const meuCarro = new Carro("Toyota", "Corolla", 2022);
  meuCarro.iniciar();
  meuCarro.acelerar(60);
  meuCarro.parar();
  