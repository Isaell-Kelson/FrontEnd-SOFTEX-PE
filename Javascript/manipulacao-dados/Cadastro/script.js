
const form = document.querySelector(".form-geral");


const dadosInseridosContainer = document.getElementById("dados-inseridos-container");


form.addEventListener("submit", function (event) {
    event.preventDefault();


    const nome = document.getElementById("nome").value;
    const salario = document.getElementById("salario").value;
    const idade = document.getElementById("idade").value;
    const possuiDiploma = document.querySelector('input[name="radio"]:checked')
        ? document.querySelector('input[name="radio"]:checked').value
        : "Não especificado";


    const mensagem = `
        Nome: ${nome}<br>
        Salário: ${salario}<br>
        Idade: ${idade}<br>
        Possui diploma? ${possuiDiploma}
    `;

    const mensagemDiv = document.createElement("div");
    mensagemDiv.innerHTML = mensagem;

    dadosInseridosContainer.appendChild(mensagemDiv);
});


const limparBtn = document.getElementById("btnLimpar");


limparBtn.addEventListener("click", function () {

    while (dadosInseridosContainer.firstChild) {
        dadosInseridosContainer.removeChild(dadosInseridosContainer.firstChild);
    }
});
