//Q8. Escrever um programa que calcule o valor de um número elevado à quarta potência. Tente fazer uso do sub-problema de calcular o quadrado de um número qualquer.

//-------------- Corpos das Funções ------------- //

  function pot4(num){
    return pot2(num) * pot2(num);
  }

  function pot2(num){
    return num * num;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const numero = 2;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //
  
  const resposta = pot4(numero);
  console.log(`O número ${numero} elevado a quarta potência é igual à: ${resposta}.`);

// ---------------------------------------------- //