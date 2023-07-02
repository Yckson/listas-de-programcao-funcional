//Q13. Um móvel com velocidade constante percorre uma trajetória retilínea. Considere t0 = 0, o instante inicial e X0 = 500 a posição inicial. Escreva um programa para calcular a velocidade do objeto em um dado instante t e posição x.
//-------------- Corpos das Funções ------------- //

function calcularVelocidade(posF, instF, posI=0, instI=0){
  return `${(posF - posI) / (instF - instI)} m/s`;
}

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

const posicao = 510;
const instante = 5;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

const velocidade = calcularVelocidade(posicao, instante, 500);
console.log(`A velocidade é: ${velocidade}`);

// ---------------------------------------------- //