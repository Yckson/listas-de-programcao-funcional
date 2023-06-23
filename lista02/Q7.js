//Q7. Programa para retornar o menor valor entre três números quaisquer. Tente resolver considerando o sub-problema de determinar o menor valor entre dois números quaisquer (obs: em caso de valores iguais, deve-se retornar como resultado o próprio valor).
//-------------- Corpos das Funções ------------- //

 function encontrarMenorVal(valores){
  if (valores.length <= 1){
    return valores[0];
  }

  const menorQue = (v1, v2) =>{
    return v1 < v2 ? v1 : v2;
  }

  return menorQue(valores[0], encontrarMenorVal(valores.slice(1)));

 }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //
  const valor1 = 3;
  const valor2 = 2;
  const valor3 = -5;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

console.log(encontrarMenorVal([21, 500, 1, -7]));

// ---------------------------------------------- //