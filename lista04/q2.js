const fatorial = (n) =>{
  if (n == 0) return 1;
  
  return n * fatorial(n-1);
} 

console.log(fatorial(5));

/*

  caso base:
    fatorial (0) = 1

  indutivo:
    fatorial (1) = 1 * fatorial(0)
    fatorial (2) = 2 * fatorial(1)
    fatorial (3) = 3 * fatorial(2)
    ...
    fatorial (n) = n * fatorial(n-1)






*/