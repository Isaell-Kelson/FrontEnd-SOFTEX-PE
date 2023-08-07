function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);
        const valorMeio = array[meio];

        if (valorMeio === alvo) {
            return meio; 
        } else if (valorMeio < alvo) {
            inicio = meio + 1; // 
        } else {
            fim = meio - 1; 
        }
    }

    return -1;
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const valorAlvo = 20;

const indiceEncontrado = buscaBinaria(array, valorAlvo);

if (indiceEncontrado !== -1) {
    console.log(`O valor ${valorAlvo} foi encontrado no índice ${indiceEncontrado}.`);
} else {
    console.log(`O valor ${valorAlvo} não foi encontrado no array.`);
}
