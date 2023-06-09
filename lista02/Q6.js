//Q6. Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais. A resposta pode ser 3 (todos iguais), 2 (apenas um diferente) ou 0 (todos diferentes).

//-------------- Corpos das Funções ------------- //

  function verificarIguais(v1, v2, v3){
    //Esta função verifica e retorna quantos dos 3 valores informados são iguais
    if (v1 == v2 && v2 == v3) return 3;
    else if (v1 != v2 && v2 != v3 && v1 != v3) return 0;
    else return 2;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //
  
  const valorA = 1;
  const valorB = 1;
  const valorC = 0;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = verificarIguais(valorA, valorB, valorC);
  console.log(`A quantidade de valores iguais é: ${resposta}`);
  
// ---------------------------------------------- //