const enesimo = (n) => {
  if (n == 1){
    return 3;
  }
  return enesimo(n-1) * 2;
}

console.log(enesimo(4))
/*

  caso base:
    enesimo(1) = 3
  
  passo indutivo:
    enesimo(2) = anterior * 2
    enesimo(3) = 12
    enesimo(n) = n * 2**(n-1)

*/