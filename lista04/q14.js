//Q14. Criar uma função recursiva chamada repita que pega dois parâmetros e repete a string n vezes. O primeiro parâmetro txt é a string a ser repetida e o segundo parâmetro é o número de vezes que a string deve ser repetida.

/*

p(1)--> repita(txt, 0) --> ''
p(2)--> repita(txt, 1) --> txt + p(1)
p(3)--> repita(txt, 2) --> txt + p(2)

...

p(n)--> repita(txt, n) --> txt + p(n-1)




*/


const repita = (txt, n) => {
  if(n === 0){ return '' }
  else{
    return txt + repita(txt, n-1);
  }
}

console.log(repita('a', 5));