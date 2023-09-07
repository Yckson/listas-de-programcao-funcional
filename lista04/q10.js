//Q10. Escreva uma função recursiva chamada tamanho que retorne o comprimento de uma string.

/*
P(1)--> tamanho('')---> 0
p(2)--> tamanho('.')--> 1+ P(1)

...

P(n)--> tamanho('n-caracteres') + P(n-1);


*/

const tamanho = (str) =>{
  if (str == ''){ return 0}
  else{
    return 1 + tamanho(str.slice(1))
  }
}

console.log(tamanho('123456789'));