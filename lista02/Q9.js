//Q7. Programa para retornar o menor valor entre três números quaisquer. Tente resolver considerando o sub-problema de determinar o menor valor entre dois números quaisquer (obs: em caso de valores iguais, deve-se retornar como resultado o próprio valor).
//-------------- Corpos das Funções ------------- //

  function xOu(v1, v2){
    return (v1 || v2) && !(v1 && v2) ? true : false;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //
 
  const val1 = true;
  const val2 = false;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = xOu(val1, val2);
  console.log(`O "ou exclusivo" entre "${val1}" e "${val2}" é igual à: "${resposta}"`)

// ---------------------------------------------- //