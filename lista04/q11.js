//Q11. Dado um número, devolva a soma total desse número multiplicado por cada número entre 1 e 10. Nome da função deve ser multiSoma.

/*

  p(1)--> k * 1 -> k
  p(2)--> k * 2 + ...-> 2k + (2-1)k --> k + k + k
  p(3)--> k * 3 + ... -> 3k + (3-1)k + (3-1-1)k --> k + k + k + k + k + k

  ...

  p(10)--> k * 10

*/

const multisoma = (k) => {
  const multSomaAux = (n=10) => {
    if (n == 0){return 0}
    else{
      return k*n + multSomaAux(n-1);
    }
  }
  return multSomaAux();
}

console.log(multisoma(10));