//Q2. Programa para calcular a área de uma circunferência dado o valor do raio.
//-------------- Corpos das Funções ------------- //

  const calcularAreaCirc = (r, pi=Math.PI) => pi * r**2;

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const raio = 5;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const areaCirc = calcularAreaCirc(raio);
  console.log(`A área da circunferência é: ${areaCirc}`);

// ---------------------------------------------- //