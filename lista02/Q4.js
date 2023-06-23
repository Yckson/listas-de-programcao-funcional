//Q4. Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados.

//-------------- Corpos das Funções ------------- //

  function verificaTipoTri(l1, l2, l3, eTriangulo=true){
    //Esta função verifica qual o tipo de triângulo estabelecido pelo tamanho dos lados fornecidos
    if (!eTriangulo){
      return "não existe!"
    }
    if (l1 == l2 && l2 == l3){
      return "é equilatero!";
    }
    else if (l1 != l2 && l2 != l3 && l1 != l3){
      return "é escaleno!";
    }
    else{
      return "é isósceles!";
    }
  }

  function verificaTri(ladoT1, ladoT2, ladoT3){
    //Esta função verifica se os lados fornecidos podem compor um triângulo
    //Para formar um triângulo válido, a soma de quaisquer dois lados deve ser maior que o terceiro lado
    if (ladoT1 + ladoT2 > ladoT3 && ladoT2 + ladoT3 > ladoT1 && ladoT1 + ladoT3 > ladoT2){
      return true;
    }
    return false;
  }

// -------------- Entrada dos Dados ------------- //

  const lado1 = 1;
  const lado2 = 1;
  const lado3 = 1;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = verificaTipoTri(lado1, lado2, lado3, verificaTri(lado1, lado2, lado3));
  console.log("O triângulo " + resposta);

// ---------------------------------------------- //
