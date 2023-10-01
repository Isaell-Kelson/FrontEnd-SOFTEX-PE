document.addEventListener("DOMContentLoaded", function () {

    const n1Input = document.getElementById("n1");
    const n2Input = document.getElementById("n2");
    const operacoesSelect = document.getElementById("operacoes");
    const resultadoDiv = document.getElementById("resultado");
    const form = document.getElementById("form-num");
    const btnCalcular = document.getElementById("btn-calcular");
    const btnLimpar = document.getElementById("btn-limpar");


    form.addEventListener("submit", function (event) {
        event.preventDefault();


        const num1 = parseFloat(n1Input.value);
        const num2 = parseFloat(n2Input.value);
        const operacao = operacoesSelect.value;


        let resultado;
        switch (operacao) {
            case "soma":
                resultado = num1 + num2;
                break;
            case "subtracao":
                resultado = num1 - num2;
                break;
            case "multiplicacao":
                resultado = num1 * num2;
                break;
            case "divisao":
                if (num2 === 0) {
                    resultado = "Divisão por zero não é permitida";
                } else {
                    resultado = Math.floor(num1 / num2);
                    const restoDivisao = num1 % num2;
                    resultado += " com resto " + restoDivisao;
                }
                break;
            default:
                resultado = "Operação inválida";
        }


        resultadoDiv.textContent = `Resultado: ${resultado}`;
    });


    btnLimpar.addEventListener("click", function () {

        resultadoDiv.textContent = "";


        n1Input.value = "";
        n2Input.value = "";
    });
});
