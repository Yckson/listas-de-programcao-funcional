//Q5. Programa para calcular a distância euclidiana entre dois pontos [(x1,y1),(x2,y2)] no plano cartesiano. Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos (abscissas ou ordenadas) e as versões simplificadas quando for paralela.

//-------------- Corpos das Funções ------------- //

  function distPontos(p1, p2){
    //Esta função calcula a distância euclidiana entre dois pontos no plano X, Y.
    if (p1[0] == p2[0]){
      if(p2[1] >= p1[1]){
        return p2[1] - p1[1];
      }
      return p1[1] - p2[1];
    }
    else if (p1[1] == p2[1]){
      if(p2[0] >= p1[0]){
        console.log('!')
        return p2[0] - p1[0];
      }
      return p1[0] - p2[0];
    }
    else {
      return ((((p2[0] - p1[0]) ** 2) + (p2[1] - p1[1]) ** 2)**(1/2));
    }
  }
  
// -------------- Entrada dos Dados ------------- //
  
  const ponto1 = [0, 0];
  const ponto2 = [3, 4];

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = distPontos(ponto1, ponto2);
  console.log("A distância entre os pontos é: " + resposta);
  
// ---------------------------------------------- //
