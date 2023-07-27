function calcularIdade() {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let anoNascimento = prompt("Digite seu ano de nascimento (entre 1922 e 2021):");
    
    
    while (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
      anoNascimento = prompt("Ano inválido! Digite seu ano de nascimento novamente (entre 1922 e 2021):");
    }

    
    let idade = 2022 - parseInt(anoNascimento);

    
    alert(`Nome: ${nomeCompleto}\nIdade em 2022: ${idade} anos`);
  }

  calcularIdade();