const repita = (txt) => (n) =>{
  if(n === 0) return '';
  return repita(txt)(n-1) + txt;
}

console.log(repita('hue')(15) + 'br');

/*
  caso base:
    repita (txt, 0) = ''

  passo indutivo:
    repita (txt, 1) = repita(txt, 0) + txt
    repita (txt, 2) = repita(txt, 1) + txt
    ...
    repita(txt, n) = repita(txt, n-1) + txt


*/