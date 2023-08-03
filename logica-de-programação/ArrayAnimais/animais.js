const animais = [
    ['Leão', 'Felino', 5],
    ['Elefante', 'Mamífero', 15],
    ['Girafa', 'Mamífero', 8],
    ['Tigre', 'Felino', 7],
    ['Zebra', 'Mamífero', 4]
];
  
console.log('Informações dos animais:');
console.log('--------------------------------------');
console.log('Nome     | Espécie   | Idade  ');
console.log('--------------------------------------');
  for (let i = 0; i < animais.length; i++) {
    console.log(`${animais[i][0]}   | ${animais[i][1]}       | ${animais[i][2]}`);
}
console.log('--------------------------------------');