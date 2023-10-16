
const Banco = {
    conta: "12345-6",
    saldo: 1000.00,
    tipoConta: "Corrente",
    agencia: "7890",


    buscarSaldo: function () {
        return this.saldo;
    },


    deposito: function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
        } else {
            return "O valor do depósito deve ser maior que zero.";
        }
    },


    saque: function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
        } else if (valor <= 0) {
            return "O valor do saque deve ser maior que zero.";
        } else {
            return "Saldo insuficiente para realizar o saque.";
        }
    },


    numeroConta: function () {
        return this.conta;
    }
};


console.log("Número da Conta: " + Banco.numeroConta());
console.log("Saldo Atual: R$" + Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
