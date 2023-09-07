//Q7.  Quociente da divisão entre dois números inteiros positivos fornecidos, n e m. Nãoutilizar operadores de divisão da linguagem.

/*
  P(0, m) == 0
  P(n, 1) == n
  P(0, 0) == Indef.

  10 / 5: 5 * k == 10 ---> k + 4k == 10 ----> k + k + 3k == 10
  n / m: m * k == n ----> m + (m-1)k == n


*/

const quocienteDivInteiros = (n, m) => {
  if (n === 0 && m === 0){
    return undefined;
  }
  else if (n < m){
    return 0;
  }

  else{
    return 1 + quocienteDivInteiros(n-m, m);
  }
}

//console.log(quocienteDivInteiros(2, 3))

module.exports = quocienteDivInteiros;