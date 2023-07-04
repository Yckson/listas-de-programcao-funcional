//Q4. Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados.
//-------------- Corpos das Funções ------------- //

  const verficarTipoTri = l1 => l2 => l3 => {
    if (l1 === l2 && l2 === l3){
      return "equilátero";
    }

    else if (l1 != l2 && l2 != l3 && l1 != l3){
      return "escaleno";
    }

    else if (!(l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1)){
      return "não existe";
    }

    return "isóceles";
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const lado1 = 3;
  const lado2 = 3;
  const lado3 = 3;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = verficarTipoTri(lado1)(lado2)(lado3);
  console.log(`O triângulo ${resposta}.`);

// ---------------------------------------------- //