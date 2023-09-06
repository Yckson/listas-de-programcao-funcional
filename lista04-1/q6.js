/*
  P(1): Se n for menor que m, então o resto será n.
  P(n): n - m

  Exemplo 1: resto de 2 / 3 ----> 2

  Exemplo 2: resto de 3 / 2 ----> 3 - 2 = 1. 1 / 2 ----> 1

*/

const resto = (n, m) =>{
  if (n < m){ return n }
  else {
    return resto(n - m, m)
  }

}

console.log(resto(10, 3));