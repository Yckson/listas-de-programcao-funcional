//Q4. Fatorial de um número qualquer

/*
Só existe fatorial de números inteiros maiores ou iguais a zero.

P(0): 0! = 1.
P(1): 1! = 1.
P(2): 2! = 2 x 1.
P(3): 3! = 3 x 2 x 1.

P(N): N! = N x (N-1)!


*/

const fatorial = (n) => {
  if (n < 0){return undefined}
  else if (n == 0){return 1}
  else{
    return n * fatorial(n-1);
  }
}

console.log(fatorial(3))