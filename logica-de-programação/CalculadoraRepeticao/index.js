function calculadora() {
    while (true) {
        let op = prompt("Digite a operação que deseja fazer\n1: somar \n2: subtrair \n3: multiplicar \n4: dividir \n0: sair")

        if (op === "0") {
            alert("Saindo da calculadora!")
            break;
        } else if (op === "1" || op === "2" || op === "3" || op === "4") {
            let n1 = prompt("Digite o primeiro número")
            let n2 = prompt("Digite o segundo número")

            n1 = parseFloat(n1)
            n2 = parseFloat(n2)

            if (op === "1") {
                let resultado = n1 + n2;
                alert(`A soma é: ${resultado}`);
            } else if (op === "2") {
                let resultado = n1 - n2;
                alert(`A subtração é: ${resultado}`);
            } else if (op === "3") {
                let resultado = n1 * n2;
                alert(`A multiplicação é: ${resultado}`);
            } else if (op === "4") {
                let resultado = n1 / n2;
                alert(`A divisão é: ${resultado}`);
            }
        } else {
            alert("Opção inválida");
        }
    }
}

calculadora();