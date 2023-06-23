//Q8. Escrever um programa que calcule o valor de um número elevado à quarta potência. Tente fazer uso do sub-problema de calcular o quadrado de um número qualquer.

//-------------- Corpos das Funções ------------- //

  function calc4potencia(num){
    const calc2potencia = (num) => num ** 2;
    return calc2potencia(num) ** 2;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const numero = 2;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //
  
  const resposta = calc4potencia(numero);
  console.log(`O número ${numero} elevado a quarta potência é igual à: ${resposta}.`);

// ---------------------------------------------- //