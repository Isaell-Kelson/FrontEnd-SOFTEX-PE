let n1 = prompt('Dgite a primeira nota: ')
let n2 = prompt('Dgite a segunda nota: ')
let n3 = prompt('Dgite a terceira nota: ')

let parsedN1 = parseFloat(n1);
let parsedN2 = parseFloat(n2);
let parsedN3 = parseFloat(n3);

let media = (parsedN1 + parsedN2 + parsedN3) / 3;

console.log(`A média das notas é: ${media.toFixed(2)}`);

//para ficar mais dinâmico pode-se usar o alert()