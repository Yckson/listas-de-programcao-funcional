//Q1. Programa para calcular a área de um retângulo dados os comprimentos de duas arestas
//-------------- Corpos das Funções ------------- //

  const calcularArea = (b) => (h) => b * h;

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const base = 5;
  const hipot = 10;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const area = calcularArea(base)(hipot);
  console.log(`A área do retângulo é: ${area}`);

// ---------------------------------------------- //