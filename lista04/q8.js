//Q8. Máximo Divisor Comum (MDC) entre dois números inteiros positivos, n e m.Não utilizar operadores de divisão da linguagem.

/*

Algorítmo de Euclídes: sejam a e b números inteiros. Se a > b, então mdc (a, b) = mdc (a-b, b)

P(m, 0) = m
P(0, n) = n

Por definição:
P(m, n) = P(m-n, n) para m > n

*/

const mdc = (m, n) => {
  if (m===0){return n}
  if (m > n){
    return mdc(n, m);
  }
  else{
    return mdc(m, n-m);
  }
}

//console.log(mdc(252, 105));

module.exports = mdc;