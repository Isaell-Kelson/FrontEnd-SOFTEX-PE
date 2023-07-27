let voto = 'não';
let encerrar = 'não';
let x = 0;
let y = 0;
let z = 0;
let b = 0;
let nulo = 0;

const candidatos = {
  Candidato_X: 889,
  Candidato_Y: 847,
  Candidato_Z: 515,
  Branco: 0,
};

let total = 0;

while (encerrar === 'não') {
  voto = 'não';
  while (voto === 'não') {
    const votos = parseInt(prompt('Digite sua intenção de voto \nCandidato_X 889 \nCandidato_Y 847 \nCandidato_Z 515 \nBranco 0 '), 10);
    voto = prompt('Deseja confirmar seu voto? ');

    if (votos === candidatos.Candidato_X) {
      x = x + 1;
    } else if (votos === candidatos.Candidato_Y) {
      y = y + 1;
    } else if (votos === candidatos.Candidato_Z) {
      z = z + 1;
    } else if (votos === candidatos.Branco) {
      b = b + 1;
    } else {
      nulo = nulo + 1;
    }
  }

  alert('Voto confirmado!');
  encerrar = prompt('Encerrar votação? ');
}

alert('FIM\n');

let mv, mcandidato;
if (x > y && x > z) {
  mv = x;
  mcandidato = 'Candidato_X';
} else if (y > x && y > z) {
  mv = y;
  mcandidato = 'Candidato_Y';
} else if (z > x && z > y) {
  mv = z;
  mcandidato = 'Candidato_Z';
}

const cx = 'Candidato_X';
const cy = 'Candidato_Y';
const cz = 'Candidato_Z';
const br = 'Branco';

const mensagem =
  `O candidato vencedor é: ${mcandidato} com o total de ${mv} votos\n` +
  `O candidato_X ${cx} recebeu ${x} votos\n` +
  `O candidato_Y ${cy} recebeu ${y} votos\n` +
  `O candidato_Z ${cz} recebeu ${z} votos\n` +
  `O total de votos em ${br} foram de ${b}\n` +
  `O total de votos Nulos foram de ${nulo}`;

alert(mensagem);