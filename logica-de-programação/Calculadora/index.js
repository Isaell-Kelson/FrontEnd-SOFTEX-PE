let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")
let op = prompt("Digite a operação que deseja fazer (somar, subtrair, multiplicar, dividir)")


n1 = parseFloat(n1)
n2 = parseFloat(n2)


if (op == "somar") {
    let resultado = alert(`A soma é: ${n1 + n2}`)
}
else if (op == "subtrair") {
    let resultado = alert(`A subtração é: ${n1 - n2}`)
}
else if (op == "multiplicar") {
    let resultado = alert(`A multiplicação é: ${n1 * n2}`)
}
else if (op == "dividir") {
    let resultado = alert(`A divisão é: ${n1 / n2}`)
}
else {
    let resultado = 0
}