//Q11. Dados três valores, escreva um programa que retorne quantos desses três valores são maiores que o valor médio entre eles.
//-------------- Corpos das Funções ------------- //

  function maiorQueMedia(valor1, valor2, valor3, funcVerificaValor=verificaValor){
    const media = (valor1 + valor2 + valor3) / 3;
    return funcVerificaValor(valor1, media) + funcVerificaValor(valor2, media) + funcVerificaValor(valor3, media);
    
  }

  function verificaValor(valor, media){
    return valor > media ? 1 : 0;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const valor1 = 1;
  const valor2 = 3;
  const valor3 = 3;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = maiorQueMedia(valor1, valor2, valor3);
  console.log("A quantidade de valores maiores que a média é: " + resposta);

// ---------------------------------------------- //