//Criar uma função que calcula a soma dos quadrados diferentes até um número n. Nome deve ser somaQuadrados.

/*
  p(1)--> somaQuadrados(0) --> 0
  p(2)--> somaQuadrados(1) --> 1 --> 1^2 + p(1)
  p(3)--> somaQuadrados(2) --> 4 --> 2^2 + p(2)

  ...

  p(n)--> somaQuadrados(n) --> n^2 + p(n-1)


*/

const somaQuadrados = (n) => {
  if (n===0) return 0;
  else{
    return n**2 + somaQuadrados(n-1);
  }
}

console.log(somaQuadrados(101))