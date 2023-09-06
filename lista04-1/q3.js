//Q3. Soma dos N primeiros números naturais.
/*

Formulação recursiva:

P(1): 1
P(2): 1 + 2
P(3): 1 + 2 + 3
P(n): 1 + 2 + ... + N

*/

const somaNaturais = (n) => {
  if (n == 1){
    return 1;
  }
  else{
    return n + somaNaturais(n-1);
  }
}

console.log(somaNaturais(9999))