//Q16. Crie uma função chamada converter que pega um número inteiro positivo na base 10 e o 
//converte para uma outra base passada como argumento: base 2, base 8, ou base 16. 
//A função deve retornar a string representativa do número nessa nova base.

/*

caso 1: dec -> bin

  p(1): converter(0) --> '0'
  p(2): converter(1)--> '1 % 2' --> '1'
  p(3): converter(2)--> '1 % 2' + '2 % 2' --> '10'
  p(4): converter(3)--> '1 % 2' + '3 % 2' --> '11'
  p(5): converter(4)--> '1 % 2' + '2 % 2' + '4 % 2' --> '100'

  p(n): converter(n)--> '1 % 2' + ... + '(n//2) % 2' + 'n//2 % 2' --> '1...'

    ...
*/

const converter = (base) => (valor) => {
  if (valor === 0) return 0;

  const dicionarioHex = ['F', 'E', 'D', 'C', 'B', 'A'];
  const resto = (valor % base);

  if (base === 16 && resto > 9){
    return (converter(base)(Number.parseInt(valor/base))).toString() + dicionarioHex[15-resto];
  }
  else{
    return (converter(base)(Number.parseInt(valor/base))).toString() + resto.toString();;
  }
    
}


const dectobin = converter(2);
const dectooct = converter(8);
const dectohex = converter(16);
const dectodec = converter(10)

console.log(dectobin(235));
console.log(dectooct(235));
console.log(dectohex(235));
console.log(dectodec(235))