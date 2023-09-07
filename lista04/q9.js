//Q8. Máximo Divisor Comum (MDC) entre dois números inteiros positivos, n e m. Não utilizar operadores de divisão da linguagem.

/*

  Suponha verdadeiro:
    n x m = mdc(n, m) x mmc(n, m);
  
  Então, também é válido:

  (n x m) / mdc(n, m) = mmc(n, m);

*/



const divisao = require('./q7');
const mdc = require('./q8');

const mmc = (n, m) => {
  return divisao(n * m, mdc(n, m));
}

console.log(mmc(2, 3));