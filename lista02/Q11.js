//Q11. Dados três valores, escreva um programa que retorne quantos desses três valores são maiores que o valor médio entre eles.
//-------------- Corpos das Funções ------------- //

  function maiorQueMedia(valores){
    if (valores.length != 1){
      
    } 
  }

  function media(valores){
    return somatorio(valores) / (valores.length);
  }

  function somatorio(valores){
    console.log(valores);
    if (valores.length < 1) return 0;
    else return (valores[0] + somatorio(valores.slice(1)));
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const valor1 = 1;
  const valor2 = 2;
  const valor3 = 3;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = maiorQueMedia([valor1, valor2, valor3]);
  console.log("O valor que é maior que o valor médio é: " + resposta);

// ---------------------------------------------- //