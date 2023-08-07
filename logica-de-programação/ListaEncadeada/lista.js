class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null; 
        this.proximo = null; 
    }
}

class ListaEncadeada {
    constructor() {
        this.primeiro = null; 
    }

    adicionarPessoa(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade);
        if (!this.primeiro) {
            this.primeiro = novaPessoa;
        } else {
            let atual = this.primeiro;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novaPessoa;
        }
    }
}


const listaPessoas = new ListaEncadeada();

listaPessoas.adicionarPessoa("João", 30);
listaPessoas.adicionarPessoa("Isaell", 28);
listaPessoas.adicionarPessoa("Pedro", 5);
listaPessoas.adicionarPessoa("Ana", 3);


listaPessoas.primeiro.filho = listaPessoas.primeiro.proximo.proximo; 
listaPessoas.primeiro.proximo.filho = listaPessoas.primeiro.proximo.proximo.proximo;

console.log(listaPessoas);
