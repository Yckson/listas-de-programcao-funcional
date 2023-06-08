//Q3. Programa para determinar se três valores passados podem representar um triângulo ou não.

//-------------- Corpos das Funções ------------- //

  function verificaTri(ladoT1, ladoT2, ladoT3){
    //Esta função verifica se os lados fornecidos podem compor um triângulo
    //Para formar um triângulo válido, a soma de quaisquer dois lados deve ser maior que o terceiro lado
    if (ladoT1 + ladoT2 > ladoT3 && ladoT2 + ladoT3 > ladoT1 && ladoT1 + ladoT3 > ladoT2){
      return true;
    }
    return false;
  }

// -------------- Entrada dos Dados ------------- //

  const lado1 = 3;
  const lado2 = 4;
  const lado3 = 5;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = verificaTri(lado1, lado2, lado3);
  console.log("É um triângulo? " + (resposta ? "Sim" : "Não"));
  //"(resposta ? "Sim" : "Não")" é um operador ternário

// ---------------------------------------------- //
