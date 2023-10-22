class ContaBancaria {
    constructor(numeroConta, nomeTitular) {
      this.numeroConta = numeroConta;
      this.nomeTitular = nomeTitular;
      this.saldo = 0;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo: R$${this.saldo}`);
    }
  
    sacar(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    verificarSaldo() {
      console.log(`Saldo da conta de ${this.nomeTitular}: R$${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancária(12345, "João");
  minhaConta.depositar(1000);
  minhaConta.sacar(500);
  minhaConta.verificarSaldo();
  