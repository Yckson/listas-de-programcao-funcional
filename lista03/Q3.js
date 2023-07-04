//Q3. Programa para determinar se três valores passados podem representar um triângulo ou não.
//-------------- Corpos das Funções ------------- //

  const verificarTriangulo = l1 => l2 => l3 => {
    if (!(l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1)){
      return false;
    }
    return true;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const lado1 = 6;
  const lado2 = 3;
  const lado3 = 3;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = verificarTriangulo(lado1)(lado2)(lado3);
  console.log(`Segundo os valores informados, ${resposta ? "é" : "não é"} possível formar um triângulo.`)

// ---------------------------------------------- //