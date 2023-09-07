//Q12. Escreva uma função recursiva que inverte uma string. Nome deve ser inverte.


/*

p(1)--> inverte('') --> '';
p(2)--> inverte('a') --> 'a' + inverte('');
p(3)--> inverte('ab') --> 'b' + inverte('a')

p(n)--> inverte(n)--> n + inverte(n-1);



*/

const inverte = (str) =>{
  console.log(str)
  if (str == ''){ return ''}
  else{
    return inverte(str.slice(1)) + str[0];
  }
}

console.log(inverte('123'))