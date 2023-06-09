//Q7. Programa para retornar o menor valor entre três números quaisquer. Tente resolver considerando o sub-problema de determinar o menor valor entre dois números quaisquer (obs: em caso de valores iguais, deve-se retornar como resultado o próprio valor).
//-------------- Corpos das Funções ------------- //

  function verificarMenor(valores){
    if (valores.length <= 1){
      return valores[0];
    }
    else{
      return menorQue(valores[0], verificarMenor(valores.slice(1)));
    }
  }

  function menorQue(v1, v2){
    if (v1 < v2) return v1;
    else return v2;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const valor1 = 3;
  const valor2 = 2;
  const valor3 = -5;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resultado = verificarMenor([valor1, valor2, valor3]);
  console.log(`O menor valor é ${resultado}`);

// ---------------------------------------------- //