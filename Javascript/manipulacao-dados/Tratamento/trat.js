const numero1 = parseFloat(prompt("Informe o primeiro número:"));
const numero2 = parseFloat(prompt("Informe o segundo número:"));

try {
  
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Um ou ambos os números não são válidos.");
  }
  
  const resultado = numero1 / numero2;
  
  if (!isFinite(resultado)) {
    throw new Error("Resultado infinito ou indefinido.");
  }
  
  console.log(`Resultado da divisão: ${resultado}`);
} catch (error) {
  
  console.error(`Ocorreu um erro: ${error.message}`);
} finally {
  
  console.log("Execução concluída.");
}
