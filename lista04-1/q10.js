//Q10. Escreva uma função recursiva chamada tamanho que retorne o comprimento de uma string.

const tamanho = (str) => str.split('').reduce((acumulador, atual)=>{
  return acumulador + 1
}, 0);

console.log(tamanho("0123456789"));