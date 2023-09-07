//Função que determina se uma string é um palíndromo. Você deve desconsiderar todos caracteres que não sejam letras. Tanto faz maiúsculas e minúsculas. Você deve desconsiderar acentuações (substituir pelas letras sem acentos). A chamada palindromo('Socorram-me, subi no ônibus em marrocos!'), por exemplo, deve retornar TRUE.

/*

p(1)--> verifPalindromo('')--> true
p(2)--> verifPalindromo('a')--> true
p(3)-->



*/

const verifPalindromo = (txt) => {
  console.log(txt);
  if (txt.length < 2) return true;
  else{
    if(txt[0] != txt.slice(-1)) return false
    else return verifPalindromo(txt.slice(1, -1));
  }
  


}

console.log(verifPalindromo('arara'));