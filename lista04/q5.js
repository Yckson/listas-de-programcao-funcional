//Potência natural do número 2: 2^n. Não utilizar o operador "**"

/*

P(0): 2^0 = 1
P(1): 2^1 = 2 * 2^0
P(2): 2^2 = 2 * 2^1
P(3): 2^3 = 2 * 2^2

P(n): 2^n = 2 * 2^(n-1)

*/

const potNatural2 = (n) => {
  if (n===0){return 1}
  else{
    return 2 * potNatural2(n-1);
  }
}

console.log(potNatural2(1));