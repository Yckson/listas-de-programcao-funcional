//Q2. Programa para calcular a área de uma circunferência dado o valor do raio.

//-------------- Corpos das Funções ------------- //

function calcAreaCir(raio, pi=3.14){
  //Esta função calcula a área de uma circunferência com base no seu raio
  const res = pi * (raio ** 2);
  return res;
}

// -------------- Entrada dos Dados ------------- //
const r = 2;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

const resposta = calcAreaCir(r, Math.PI);
//"Math.PI" representa um valor bem apriximado de pi para o JS. É possível substituir por "3.14".
console.log("Área da Circunferência: " + resposta);
// ---------------------------------------------- //

