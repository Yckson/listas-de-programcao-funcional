//Q2. Programa para calcular a área de uma circunferência dado o valor do raio.

//-------------- Corpos das Funções ------------- //

function calcAreaCir(raio){
  //Esta função calcula a área de uma circunferência com base no seu raio
  //"Math.PI" representa um valor bem apriximado de pi para o JS. É possível substituir por "3.14".
  const res = Math.PI * (raio ** 2);
  return res;
}

// -------------- Entrada dos Dados ------------- //
const r = 2;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

const resposta = calcAreaCir(r);
console.log("Área da Circunferência: " + resposta);
// ---------------------------------------------- //

