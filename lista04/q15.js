//Q15. Um vendedor tem uma série de cidades para visitar. Deve-se calcular o número total de caminhos possíveis a percorrer, visitando cada cidade uma vez antes de regressar à casa. Devolver o número total de caminhos possíveis que um vendedor pode percorrer, dadas n cidades. Nome deve ser caminhos.

/*
  p(1)--> caminhos(0)--> 0
  p(2)--> caminhos(1)--> 1
  p(3)--> caminhos(2)--> 2
  p(4)--> caminhos(3)--> 6
  P(5)--> caminhos(4)--> 24

  p(n)--> caminhos(n)--> n * p(n-1)


*/

const caminhos = (n) => {
  if(n===1){return 1}
  if (n===0) return 0;
  else{
    return n * caminhos(n-1);
  }
}

console.log(caminhos(4));